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
      "top-[3%] left-[1%] w-[76px] opacity-[0.35] sm:left-[2%] sm:w-[110px] sm:opacity-70 md:left-[3%] md:w-[135px] lg:w-[155px] xl:left-[4%] xl:w-[180px] 2xl:w-[210px] 2xl:opacity-100",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className:
      "bottom-[4%] left-[2%] w-[64px] opacity-30 sm:bottom-[6%] sm:left-[5%] sm:w-[95px] sm:opacity-70 md:left-[7%] md:w-[115px] lg:w-[135px] xl:bottom-[8%] xl:left-[9%] xl:w-[155px] 2xl:left-[10%] 2xl:w-[180px] 2xl:opacity-100",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className:
      "top-[3%] right-[1%] w-[76px] opacity-[0.35] sm:right-[2%] sm:w-[110px] sm:opacity-70 md:right-[3%] md:w-[135px] lg:w-[155px] xl:right-[4%] xl:w-[180px] 2xl:w-[210px] 2xl:opacity-100",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className:
      "bottom-[4%] right-[2%] w-[82px] opacity-30 sm:bottom-[6%] sm:right-[5%] sm:w-[110px] sm:opacity-70 md:right-[7%] md:w-[140px] lg:w-[160px] xl:bottom-[8%] xl:right-[9%] xl:w-[190px] 2xl:right-[10%] 2xl:w-[220px] 2xl:opacity-100",
    delay: 0.3,
    x: 80,
  },
] as const;

