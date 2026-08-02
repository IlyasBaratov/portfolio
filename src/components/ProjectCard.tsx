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
        className="project-card sticky overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          top: `calc(var(--project-card-top) + ${index * 28}px)`,
          scale: shouldReduceMotion ? 1 : animatedScale,
          transformOrigin: "top center",
        }}
      >
        <div className="mb-5 grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 sm:mb-7 sm:grid-cols-[auto_1fr_auto] md:gap-x-8">
          <p className="font-black leading-none text-[clamp(3rem,10vw,8.75rem)]">
            {project.number}
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.08em] sm:text-sm md:text-base">
              {project.category}
            </p>
            <h3 className="text-base font-light leading-tight sm:text-lg md:text-[clamp(1rem,1.6vw,1.5rem)]">
              {project.name}
            </h3>
          </div>
          <LiveProjectButton
            className="col-start-2 mt-1 justify-self-start sm:col-start-auto sm:mt-0 sm:justify-self-end"
            href={project.href}
          />
        </div>

        <div className="grid grid-cols-[2fr_3fr] gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <img
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              src={project.images[0]}
              alt={`${project.name} detail one`}
              loading="lazy"
              decoding="async"
            />
            <img
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              src={project.images[1]}
              alt={`${project.name} detail two`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            className="h-full min-h-0 w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
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
