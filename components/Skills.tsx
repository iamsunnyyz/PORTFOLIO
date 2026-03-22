'use client';

import React from 'react';

type SkillBadge = {
  label: string;
  tone: string;
};

type Capability = {
  title: string;
  description: string;
};

type SkillsColumnProps = {
  eyebrow: string;
  title: string;
  summary: string;
  badges: SkillBadge[];
  capabilities: Capability[];
  accent: string;
  glow: string;
  visual: React.ReactNode;
};

const frontendBadges: SkillBadge[] = [
  { label: 'HTML5', tone: 'bg-orange-500/15 text-orange-200 border-orange-400/20' },
  { label: 'CSS3', tone: 'bg-sky-500/15 text-sky-200 border-sky-400/20' },
  { label: 'JavaScript', tone: 'bg-amber-500/15 text-amber-200 border-amber-400/20' },
  { label: 'React', tone: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/20' },
  { label: 'Next.js', tone: 'bg-slate-100/10 text-slate-100 border-white/15' },
  { label: 'TypeScript', tone: 'bg-blue-500/15 text-blue-200 border-blue-400/20' },
  { label: 'Tailwind', tone: 'bg-teal-500/15 text-teal-200 border-teal-400/20' },
];

const backendBadges: SkillBadge[] = [
  { label: 'Java', tone: 'bg-red-500/15 text-red-200 border-red-400/20' },
  { label: 'Spring Boot', tone: 'bg-lime-500/15 text-lime-200 border-lime-400/20' },
  { label: 'Node.js', tone: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/20' },
  { label: 'MongoDB', tone: 'bg-green-500/15 text-green-200 border-green-400/20' },
  { label: 'MySQL', tone: 'bg-blue-500/15 text-blue-200 border-blue-400/20' },
  { label: 'PostgreSQL', tone: 'bg-indigo-500/15 text-indigo-200 border-indigo-400/20' },
  { label: 'AWS', tone: 'bg-amber-500/15 text-amber-200 border-amber-400/20' },
];

const frontendCapabilities: Capability[] = [
  {
    title: 'Interface Design',
    description: 'Responsive layouts, clean hierarchy, and polished UI behavior across desktop and mobile.',
  },
  {
    title: 'Component Architecture',
    description: 'Reusable component systems that keep larger pages maintainable as features grow.',
  },
  {
    title: 'User Experience',
    description: 'Fast navigation, accessible interactions, and deliberate visual feedback for real users.',
  },
];

const backendCapabilities: Capability[] = [
  {
    title: 'API Development',
    description: 'Reliable endpoints, service logic, and request flows designed for scale and clarity.',
  },
  {
    title: 'Data Systems',
    description: 'Structured data modeling, efficient queries, and practical database integration patterns.',
  },
  {
    title: 'Deployment Readiness',
    description: 'Backend foundations that support security, monitoring, and stable production delivery.',
  },
];

const FrontendVisual = () => (
  <svg viewBox="0 0 520 320" className="h-full w-full" role="img" aria-label="Frontend interface illustration">
    <defs>
      <linearGradient id="frontend-panel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="frontend-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
    <rect width="520" height="320" rx="28" fill="#020617" />
    <rect x="28" y="28" width="464" height="264" rx="24" fill="url(#frontend-panel)" stroke="#1e293b" />
    <rect x="52" y="54" width="416" height="28" rx="14" fill="#0f172a" stroke="#334155" />
    <circle cx="76" cy="68" r="4.5" fill="#fb7185" />
    <circle cx="94" cy="68" r="4.5" fill="#f59e0b" />
    <circle cx="112" cy="68" r="4.5" fill="#34d399" />
    <rect x="64" y="106" width="146" height="138" rx="20" fill="#0b1220" stroke="#1e293b" />
    <rect x="230" y="106" width="226" height="62" rx="18" fill="#0b1220" stroke="#1e293b" />
    <rect x="230" y="182" width="104" height="62" rx="18" fill="#0b1220" stroke="#1e293b" />
    <rect x="352" y="182" width="104" height="62" rx="18" fill="#0b1220" stroke="#1e293b" />
    <rect x="82" y="126" width="78" height="12" rx="6" fill="#164e63">
      <animate attributeName="width" values="78;98;78" dur="3.8s" repeatCount="indefinite" />
    </rect>
    <rect x="82" y="148" width="104" height="9" rx="4.5" fill="#334155" />
    <rect x="82" y="166" width="90" height="9" rx="4.5" fill="#334155" />
    <rect x="82" y="184" width="112" height="9" rx="4.5" fill="#334155" />
    <rect x="82" y="210" width="72" height="18" rx="9" fill="url(#frontend-accent)" opacity="0.95">
      <animate attributeName="opacity" values="0.95;0.65;0.95" dur="2.4s" repeatCount="indefinite" />
    </rect>
    <rect x="250" y="126" width="86" height="12" rx="6" fill="#1d4ed8" opacity="0.9" />
    <rect x="250" y="148" width="152" height="9" rx="4.5" fill="#334155" />
    <rect x="250" y="198" width="56" height="10" rx="5" fill="#14b8a6" />
    <rect x="250" y="216" width="64" height="8" rx="4" fill="#334155" />
    <rect x="372" y="198" width="56" height="10" rx="5" fill="#38bdf8" />
    <rect x="372" y="216" width="52" height="8" rx="4" fill="#334155" />
    <circle cx="418" cy="138" r="16" fill="url(#frontend-accent)">
      <animate attributeName="r" values="16;19;16" dur="2.2s" repeatCount="indefinite" />
    </circle>
    <path d="M412 138h12M418 132v12" stroke="#082f49" strokeWidth="4" strokeLinecap="round" />
    <path d="M120 264C190 238 251 246 322 264" fill="none" stroke="#155e75" strokeWidth="3" strokeLinecap="round" opacity="0.9">
      <animate attributeName="d" values="M120 264C190 238 251 246 322 264;M120 264C182 248 257 232 322 264;M120 264C190 238 251 246 322 264" dur="4.6s" repeatCount="indefinite" />
    </path>
  </svg>
);

const BackendVisual = () => (
  <svg viewBox="0 0 520 320" className="h-full w-full" role="img" aria-label="Backend architecture illustration">
    <defs>
      <linearGradient id="backend-panel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0b1220" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="backend-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
    <rect width="520" height="320" rx="28" fill="#020617" />
    <rect x="28" y="28" width="464" height="264" rx="24" fill="url(#backend-panel)" stroke="#1e293b" />
    <rect x="64" y="74" width="122" height="68" rx="18" fill="#111827" stroke="#243041" />
    <rect x="199" y="126" width="122" height="68" rx="18" fill="#111827" stroke="#243041" />
    <rect x="334" y="74" width="122" height="68" rx="18" fill="#111827" stroke="#243041" />
    <rect x="199" y="214" width="122" height="42" rx="16" fill="#0f172a" stroke="#243041" />
    <rect x="85" y="95" width="80" height="10" rx="5" fill="#22c55e" />
    <rect x="85" y="115" width="58" height="8" rx="4" fill="#334155" />
    <rect x="220" y="148" width="78" height="10" rx="5" fill="#14b8a6" />
    <rect x="220" y="168" width="66" height="8" rx="4" fill="#334155" />
    <rect x="355" y="95" width="82" height="10" rx="5" fill="#10b981" />
    <rect x="355" y="115" width="56" height="8" rx="4" fill="#334155" />
    <ellipse cx="260" cy="235" rx="40" ry="10" fill="#14b8a6" opacity="0.35" />
    <ellipse cx="260" cy="223" rx="40" ry="10" fill="#14b8a6" opacity="0.5" />
    <ellipse cx="260" cy="211" rx="40" ry="10" fill="url(#backend-accent)" opacity="0.9" />
    <path d="M186 108h37c22 0 20 52 38 52h38" fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8">
      <animate attributeName="stroke-dashoffset" values="0;-24" dur="1.8s" repeatCount="indefinite" />
    </path>
    <path d="M321 160h28c22 0 16-52 34-52h-49" fill="none" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8">
      <animate attributeName="stroke-dashoffset" values="0;-24" dur="1.8s" repeatCount="indefinite" />
    </path>
    <path d="M260 194v17" fill="none" stroke="#5eead4" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6">
      <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.4s" repeatCount="indefinite" />
    </path>
    <circle cx="260" cy="160" r="10" fill="#99f6e4">
      <animate attributeName="cy" values="160;154;160" dur="2.4s" repeatCount="indefinite" />
    </circle>
    <circle cx="124" cy="108" r="8" fill="#86efac">
      <animate attributeName="opacity" values="1;0.45;1" dur="1.9s" repeatCount="indefinite" />
    </circle>
    <circle cx="394" cy="108" r="8" fill="#6ee7b7">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const SkillsColumn: React.FC<SkillsColumnProps> = ({
  eyebrow,
  title,
  summary,
  badges,
  capabilities,
  accent,
  glow,
  visual,
}) => {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.45)] md:p-8">
      <div className={`absolute -right-10 top-0 h-40 w-40 rounded-full blur-3xl opacity-20 ${glow}`} />
      <div className="relative z-10 space-y-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-3">
          {visual}
        </div>

        <div className="space-y-4">
          <p className={`text-xs font-semibold uppercase tracking-[0.35em] ${accent}`}>{eyebrow}</p>
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-white md:text-[2rem]">{title}</h3>
            <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">{summary}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${badge.tone}`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        <div className="grid gap-4">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h4 className="mb-2 text-lg font-semibold text-white">{capability.title}</h4>
              <p className="text-sm leading-6 text-slate-300">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-4 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
            Core Expertise
          </p>
          <h2 className="mb-5 text-4xl font-bold text-[var(--text-color)] md:text-5xl">What I Build</h2>
          <p className="text-base leading-7 text-slate-300 md:text-lg">
            I work across both product-facing interfaces and the backend systems that support them.
            The focus is consistent: clear architecture, strong user experience, and production-ready execution.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <SkillsColumn
            eyebrow="Frontend Development"
            title="Interfaces that feel sharp, fast, and usable."
            summary="I build modern frontend experiences with attention to layout, responsiveness, interaction quality, and maintainable component structure. The goal is not just to make screens look good, but to make them feel stable and intuitive in real usage."
            badges={frontendBadges}
            capabilities={frontendCapabilities}
            accent="text-cyan-300"
            glow="bg-cyan-400"
            visual={<FrontendVisual />}
          />

          <SkillsColumn
            eyebrow="Backend Development"
            title="Systems that stay reliable behind the UI."
            summary="On the backend, I focus on API design, business logic, and data flow that can support real applications cleanly. I aim for services that are easy to reason about, straightforward to extend, and dependable in production."
            badges={backendBadges}
            capabilities={backendCapabilities}
            accent="text-emerald-300"
            glow="bg-emerald-400"
            visual={<BackendVisual />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
