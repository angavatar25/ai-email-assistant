import SendButton from "../Buttons/SendButton";
import BasicInput from "./BasicInput";

const MessageInput = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-t border-slate-100">
      <BasicInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        handleKeyDown={handleKeyDown}
      />
      <SendButton onClick={onSend} disabled={!value.trim()} />
    </div>
  );
};

export default MessageInput;