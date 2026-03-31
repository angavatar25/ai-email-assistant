type Role = "sender" | "receiver";

interface Message {
  id: number;
  role: Role;
  text: string;
  isGenerating?: boolean;
}

export const DEMO_MESSAGES: Message[] = [
  {
    id: 1,
    role: "receiver",
    text: "Yo, I'm officially on the job! Starting my first scan of the sources for mentions of 'Acme' based on the info you provided earlier.",
    isGenerating: true,
  },
  {
    id: 2,
    role: "receiver",
    text: "I'm running with the basics, but to get you the best results, you could give me a bit more info. No pressure, you can do this anytime using the top right gear icon ⚙️",
    isGenerating: true,
  },
  {
    id: 3,
    role: "sender",
    text: "Great work, keep it up",
  },
  {
    id: 4,
    role: "sender",
    text: "Is there any significant negative clusters yet?",
  },
  {
    id: 5,
    role: "receiver",
    text: "Thanks, Ali! 🧡\n\nI haven't detected any significant negative clusters yet. Want me to show the most positive or negative mentions?",
    isGenerating: true,
  },
];