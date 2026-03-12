const SuggestionChip = ({ label, emoji, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className="flex items-start gap-2 flex-1 min-w-0 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 leading-snug transition-all duration-150 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
    >
      <span className="text-base shrink-0 mt-0.5">{emoji}</span>
      <span className="line-clamp-2">{label}</span>
    </button>
  );
};

export default SuggestionChip;