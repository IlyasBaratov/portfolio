import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Project } from "../types";
import { ProjectLinkButton } from "./Buttons";

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
    <div
      ref={containerRef}
      className="project-card sticky h-[85vh]"
      style={{
        top: `calc(var(--project-card-top) + ${index * 28}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.article
        className="overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          scale: shouldReduceMotion ? 1 : animatedScale,
          transformOrigin: "top center",
          willChange: shouldReduceMotion ? "auto" : "transform",
        }}
      >
        <div className="mb-4 grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 sm:mb-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-8">
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
          <div className="col-span-2 flex flex-wrap gap-2 sm:gap-3 md:col-span-1 md:justify-self-end">
            {project.liveUrl ? (
              <ProjectLinkButton href={project.liveUrl} kind="live" />
            ) : null}
            {project.githubUrl ? (
              <ProjectLinkButton href={project.githubUrl} kind="github" />
            ) : null}
          </div>
        </div>

        <p className="mb-5 max-w-5xl text-[clamp(0.78rem,1.15vw,1.05rem)] font-light leading-relaxed text-[#D7E2EA]/75 sm:mb-6">
          {project.description}
        </p>

        <img
          className="h-[clamp(210px,34vw,470px)] w-full rounded-[40px] object-cover object-top sm:rounded-[50px] md:rounded-[60px]"
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          decoding="async"
        />
      </motion.article>
    </div>
  );
}
