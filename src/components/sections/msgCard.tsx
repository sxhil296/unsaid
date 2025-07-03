// import { Mail } from "lucide-react";

// interface MsgCardProps {
//   msgBg: string;
//   msgColor: string;
//   to: string;
//   msg: string;
// }

// export default function MsgCard({ msgBg, msgColor, to, msg }: MsgCardProps) {
//   return (
//     <div className="w-full  border-3 border-black p-4 bg-secondary-background">
//       <div className="w-full flex justify-between items-center text-base font-semibold text-black pb-1">
//         <div className="flex justify-start items-center gap-2">
//           <p>To:</p>
//           <p>{to}</p>
//         </div>
//         <Mail />
//       </div>
//       <div
//         className={`w-full p-2 min-h-[200px] max-h-[200px] overflow-hidden`}
//         style={{ backgroundColor: msgBg, color: msgColor }}
//       >
//         {msg}
//       </div>
//     </div>
//   );
// }

import { Mail } from "lucide-react";

interface MsgCardProps {
  msgBg: string;
  msgColor: string;
  to: string;
  msg: string;
}

export default function MsgCard({ msgBg, msgColor, to, msg }: MsgCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Sticky note container with rotation and shadow */}
      <div
        className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl"
        style={{
          backgroundColor: msgBg || "#fef08a", // Default to yellow if no msgBg provided
          filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.2))",
        }}
      >
        {/* Tape effect at the top */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/60 rounded-sm shadow-sm border border-gray-200"></div>

        {/* Main sticky note content */}
        <div className="p-6 pt-8">
          {/* Header with To: field and mail icon */}
          <div className="flex justify-between items-center text-sm font-medium pb-3 border-b border-black/20">
            <div
              className="flex items-center gap-2"
              style={{ color: msgColor }}
            >
              <span>To:</span>
              <span className="font-semibold">{to}</span>
            </div>
            <Mail className="w-4 h-4" style={{ color: msgColor }} />
          </div>

          {/* Message content */}
          <div
            className="mt-4 text-sm leading-relaxed min-h-[160px] max-h-[160px] overflow-hidden font-handwriting"
            style={{ color: msgColor }}
          >
            {msg}
          </div>
        </div>

        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-white to-transparent pointer-events-none rounded-sm"></div>
      </div>
    </div>
  );
}
