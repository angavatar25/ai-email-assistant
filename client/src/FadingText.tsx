const FadingText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("").map((char, i) => (
        <span key={i} style={{ animation: "fadeChar 0.25s ease forwards", opacity: 0,
          display: char === "\n" ? "block" : "inline" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
};

export default FadingText;