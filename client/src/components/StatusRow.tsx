const StatusRow = ({ label, time }: { label: string; time: string }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-xs text-gray-400 py-1">
      <span className="text-gray-300">⊞</span>
      <span>{label}</span>
      <span>{time}</span>
    </div>
  );
};

export default StatusRow;