function HeroSection() {
  return (
    <section className="relative flex min-h-screen min-h-[100svh] flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 flex items-center justify-between gap-3 px-4 pt-3 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[#D7E2EA] [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center sm:px-6 sm:pt-4 sm:text-xs md:px-8 md:pt-5 md:text-[0.9rem] lg:px-10 lg:text-base xl:text-lg 2xl:pt-8 2xl:text-[1.25rem]"
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
          <span className="sm:hidden">Expertise</span>
          <span className="hidden sm:inline">My Expertise</span>
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

      <div className="relative z-0 mt-7 w-full overflow-hidden px-1 sm:mt-4 sm:px-0 md:-mt-2 lg:-mt-3 2xl:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[13.5vw] font-black uppercase leading-none tracking-tight sm:text-[14vw] md:text-[13.5vw] lg:text-[12.5vw] xl:text-[13.5vw] 2xl:text-[15.5vw]">
            Hi, i&apos;m Ilyas
          </h1>
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[230px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[270px] sm:translate-y-0 md:w-[300px] lg:w-[320px] xl:w-[350px] 2xl:w-[390px]">
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

      <div className="relative z-20 mt-auto flex items-end justify-center px-5 pb-8 sm:justify-end sm:px-8 md:px-10 md:pb-8 2xl:pb-10">
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

  const midpoint = Math.ceil(marqueeImages.length / 2);
  const rows = [marqueeImages.slice(0, midpoint), marqueeImages.slice(midpoint)];

  return (
    <section
      ref={sectionRef}
      aria-label="Selected motion work"
      className="overflow-hidden bg-[#0C0C0C] pb-8 pt-14 sm:pb-10 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-40"
    >
      <div className="flex flex-col gap-3">
        {rows.map((row, rowIndex) => {
          const repeatedRow = [...row, ...row, ...row];
          const translateX = rowIndex === 0 ? offset - 200 : -(offset - 200);

          return (
            <div
              key={`row-${rowIndex}`}
              className="flex w-max gap-2.5 sm:gap-3"
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
                  className="h-[180px] w-[280px] shrink-0 rounded-xl object-cover sm:h-[205px] sm:w-[320px] md:h-[220px] md:w-[340px] lg:h-[230px] lg:w-[360px] xl:h-[255px] xl:w-[400px] sm:rounded-2xl 2xl:h-[270px] 2xl:w-[420px]"
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-6 py-16 sm:px-8 sm:py-20 md:px-10 lg:py-24 xl:py-28 2xl:py-32"
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
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-14 2xl:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center text-[clamp(2.75rem,12vw,7rem)] font-black uppercase leading-none tracking-tight md:text-[clamp(4.5rem,9vw,7rem)] xl:text-[clamp(5rem,9vw,8rem)] 2xl:text-[clamp(6rem,10vw,10rem)]">
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={aboutText}
            className="max-w-[720px] text-left text-[0.95rem] font-normal leading-[1.75] text-[#D7E2EA] sm:text-center sm:text-base sm:font-medium lg:text-[1.05rem] xl:max-w-[780px] xl:text-[1.15rem] 2xl:max-w-[820px] 2xl:text-xl"
          />
        </div>
        <div className="mt-12 flex w-full flex-col items-center gap-5 sm:mt-14 sm:gap-6 lg:mt-16 2xl:mt-20 2xl:gap-8">
          <ResumeButton
            href="/Ilyas-Baratov-Resume.pdf"
            className="w-full max-w-[310px] sm:w-auto sm:max-w-none"
          />
          <ContactButton
            href="mailto:ilyas.baratoff@gmail.com"
            className="w-full max-w-[310px] sm:w-auto sm:max-w-none"
          />
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
      className="relative rounded-t-[28px] bg-white px-6 py-16 text-[#0C0C0C] sm:rounded-t-[40px] sm:px-8 sm:py-20 md:rounded-t-[48px] md:px-10 lg:py-24 xl:rounded-t-[54px] xl:py-28 2xl:rounded-t-[60px] 2xl:py-32"
    >
      <FadeIn>
        <h2 className="mb-10 text-center text-[clamp(2.75rem,12vw,7rem)] font-black uppercase leading-none tracking-tight sm:mb-14 md:text-[clamp(4.5rem,9vw,7rem)] lg:mb-16 xl:mb-20 xl:text-[clamp(5rem,9vw,8rem)] 2xl:mb-28 2xl:text-[clamp(6rem,10vw,10rem)]">
          My Expertise
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-4xl border-t border-[rgba(12,12,12,0.15)] xl:max-w-5xl">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="grid grid-cols-1 gap-3 border-b border-[rgba(12,12,12,0.15)] py-7 sm:grid-cols-[auto_1fr] sm:gap-8 sm:py-8 lg:gap-12 lg:py-10 2xl:gap-16 2xl:py-12"
          >
            <p className="text-[3.5rem] font-black leading-none sm:text-[4.5rem] lg:text-[clamp(4rem,7vw,6.75rem)] xl:text-[clamp(4.5rem,8vw,7.5rem)] 2xl:text-[clamp(5rem,9vw,8.75rem)]">
              {service.number}
            </p>
            <div className="flex flex-col justify-center gap-2.5 sm:gap-4 2xl:gap-5">
              <h3 className="text-[1.15rem] font-medium uppercase leading-tight sm:text-xl lg:text-[clamp(1.1rem,1.8vw,1.7rem)] 2xl:text-[clamp(1.25rem,2vw,2.1rem)]">
                {service.name}
              </h3>
              <p className="max-w-2xl text-[0.95rem] font-light leading-[1.65] opacity-65 sm:text-base lg:text-[clamp(0.9rem,1.2vw,1.05rem)] 2xl:text-[clamp(1rem,1.4vw,1.25rem)]">
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
      className="relative z-10 -mt-7 isolate rounded-t-[28px] bg-[#0C0C0C] sm:-mt-10 sm:rounded-t-[40px] md:-mt-12 md:rounded-t-[48px] xl:-mt-14 xl:rounded-t-[54px] 2xl:rounded-t-[60px]"
    >
      <div className="pointer-events-none sticky top-0 z-0 h-screen h-[100svh] overflow-hidden rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[48px] xl:rounded-t-[54px] 2xl:rounded-t-[60px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/turkmen.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/[0.42]" />
      </div>

      <div className="relative z-10 -mt-[100vh] -mt-[100svh] px-3 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 md:pb-32 md:pt-24 lg:px-10 xl:pb-40 xl:pt-28 2xl:pb-48 2xl:pt-32">
        <FadeIn y={40}>
          <h2 className="hero-heading mb-10 text-center text-[clamp(2.75rem,12vw,7rem)] font-black uppercase leading-none tracking-tight sm:mb-14 md:text-[clamp(4.5rem,9vw,7rem)] lg:mb-16 xl:mb-20 xl:text-[clamp(5rem,9vw,8rem)] 2xl:mb-28 2xl:text-[clamp(6rem,10vw,10rem)]">
            Project
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-[1120px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
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
