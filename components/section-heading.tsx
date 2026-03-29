import { Reveal } from "./reveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
  dark?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal variant="fade-up" className={className}>
      <div className={align === "center" ? "text-center" : "text-left"}>
        {eyebrow && (
          <p className={`eyebrow mb-3 ${dark ? "text-brand-teal-light" : ""}`}>
            {eyebrow}
          </p>
        )}
        <h2
          className={`text-heading ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-lg leading-relaxed max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            } ${dark ? "text-white/70" : "text-muted-foreground"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  )
}
