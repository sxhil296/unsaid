'use client';
import { formatDate } from "@/lib/utils";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

interface MsgCardProps {
  _id:string;
  msgBg: string;
  msgColor: string;
  to: string;
  msg: string;
  createdAt: string;
}

export default function MsgCard({
  _id,
  msgBg,
  msgColor,
  to,
  msg,
  createdAt,
}: MsgCardProps) {
  const router = useRouter();
  return (
    <div className="w-full  border-3 border-black p-4 bg-secondary-background cursor-pointer shadow-md"
    onClick={()=> router.push(`/messages/${_id}`)}
    >
      <div className="w-full flex justify-between items-center text-base font-semibold text-black pb-1">
        <div className="flex justify-start items-center gap-2">
          <p>To:</p>
          <p>{to}</p>
        </div>
        <Mail />
      </div>
      <div
        className="w-full p-2 min-h-[200px] max-h-[200px] overflow-hidden"
        style={{ backgroundColor: msgBg, color: msgColor }}
      >
        {msg.length > 200 ? msg.slice(0, 200) + "..." : msg}
      </div>
      <div className="text-xs text-center w-full pt-2">
        {formatDate(createdAt)}
      </div>
    </div>
  );
}

// import { Mail } from "lucide-react";

// interface MsgCardProps {
//   msgBg: string;
//   msgColor: string;
//   to: string;
//   msg: string;
// }

// export default function MsgCard({ msgBg, msgColor, to, msg }: MsgCardProps) {
//   return (
//     <div className="w-full max-w-sm mx-auto">

//       <div
//         className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl"
//         style={{
//           backgroundColor: msgBg || "#fef08a",
//           filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.2))",
//         }}
//       >

//         <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/60 rounded-sm shadow-sm border border-gray-200"></div>

//         <div className="p-6 pt-8">

//           <div className="flex justify-between items-center text-sm font-medium pb-3 border-b border-black/20">
//             <div
//               className="flex items-center gap-2"
//               style={{ color: msgColor }}
//             >
//               <span>To:</span>
//               <span className="font-semibold">{to}</span>
//             </div>
//             <Mail className="w-4 h-4" style={{ color: msgColor }} />
//           </div>

//           <div
//             className="mt-4 text-sm leading-relaxed min-h-[160px] max-h-[160px] overflow-hidden font-handwriting"
//             style={{ color: msgColor }}
//           >
//             {msg}
//           </div>
//         </div>

//         <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-white to-transparent pointer-events-none rounded-sm"></div>
//       </div>
//     </div>
//   );
// }
