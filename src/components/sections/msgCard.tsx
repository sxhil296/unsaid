import { Mail } from "lucide-react";

interface MsgCardProps {
  msgBg: string;
  msgColor: string;
  to: string;
  msg: string;
}

export default function MsgCard({ msgBg, msgColor, to, msg }: MsgCardProps) {
  return (
    <div className="w-full  border-3 border-black p-4 bg-secondary-background">
      <div className="w-full flex justify-between items-center text-base font-semibold text-black pb-1">
        <div className="flex justify-start items-center gap-2">
          <p>To:</p>
          <p>{to}</p>
        </div>
        <Mail />
      </div>
      <div
        className={`w-full p-2 min-h-[200px] max-h-[200px] overflow-hidden`}
        style={{ backgroundColor: msgBg, color: msgColor }}
      >
        {msg}
      </div>
    </div>
  );
}
