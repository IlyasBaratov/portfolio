import { Download, ExternalLink, Github, Mail } from "lucide-react";

interface LinkButtonProps {
  href?: string;
  className?: string;
}

const contactClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white transition-transform duration-200 sm:px-10 sm:py-3.5 sm:text-sm sm:tracking-widest md:px-12 md:py-4 md:text-base enabled:hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-80";

export function ContactButton({ href, className = "" }: LinkButtonProps) {
  const style = {
    background:
      "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
    boxShadow:
      "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
    outline: "2px solid #FFFFFF",
    outlineOffset: "-3px",
  };

  const content = (
    <>
      <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
      <span>Contact Me</span>
    </>
  );

  if (href) {
    return (
      <a className={`${contactClasses} ${className}`} href={href} style={style}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${contactClasses} ${className}`}
      type="button"
      style={style}
      disabled
      aria-label="Contact link coming soon"
      title="Contact link coming soon"
    >
      {content}
    </button>
  );
}

interface ResumeButtonProps {
  href: string;
  className?: string;
}

export function ResumeButton({ href, className = "" }: ResumeButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[#0C0C0C] transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm sm:tracking-widest md:px-12 md:py-4 md:text-base ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Download aria-hidden="true" size={18} strokeWidth={2} />
      <span>Download My Resume</span>
    </a>
  );
}

const projectClasses =
  "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-[#D7E2EA]/75 px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:min-h-0 sm:gap-2 sm:border-2 sm:px-6 sm:py-3 sm:text-sm sm:tracking-widest md:px-8";

interface ProjectLinkButtonProps {
  href: string;
  kind: "live" | "github";
  className?: string;
}

export function ProjectLinkButton({
  href,
  kind,
  className = "",
}: ProjectLinkButtonProps) {
  const isGithub = kind === "github";
  const Icon = isGithub ? Github : ExternalLink;
  const label = isGithub ? "GitHub" : "Live Site";

  return (
    <a
      className={`${projectClasses} ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (opens in a new tab)`}
    >
      <span>{label}</span>
      <Icon aria-hidden="true" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} />
    </a>
  );
}
