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
