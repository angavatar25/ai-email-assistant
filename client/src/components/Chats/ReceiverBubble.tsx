import { useState } from "react";

import { useStreamText } from "../../hooks/useStreamText";
import FadingText from "../../FadingText";
import Spinner from "../Spinner";

const ReceiverBubble = ({ text, isGenerating }: { text: string; isGenerating?: boolean }) => {
  const { displayed, done } = useStreamText(text, !!isGenerating);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative self-start max-w-[72%] w-fit group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bubble */}
      <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm text-[14px] leading-relaxed text-gray-800 min-w-[48px] break-words overflow-hidden text-left">
        {isGenerating && !done ? (
          <span className="flex items-center gap-2 text-gray-400">
            <Spinner />
            <FadingText text={displayed} />
          </span>
        ) : (
          <FadingText text={displayed} />
        )}
      </div>

      {/* Edit button — bottom outer, shown on hover */}
      <button
        className={`
          absolute -bottom-6 left-2
          flex items-center gap-1 px-2 py-0.5
          rounded-full bg-white border border-gray-200 shadow-sm
          text-gray-400 text-[11px] font-medium
          transition-all duration-200
          hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300
          ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}
        `}
      >
        Edit
      </button>
    </div>
  );
}

export default ReceiverBubble;