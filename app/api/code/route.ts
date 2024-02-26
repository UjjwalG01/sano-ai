import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI, } from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

interface MessageInterface {
    role: string;
    content: string;
}

const instructions: MessageInterface = {
    role: "system",
    content: "You are a code generator. You must answer the questions only in a code snippet. Use code comments for explanation. Structure the code in proper order."
}

const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = await body;

        if (!userId) return new NextResponse("Unauthorised", { status: 401 })

        if (!process.env.OPEN_API_KEY) return new NextResponse("OpenAI API key not available", { status: 500 })

        if (!messages) return new NextResponse("Messages are required", { status: 400 })

        const freeTrial = await checkApiLimit();

        if (!freeTrial) return new NextResponse("Free Trial limit exceeded!", { status: 403 })

        const response = openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructions, ...messages]
        })

        await increaseApiLimit();

        return NextResponse.json((await response).choices[0].message)

    } catch (error) {
        console.error("[CODE_ERROR]", error);
        return new NextResponse("Internal server error", { status: 500 })
    }
}
