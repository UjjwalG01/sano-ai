"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  Code,
  Image,
  MessagesSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Image Generation",
    icon: Image,
    href: "/image",
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          Explore with AI
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground font-light text-center">
          Chat with the smartest AI - Know the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <span className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </span>
              <span className="font-semibold">{tool.label}</span>
            </div>
            <ArrowRightIcon className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
