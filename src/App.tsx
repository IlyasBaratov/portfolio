import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { AnimatedText } from "./components/AnimatedText";
import { ContactButton, ResumeButton } from "./components/Buttons";
import { ContactLinks } from "./components/ContactLinks";
import { FadeIn } from "./components/FadeIn";
import { Magnet } from "./components/Magnet";
import { ProjectCard } from "./components/ProjectCard";
import { marqueeImages, projects, services } from "./data";

const portraitUrl = "/ilyas-graduation.jpg";

const aboutText =
  "Results-driven Software Engineer with hands-on experience building and deploying production-ready web applications and backend systems. Strong background in Java, Spring Boot, Python, FastAPI, JavaScript, SQL, and cloud platforms. Creator of a full-stack Weather Analytics platform integrating multiple third-party APIs with async processing and persistent storage, deployed on Microsoft Azure. Experienced in system design, API integration, and cloud deployment, with growing expertise in AWS and AI. Proven collaborator with strong problem-solving skills and a passion for scalable software.";

const aboutDecorations = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className:
      "top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className:
      "bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className:
      "top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className:
      "bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
] as const;

function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
        aria-label="Primary navigation"
      >
        <a
          className="transition-opacity duration-200 hover:opacity-70"
          href="#about"
        >
          About
        </a>
        <a
          className="transition-opacity duration-200 hover:opacity-70"
          href="#services"
        >
          MY EXPERTISE
        </a>
        <a
          className="transition-opacity duration-200 hover:opacity-70"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="transition-opacity duration-200 hover:opacity-70"
          href="#contact"
        >
          Contact
        </a>
      </FadeIn>

      <div className="relative z-0 mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m Ilyas
          </h1>
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[280px] sm:translate-y-0 md:w-[340px] lg:w-[390px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              className="block h-auto w-full select-none rounded-[32px] object-cover object-top shadow-[0_28px_80px_rgba(0,0,0,0.5)] sm:rounded-[40px]"
              src={portraitUrl}
              alt="Ilyas Baratov at graduation"
              decoding="async"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-end px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number>();
  const [offset, setOffset] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const updateOffset = () => {
      frameRef.current = undefined;
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    const requestUpdate = () => {
      if (!frameRef.current)
        frameRef.current = requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [shouldReduceMotion]);

  const rows = [marqueeImages.slice(0, 11), marqueeImages.slice(11)];

  return (
    <section
      ref={sectionRef}
      aria-label="Selected motion work"
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        {rows.map((row, rowIndex) => {
          const repeatedRow = [...row, ...row, ...row];
          const translateX = rowIndex === 0 ? offset - 200 : -(offset - 200);

          return (
            <div
              key={`row-${rowIndex}`}
              className="flex w-max gap-3"
              style={{
                transform: shouldReduceMotion
                  ? "translate3d(0, 0, 0)"
                  : `translate3d(${translateX}px, 0, 0)`,
                willChange: shouldReduceMotion ? "auto" : "transform",
              }}
            >
              {repeatedRow.map((src, imageIndex) => (
                <img
                  key={`${src}-${imageIndex}`}
                  className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
                  src={src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {aboutDecorations.map((decoration) => (
        <FadeIn
          key={decoration.src}
          delay={decoration.delay}
          duration={0.9}
          x={decoration.x}
          y={0}
          className={`pointer-events-none absolute z-0 ${decoration.className}`}
        >
          <img
            className="h-auto w-full select-none"
            src={decoration.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight">
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={aboutText}
            className="max-w-[820px] text-center text-[clamp(0.95rem,1.7vw,1.25rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
        </div>
        <div className="mt-14 flex flex-col items-center gap-6 sm:mt-16 sm:gap-7 md:mt-20 md:gap-8">
          <ResumeButton href="/Ilyas-Baratov-Resume.pdf" />
          <ContactButton href="mailto:ilyas.baratoff@gmail.com" />
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          My Expertise
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-[rgba(12,12,12,0.15)]">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="grid grid-cols-[auto_1fr] gap-6 border-b border-[rgba(12,12,12,0.15)] py-8 sm:gap-10 sm:py-10 md:gap-16 md:py-12"
          >
            <p className="font-black leading-none text-[clamp(3rem,10vw,8.75rem)]">
              {service.number}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:gap-5">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                {service.name}
              </h3>
              <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 isolate rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <div className="pointer-events-none sticky top-0 z-0 h-screen overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/turkmen.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/[0.42]" />
      </div>

      <div className="relative z-10 -mt-[100vh] px-5 pb-28 pt-20 sm:px-8 sm:pb-36 sm:pt-24 md:px-10 md:pb-48 md:pt-32">
        <FadeIn y={40}>
          <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
            Project
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-[1440px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
