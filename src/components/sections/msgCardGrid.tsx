import MsgCard from "./msgCard";

export type MessageType = {
  to: string;
  message: string;
  bgColor: string;
  textColor: string;
  createdAt: string;
};
interface MsgCardGridProps {
  messages: MessageType[];
}

export default function MsgCardGrid({ messages }: MsgCardGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4 md:gap-8 max-w-[1300px] mx-auto px-5 pb-12">
      {messages.map((message, index) => (
        <MsgCard
          key={index}
          createdAt={message.createdAt}
          msgBg={message.bgColor}
          msgColor={message.textColor}
          to={message.to}
          msg={message.message}
        />
      ))}
    </div>
  );
}
