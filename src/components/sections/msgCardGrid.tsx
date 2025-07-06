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

];

export type MessageType = {
  to: string;
  message: string;
  bgColor: string;
  textColor: string;
};
interface MsgCardGridProps {
  messages: MessageType[];
}

export default function MsgCardGrid({ messages }: MsgCardGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 md:gap-8 max-w-[1200px] mx-auto px-5 pb-12">
      {messages.map((message, index) => (
        <MsgCard
          key={index}
          msgBg={message.bgColor}
          msgColor={message.textColor}
          to={message.to}
          msg={message.message}
        />
      ))}
    </div>
  );
}
