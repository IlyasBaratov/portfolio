import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useMemo, type ElementType, type ReactNode } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export function FadeIn({
  as = "div",
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = useMemo(() => motion.create(as), [as]);

  return (
    <MotionElement
      initial={shouldReduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : delay,
        duration: shouldReduceMotion ? 0 : duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
