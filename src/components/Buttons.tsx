import { ExternalLink, Mail } from "lucide-react";

interface LinkButtonProps {
  href?: string;
  className?: string;
}

const contactClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base enabled:hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-80";

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

const projectClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 sm:px-10 sm:py-3.5 sm:text-base enabled:hover:bg-[#D7E2EA]/10 disabled:cursor-not-allowed disabled:opacity-60";

export function LiveProjectButton({ href, className = "" }: LinkButtonProps) {
  const content = (
    <>
      <span>Live Project</span>
      <ExternalLink aria-hidden="true" size={18} strokeWidth={1.8} />
    </>
  );

  if (href) {
    return (
      <a
        className={`${projectClasses} ${className}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${projectClasses} ${className}`}
      type="button"
      disabled
      aria-label="Live project link coming soon"
      title="Live project link coming soon"
    >
      {content}
    </button>
  );
}
