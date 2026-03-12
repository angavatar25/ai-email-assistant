import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SuggestionChip from './components/SuggestionChip';
import MessageInput from './components/Inputs/MessageInput';

function App() {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);

  const suggestions = [
    { label: "Future of E-Commerce in 2030", emoji: "💫" },
    { label: "Healthy Breakfast in 10 Minutes", emoji: "🥗" },
  ];

  const handleSend = () => {
    if (!message.trim()) return;
    setHistory((prev) => [...prev, message.trim()]);
    setMessage("");
  };

  const handleSuggestion = (label) => setMessage(label);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6 gap-8">

      {/* Page title */}
      <h1 className="text-2xl font-semibold text-blue-400 tracking-tight">
        AI Chat
      </h1>

      {/* Card */}
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Orb + Heading */}
        <div className="flex flex-col items-center pt-10 pb-6 px-6 gap-5">
          {/* Animated orb */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-blue-300 to-violet-300 blur-md opacity-80 animate-pulse" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-pink-200 via-sky-200 to-purple-300 blur-sm" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
            Ask Super AI anything
          </h2>
        </div>

        {/* Message history */}
        {history.length > 0 && (
          <div className="px-5 pb-2 max-h-32 overflow-y-auto flex flex-col gap-2">
            {history.map((msg, i) => (
              <div
                key={i}
                className="self-end bg-blue-50 text-blue-800 text-sm px-3 py-2 rounded-2xl rounded-br-sm max-w-[85%]"
              >
                {msg}
              </div>
            ))}
          </div>
        )}

        {/* Suggestion chips */}
        <div className="flex gap-2 px-5 pb-4">
          {suggestions.map((s) => (
            <SuggestionChip
              key={s.label}
              label={s.label}
              emoji={s.emoji}
              onClick={handleSuggestion}
            />
          ))}
        </div>

        {/* Message input + send button */}
        <MessageInput
          value={message}
          onChange={setMessage}
          onSend={handleSend}
        />
      </div>

      {/* Subtitle */}
      <p className="text-slate-400 text-sm text-center leading-relaxed">
        Ask AI with instant topic prompts.
      </p>
    </div>
  );
}

export default App
