import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI, } from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "512x512" } = await body;

        if (!userId) return new NextResponse("Unauthorised", { status: 401 })

        if (!process.env.OPEN_API_KEY) return new NextResponse("OpenAI API key not available", { status: 500 })

        if (!prompt) return new NextResponse("Prompt is required", { status: 400 })
        if (!amount) return new NextResponse("Amount is required", { status: 400 })
        if (!resolution) return new NextResponse("Resolution is required", { status: 400 })

        const freeTrial = await checkApiLimit();

        if (!freeTrial) return new NextResponse("Free Trial limit exceeded!", { status: 403 })

        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: prompt,
            size: resolution,
            n: parseInt(amount, 10)
        })

        await increaseApiLimit();

        return NextResponse.json(response.data)

    } catch (error) {
        console.error("[IMAGE_ERROR]", error);
        return new NextResponse("Internal server error", { status: 500 })
    }
}
