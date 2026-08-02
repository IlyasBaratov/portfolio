import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

interface AnimatedCharacterProps {
  character: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

function AnimatedCharacter({
  character,
  index,
  total,
  progress,
  reducedMotion,
}: AnimatedCharacterProps) {
  const start = index / total;
  const end = Math.min(start + 1 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const displayCharacter = character === " " ? "\u00A0" : character;

  return (
    <span className="relative inline-block" aria-hidden="true">
      <span className="opacity-0">{displayCharacter}</span>
      <motion.span
        className="absolute inset-0"
        style={{ opacity: reducedMotion ? 1 : opacity }}
      >
        {displayCharacter}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={paragraphRef} className={className} aria-label={text}>
      {Array.from(text).map((character, index) => (
        <AnimatedCharacter
          key={`${character}-${index}`}
          character={character}
          index={index}
          total={text.length}
          progress={scrollYProgress}
          reducedMotion={Boolean(shouldReduceMotion)}
        />
      ))}
    </p>
  );
}
