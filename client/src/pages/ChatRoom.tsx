import { useEffect, useRef } from "react";
import ReceiverBubble from "../components/Chats/ReceiverBubble";
import { DEMO_MESSAGES } from "../DemoMessage";
import StatusRow from "../components/StatusRow";
import SenderBubble from "../components/Chats/SenderBubble";

const ChatRoom = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Fade-in keyframe injected once */}
      <style>{`
        @keyframes fadeChar {
          from { opacity: 0; transform: translateY(3px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col" style={{ height: 620 }}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-[15px]">
              <span className="text-gray-400 text-xs">⊞</span>
              Brand Guardian
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <button className="hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
              <button className="hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              </button>
              <button className="hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-6">

            {/* Status: active */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="text-green-500">✓</span>
              <span>Brand guardian is now active!</span>
              <span>3:15 PM</span>
            </div>

            {/* Message 1 */}
            <ReceiverBubble text={DEMO_MESSAGES[0].text} isGenerating={DEMO_MESSAGES[0].isGenerating} />

            {/* Message 2 */}
            <ReceiverBubble text={DEMO_MESSAGES[1].text} isGenerating={DEMO_MESSAGES[1].isGenerating} />

            {/* Status: monitoring */}
            <StatusRow label="Brand guardian is now in monitoring state!" time="3:18 PM" />

            {/* Download report bubble */}
            <div className="self-start max-w-[72%] group relative">
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm text-[14px] text-gray-800 leading-relaxed">
                Done with my first scan! I analyzed 257 'Acme' mentions – sentiment is currently neutral. Now, I'll be monitoring for new activity in real-time
              </div>
              <button className="mt-2 flex items-center gap-2 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 bg-white hover:bg-gray-50 shadow-sm transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download report
              </button>
            </div>

            {/* Sender messages */}
            <SenderBubble text={DEMO_MESSAGES[2].text} />
            <SenderBubble text={DEMO_MESSAGES[3].text} />

            {/* Last receiver */}
            <ReceiverBubble text={DEMO_MESSAGES[4].text} isGenerating={DEMO_MESSAGES[4].isGenerating} />

            <div ref={bottomRef} className="pb-2" />
          </div>

          {/* Input bar */}
          <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-3 bg-white">
            <input
              placeholder="Message Brand Guardian…"
              className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
            />
            <button className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default ChatRoom;