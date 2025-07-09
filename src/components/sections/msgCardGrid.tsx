import MsgCard from "./msgCard";

export type MessageType = {
  _id: string;
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
  const pinnedMessage = messages.find(
    (m) => m.createdAt === "2025-07-08T18:09:51.799Z"
  );
  const rest = messages.filter((m) => m !== pinnedMessage);

  const orderedMessages = pinnedMessage ? [pinnedMessage, ...rest] : messages;

  return (
    <div className="w-full max-w-[1300px] mx-auto px-5  pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {orderedMessages.map((message, index) => (
          <MsgCard
            key={index}
            _id={message._id}
            createdAt={message.createdAt}
            msgBg={message.bgColor}
            msgColor={message.textColor}
            to={message.to}
            msg={message.message}
          />
        ))}
      </div>
    </div>
  );
}
