import MsgCard from "./msgCard";

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

export default function MsgCardGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 md:gap-8 max-w-[1200px] mx-auto px-4">
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
  );
}
