const SenderBubble = ({ text }: { text: string }) => {
  return (
    <div className="self-end max-w-[72%] w-fit bg-blue-500 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm text-right">
      <p className="text-white text-[14px] leading-relaxed">{text}</p>
    </div>
  );
};

export default SenderBubble;