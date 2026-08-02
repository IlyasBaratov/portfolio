import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Project } from "../types";
import { LiveProjectButton } from "./Buttons";

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

export function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const animatedScale = useTransform(
    scrollYProgress,
    [0.25, 0.75],
    [1, targetScale],
  );

  return (
    <div ref={containerRef} className="relative h-[85vh]">
      <motion.article
        className="sticky overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          top: `calc(${index * 28}px + clamp(6rem, 12vw, 8rem))`,
          scale: shouldReduceMotion ? 1 : animatedScale,
          transformOrigin: "top center",
        }}
      >
        <div className="mb-5 grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 sm:mb-7 md:grid-cols-[auto_0.65fr_1.25fr_auto] md:gap-x-8">
          <p className="row-span-2 font-black leading-none text-[clamp(3rem,10vw,8.75rem)] md:row-span-1">
            {project.number}
          </p>
          <p className="text-xs font-light uppercase tracking-[0.2em] opacity-60 sm:text-sm md:text-base">
            {project.category}
          </p>
          <h3 className="text-lg font-medium uppercase leading-tight sm:text-2xl md:text-[clamp(1.3rem,2.2vw,2.1rem)]">
            {project.name}
          </h3>
          <LiveProjectButton
            className="col-span-2 mt-1 justify-self-start md:col-span-1 md:mt-0 md:justify-self-end"
            href={project.href}
          />
        </div>

        <div className="grid grid-cols-[2fr_3fr] gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <img
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[24px] object-cover sm:rounded-[40px] md:rounded-[60px]"
              src={project.images[0]}
              alt={`${project.name} detail one`}
              loading="lazy"
              decoding="async"
            />
            <img
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[24px] object-cover sm:rounded-[40px] md:rounded-[60px]"
              src={project.images[1]}
              alt={`${project.name} detail two`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            className="h-full min-h-0 w-full rounded-[24px] object-cover sm:rounded-[40px] md:rounded-[60px]"
            src={project.images[2]}
            alt={`${project.name} primary artwork`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.article>
    </div>
  );
}
