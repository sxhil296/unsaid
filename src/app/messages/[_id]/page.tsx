"use client";
import { fetchMessageById } from "@/backendServices";
import { MessageType } from "@/components/sections/msgCardGrid";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { useParams } from "next/navigation";
import { Mail } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function MessagePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<MessageType>();
  const params = useParams();
  const messageId = params._id as string;

  const getMessageById = async (id: string) => {
    try {
      const result = await fetchMessageById(id);
      if (result.success) {
        // console.log("Messages fetched successfully:", result.data);
        setMessage(result?.data);
      } else {
        toast.error("Failed to fetch messages. Please try again later.");
      }
    } catch (error) {
      // console.error("Error fetching messages:", error);
      toast.error("An error occurred while fetching messages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessageById(messageId);
  }, []);
  // console.log("Message:", message);
  return (
    <div className="min-h-[calc(100vh-115px)]">
      <div className="mx-auto w-full max-w-[800px] pt-32  pb-8 sm:pb-16 px-5 flex justify-start items-center gap-6">
      
        <h1 className="text-3xl md:text-6xl font-heading text-foreground text-center">
          To : <span className="text-main">{message?.to || ""}</span>
        </h1>
      </div>

      {!loading && !message && (
        <div className="text-center text-gray-500 mt-8">No message found.</div>
      )}
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        
          <div className="w-full sm:max-w-[800px]    mx-auto px-5 ">
            <div className="w-full  border-3 border-black p-4 bg-secondary-background cursor-pointer shadow-md">
              <div className="w-full flex justify-between items-center text-base font-semibold text-black pb-1">
                <div className="flex justify-start items-center gap-2">
                  <div className="text-xs text-center w-full pt-2">
                    {formatDate(message?.createdAt || "")}
                  </div>
                </div>
                <Mail />
              </div>
              <div
                className="w-full p-2 min-h-[200px] max-h-[200px] overflow-hidden"
                style={{
                  backgroundColor: message?.bgColor,
                  color: message?.textColor,
                }}
              >
                {message?.message}
              </div>
            </div>
          </div>
        
      )}
    </div>
  );
}
