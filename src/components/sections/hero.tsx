import MsgCard from "./msgCard";
import SearchSection from "./searchSection";
export const mockMessages = [
  {
    to: "Ananya Sharma",
    msg: "Hey Ananya, just checking in to confirm your attendance for the event on Friday. Let me know if you have any questions!",
    msgBg: "#FFF8DC", // cornsilk
    msgColor: "#333333",
  },
  {
    to: "Rohan Mehta",
    msg: "Hi Rohan,\nPlease find the updated deck attached. Let me know your feedback before the meeting.",
    msgBg: "#E6F7FF", // light blue
    msgColor: "#004085",
  },
  {
    to: "Tanvi Singh",
    msg: "Hey Tanvi, congrats on your recent promotion! 🎉 Wishing you all the best in your new role.",
    msgBg: "#F0FFF0", // honeydew
    msgColor: "#2E8B57",
  },
  {
    to: "Arjun Verma",
    msg: "Arjun, could you please review the ticket backlog before our sprint planning tomorrow?",
    msgBg: "#FFF0F5", // lavender blush
    msgColor: "#800080",
  },
  {
    to: "Nikita Rao",
    msg: "Nikita,\nThanks for your quick response earlier. I’ve updated the timeline accordingly.",
    msgBg: "#FFFAF0", // floral white
    msgColor: "#8B4513",
  },
];

export default function Hero() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-hidden py-32  sm:py-12 items-center bg-background px-5 md:py-[200px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-full max-w-[800px]">
        <h1 className="leading-normal text-center text-3xl md:text-6xl font-heading text-foreground">
          A Place for the Messages <br /> That Never Made It.
        </h1>
        <SearchSection />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 max-w-[1200px]">
        {mockMessages.map((message, index) => (
          <MsgCard
            key={index}
            msgBg={message.msgBg}
            msgColor={message.msgColor}
            to={message.to}
            msg={message.msg}
          />
        ))}
      </div>
    </main>
  );
}
