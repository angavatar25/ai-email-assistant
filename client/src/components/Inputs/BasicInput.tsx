import type { ChangeEvent } from "react";

interface TInput {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const BasicInput = ({ value, onChange, handleKeyDown }: TInput) => {
  return (
    <div className="flex w-full items-center gap-3 px-4 py-3 border rounded-2xl border-slate-100">
      <input
        type="text"
        placeholder="Message"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400 font-[inherit]"
      />
    </div>
  );
};

export default BasicInput;