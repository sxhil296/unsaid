"use client";
import { fetchMessages } from "@/backendServices";
// import Hero from "./hero";
import MsgCardGrid, { MessageType } from "./msgCardGrid";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import MsgCardGridSkeleton from "./msgCardGridSkeleton";
import { Typewriter } from "react-simple-typewriter";
import SearchSection from "./searchSection";
import debounce from "lodash.debounce";

export default function HomePage() {
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
      <section className="relative flex min-h-[40dvh] flex-col overflow-hidden pt-32 pb-24  sm:py-12 items-center  px-5 md:pt-[200px] md:pb-[100px] ">
        <div className="mx-auto w-full max-w-[800px]">
          <h1 className="leading-normal text-center text-3xl md:text-6xl font-heading text-foreground mb-12">
            A Place for the Messages <br />
            <Typewriter
              words={[
                "That Never Made It.",
                "Left Unspoken.",
                "You Still Think About.",
                "That Never Reached Them.",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <SearchSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
          />
        </div>
      </section>
      {!loading && messages.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No messages found.</div>
      )}
      {loading ? <MsgCardGridSkeleton /> : <MsgCardGrid messages={messages} />}
    </div>
  );
}
