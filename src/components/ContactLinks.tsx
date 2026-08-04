import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

interface ContactLink {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    label: "Ilyas Baratov on GitHub",
    href: "https://github.com/IlyasBaratov",
    icon: Github,
    external: true,
  },
  {
    label: "Ilyas Baratov on LinkedIn",
    href: "https://www.linkedin.com/in/ilyas-baratov",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email Ilyas Baratov",
    href: "mailto:ilyas.baratoff@gmail.com",
    icon: Mail,
  },
];

export function ContactLinks() {
  return (
    <div
      id="contact"
      className="flex scroll-mt-8 flex-col items-center gap-5 text-[#D7E2EA]"
    >
      <p className="text-sm font-medium uppercase tracking-[0.24em] sm:text-base">
        Ilyas Baratov
      </p>
      <div className="flex items-center justify-center gap-4 sm:gap-5">
        {contactLinks.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="group inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#D7E2EA] text-[#0C0C0C] shadow-[0_8px_24px_rgba(215,226,234,0.12)] transition duration-200 hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA] sm:h-16 sm:w-16"
          >
            <Icon
              aria-hidden="true"
              className="h-7 w-7 transition-transform duration-200 group-hover:scale-110 sm:h-8 sm:w-8"
              strokeWidth={2.25}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
