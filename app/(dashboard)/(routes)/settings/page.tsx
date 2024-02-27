"use client";

import * as z from "zod";
import axios from "axios";
import { Code2, Settings } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { Heading } from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Empty from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

interface MessageInterface {
  role: string;
  content: string;
}

const CodePage = () => {
  const proModel = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<MessageInterface[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: MessageInterface = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="my-4">
      <Heading
        title="Settings"
        description="Configure your model as your assistant."
        icon={Settings}
        iconColor="text-gray-900"
        bgColor="bg-gray-900/10"
      />
      <div className="px-4 md:px-8 my-4">
        <div className="w-full py-4 gap-2">
          <Button variant={"premium"} className="cursor-pointer font-semibold">
            Manage your subscription
          </Button>
        </div>
        <div className="mt-4 space-y-4"></div>
      </div>
    </div>
  );
};

export default CodePage;
