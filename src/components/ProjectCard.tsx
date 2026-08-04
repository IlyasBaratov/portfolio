import { useRef, type CSSProperties } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
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
      className="project-card sticky h-[max(500px,62svh)] sm:h-[76vh] lg:h-[80vh] 2xl:h-[85vh]"
      style={{
        "--project-card-phone-offset": `${index * 14}px`,
        "--project-card-laptop-offset": `${index * 22}px`,
        "--project-card-wide-offset": `${index * 28}px`,
        top: "calc(var(--project-card-top) + var(--project-card-offset))",
        zIndex: index + 1,
      } as CSSProperties}
    >
      <motion.article
        className="overflow-hidden rounded-[28px] border border-[#D7E2EA]/80 bg-[#0C0C0C] p-3.5 text-[#D7E2EA] shadow-[0_20px_70px_rgba(0,0,0,0.5)] sm:rounded-[40px] sm:border-2 sm:p-5 lg:rounded-[44px] lg:p-6 xl:rounded-[50px] 2xl:rounded-[60px] 2xl:p-8"
        style={{
          scale: shouldReduceMotion ? 1 : animatedScale,
          transformOrigin: "top center",
          willChange: shouldReduceMotion ? "auto" : "transform",
        }}
      >
        <div className="mb-3 grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-3 sm:mb-4 sm:gap-x-5 md:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-6 2xl:mb-5 2xl:gap-x-8">
          <p className="text-[3.25rem] font-black leading-none sm:text-[4.5rem] lg:text-[clamp(4rem,7vw,6.5rem)] xl:text-[clamp(4.5rem,7.5vw,7rem)] 2xl:text-[clamp(5rem,9vw,8.75rem)]">
            {project.number}
          </p>
          <div className="min-w-0 flex flex-col gap-1 sm:gap-2 2xl:gap-3">
            <p className="text-[0.64rem] font-medium uppercase tracking-[0.12em] text-[#D7E2EA]/65 sm:text-xs sm:text-[#D7E2EA] lg:text-sm 2xl:text-base">
              {project.category}
            </p>
            <h3 className="text-[1.05rem] font-medium leading-[1.15] sm:text-lg sm:font-light lg:text-[clamp(1rem,1.4vw,1.25rem)] 2xl:text-[clamp(1.1rem,1.6vw,1.5rem)]">
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

        <p className="mb-5 hidden max-w-5xl text-sm font-light leading-relaxed text-[#D7E2EA]/75 sm:block lg:text-[clamp(0.82rem,1vw,0.95rem)] 2xl:mb-6 2xl:text-[clamp(0.9rem,1.15vw,1.05rem)]">
          {project.description}
        </p>

        <img
          className="h-[clamp(190px,54vw,230px)] w-full rounded-[20px] object-cover object-top sm:h-[clamp(230px,30vw,360px)] sm:rounded-[34px] lg:h-[clamp(260px,30vw,390px)] lg:rounded-[40px] xl:h-[clamp(280px,30vw,430px)] xl:rounded-[46px] 2xl:h-[clamp(300px,30vw,470px)] 2xl:rounded-[60px]"
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          decoding="async"
        />

        <details className="group mt-3 rounded-2xl border border-[#D7E2EA]/20 bg-white/[0.04] sm:hidden">
          <summary className="project-summary flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#D7E2EA]/85">
            <span>About this project</span>
            <ChevronDown
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="border-t border-[#D7E2EA]/15 px-4 py-3 text-[0.78rem] font-light leading-[1.6] text-[#D7E2EA]/75">
            {project.description}
          </p>
        </details>
      </motion.article>
    </div>
  );
}
