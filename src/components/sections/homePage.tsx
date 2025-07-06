"use client";
import { fetchMessages } from "@/backendServices";
import Hero from "./hero";
import MsgCardGrid, { MessageType } from "./msgCardGrid";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const getAllMessages = async () => {
    try {
      const result = await fetchMessages();
      if (result.success) {
        console.log("Messages fetched successfully:", result.data);
        setMessages(result?.data?.messages);
      } else {
        toast.error("Failed to fetch messages. Please try again later.");
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllMessages();
  }, []);
  return (
    <div className="min-h-screen">
      <Hero />
      <MsgCardGrid messages={messages} />
    </div>
  );
}
