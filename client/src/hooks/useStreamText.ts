import { useEffect, useRef, useState } from "react";

export const useStreamText = (fullText: string, isGenerating: boolean, speed = 28) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    if (!isGenerating) {
      setDisplayed(fullText);
      setDone(true);
      return;
    }
    setDisplayed("");
    setDone(false);
    idx.current = 0;

    const interval = setInterval(() => {
      idx.current += 1;
      setDisplayed(fullText.slice(0, idx.current));
      if (idx.current >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, isGenerating, speed]);

  return { displayed, done };
}