"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import TypeWriterComponent from "typewriter-effect";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold text-center space-y-5">
      <div className="text-3xl sm:text-4xl md:text-5xl space-y-5 py-36 font-extrabold lg:text-6xl xl:text-7xl">
        <h1>Unleash the power of AI for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypeWriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Music Generation.",
                "Video Generation.",
                "Code Generation.",
                "Image Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Create contect 10x faster by using AI.
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant={"premium"}
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Start Generating for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
