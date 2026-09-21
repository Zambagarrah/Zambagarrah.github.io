type IconProps = { size?: number; color?: string }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export function LinkedInIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M6.5 8.5v10M6.5 5.5v.01M11 18.5v-6c0-1.4 1-2.5 2.5-2.5S16 11.1 16 12.5v6M11 11v7.5" />
    </svg>
  )
}

export function GithubIcon({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  )
}

export function MailIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function DiscordIcon({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M20.3 5.4a17.6 17.6 0 0 0-4.4-1.4l-.25.45a13.2 13.2 0 0 1 3.5 1.35 15.7 15.7 0 0 0-14.3 0 13 13 0 0 1 3.55-1.35L8.2 4A17.5 17.5 0 0 0 3.8 5.4C1.6 8.7 1 11.9 1.25 15.05a17.7 17.7 0 0 0 5.4 2.75c.44-.6.83-1.24 1.16-1.92-.64-.24-1.24-.54-1.8-.9.15-.11.3-.23.44-.35a12.6 12.6 0 0 0 10.1 0c.15.12.29.24.44.35-.56.36-1.16.66-1.8.9.33.68.72 1.32 1.16 1.92a17.6 17.6 0 0 0 5.4-2.75c.3-3.65-.6-6.82-2.75-9.65ZM8.7 13.1c-.8 0-1.46-.75-1.46-1.67s.64-1.68 1.46-1.68 1.48.75 1.46 1.68c0 .92-.64 1.67-1.46 1.67Zm6.6 0c-.8 0-1.46-.75-1.46-1.67s.64-1.68 1.46-1.68 1.48.75 1.46 1.68c0 .92-.64 1.67-1.46 1.67Z" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5 0 1.86.49 3.6 1.34 5.11L1.5 22.5l5.55-1.31A10.45 10.45 0 0 0 12 22.5c5.8 0 10.5-4.7 10.5-10.5S17.8 1.5 12 1.5Zm0 19.05c-1.7 0-3.29-.47-4.64-1.29l-.33-.2-3.29.78.78-3.2-.22-.33A8.6 8.6 0 0 1 3.4 12c0-4.75 3.85-8.6 8.6-8.6s8.6 3.85 8.6 8.6-3.85 8.55-8.6 8.55Zm4.72-6.4c-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.66.84-.81 1.01-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44h-.5c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.65c.13.17 1.81 2.77 4.39 3.88.61.26 1.09.42 1.46.54.61.19 1.17.17 1.61.1.49-.07 1.53-.62 1.75-1.23.22-.6.22-1.11.15-1.22-.07-.11-.24-.17-.5-.3Z" />
    </svg>
  )
}

export function XIcon({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M13.9 10.9 21.1 2.5h-1.7l-6.25 7.27L8.2 2.5H2.4l7.55 11 -7.55 8.78h1.7l6.6-7.67 5.27 7.67h5.8l-7.83-11.38Zm-2.34 2.72-.77-1.1L4.7 3.8h2.62l4.9 7.02.77 1.1 6.37 9.12h-2.62l-5.2-7.42Z" />
    </svg>
  )
}

export function RedditIcon({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M22 12.05c0-1.15-.94-2.07-2.08-2.07-.55 0-1.05.22-1.42.57a10.6 10.6 0 0 0-5.1-1.62l1-4.26 3 .7a1.5 1.5 0 1 0 .16-.75l-3.36-.78a.4.4 0 0 0-.47.3l-1.1 4.75a10.6 10.6 0 0 0-5.2 1.63 2.06 2.06 0 0 0-3.4 1.57c0 .78.42 1.44 1.03 1.82a3.3 3.3 0 0 0-.05.58c0 2.66 3.24 4.82 7.24 4.82s7.24-2.16 7.24-4.82c0-.19-.02-.38-.05-.57.64-.37 1.06-1.05 1.06-1.86Zm-13.5 1.25c0-.7.56-1.26 1.25-1.26s1.25.56 1.25 1.26-.56 1.26-1.25 1.26-1.25-.56-1.25-1.26Zm7.32 3.17c-.8.8-2.3.86-2.82.86-.53 0-2.03-.07-2.82-.86a.35.35 0 0 1 .5-.5c.5.5 1.6.62 2.32.62.72 0 1.83-.12 2.32-.62a.35.35 0 1 1 .5.5Zm-.2-1.91c-.7 0-1.25-.56-1.25-1.26s.56-1.26 1.25-1.26 1.25.56 1.25 1.26-.55 1.26-1.25 1.26Z" />
    </svg>
  )
}

export function HomeIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5h12V10" />
    </svg>
  )
}

export function ExperienceIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <rect x="3.5" y="7.5" width="17" height="11.5" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
    </svg>
  )
}

export function ProjectsIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2h9A1.5 1.5 0 0 1 21.5 9v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17Z" />
    </svg>
  )
}

export function ResearchIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.5-4.5" />
    </svg>
  )
}

export function SkillsIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M5 19V10M12 19V5M19 19v-7" />
    </svg>
  )
}

export function ContactIcon({ size = 18, color }: IconProps) {
  return <MailIcon size={size} color={color} />
}

export function ArrowUpIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  )
}

export function ChevronDownIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function CloseIcon({ size = 18, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
