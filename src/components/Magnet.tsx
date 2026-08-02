import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || shouldReduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const isActive =
          event.clientX >= rect.left - padding &&
          event.clientX <= rect.right + padding &&
          event.clientY >= rect.top - padding &&
          event.clientY <= rect.bottom + padding;

        if (isActive) {
          const x = (event.clientX - (rect.left + rect.width / 2)) / strength;
          const y = (event.clientY - (rect.top + rect.height / 2)) / strength;
          element.style.transition = activeTransition;
          element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else {
          element.style.transition = inactiveTransition;
          element.style.transform = "translate3d(0, 0, 0)";
        }
      });
    };

    const handlePointerLeave = () => {
      element.style.transition = inactiveTransition;
      element.style.transform = "translate3d(0, 0, 0)";
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [
    activeTransition,
    inactiveTransition,
    padding,
    shouldReduceMotion,
    strength,
  ]);

  return (
    <div
      ref={elementRef}
      className="inline-block"
      style={{ willChange: shouldReduceMotion ? "auto" : "transform" }}
    >
      {children}
    </div>
  );
}
