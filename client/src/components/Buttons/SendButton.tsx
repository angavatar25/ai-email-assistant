import { ArrowUp } from "lucide-react";

const SendButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-10 h-10 rounded-full flex items-center justify-center shrink-0
        transition-all duration-200
        ${disabled
          ? "bg-slate-200 cursor-not-allowed"
          : "bg-slate-900 hover:bg-slate-700 hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
        }
      `}
    >
      <ArrowUp color="black" />
    </button>
  );
}

export default SendButton;