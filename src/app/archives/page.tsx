"use client";
import { fetchMessages } from "@/backendServices";
import MsgCardGrid, { MessageType } from "@/components/sections/msgCardGrid";
import MsgCardGridSkeleton from "@/components/sections/msgCardGridSkeleton";
import SearchSection from "@/components/sections/searchSection";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import debounce from "lodash.debounce";

export default function ArchivesPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const getAllMessages = async (search: string, colors: string[]) => {
    try {
      const result = await fetchMessages({
        search,
        color: colors.join(","),
      });
      if (result.success) {
        console.log("Messages fetched successfully:", result.data);
        setMessages(result?.data?.messages);
      } else {
        toast.error("Failed to fetch messages. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("An error occurred while fetching messages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounced = debounce(() => {
      getAllMessages(searchQuery, selectedColors);
    }, 400);

    debounced();
    return () => debounced.cancel();
  }, [searchQuery, selectedColors]);
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-[800px] pt-32 pb-8 sm:pb-16 px-5 ">
        <h1 className="text-3xl md:text-6xl font-heading text-foreground text-center">
          Archives
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          <strong>2345</strong> messages have been shared on{" "}
          <em className="font-bold">Unsaid</em> so far — each one a window into
          someone&apos;s unspoken thoughts. Here, you can explore the heartfelt
          words people chose not to send, but still wanted to be heard.
        </p>
      </div>
      <div className="mx-auto w-full max-w-[800px] pb-8 sm:pb-16  px-5">
        <SearchSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      </div>
      {!loading && messages.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No messages found.</div>
      )}
      {loading ? <MsgCardGridSkeleton /> : <MsgCardGrid messages={messages} />}
    </div>
  );
}
