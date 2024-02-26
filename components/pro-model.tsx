"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import {
  Check,
  Code,
  Image,
  MessagesSquare,
  Music,
  Video,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";

const tools = [
  {
    label: "Conversation",
    icon: MessagesSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export const ProModal = () => {
  const proModel = useProModal();
  const [loading, setLoading] = useState(false);

  return (
    <Dialog open={proModel.isOpen} onOpenChange={proModel.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center flex-col gap-y-4 pb-2">
            <div className="flex items-center justify-center gap-x-2 font-bold py-1">
              Upgrade to PRO!
              <Badge variant={"premium"} className="uppercase font-bold py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription>
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="flex items-center justify-between mt-2 p-3 border-black/5"
              >
                <div className="flex items-center justify-center gap-x-4">
                  <div className={cn("p-3 rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-5 h-5", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary size-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            variant={"premium"}
            className="w-full font-bold outline-none flex items-center justify-center gap-x-2"
          >
            Upgrade
            <Zap className="size-5 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
