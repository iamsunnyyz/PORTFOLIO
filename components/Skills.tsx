'use client';

import React from 'react';

type SkillBadge = {
  label: string;
  tone: string;
};

type SkillsRowProps = {
  eyebrow: string;
  title: string;
  summary: string;
  badges: SkillBadge[];
  accent: string;
  glow: string;
  visual: React.ReactNode;
  reverse?: boolean;
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

const FrontendVisual = () => (
  <svg
    viewBox="0 0 520 320"
    preserveAspectRatio="xMidYMid meet"
    className="h-auto w-full"
    role="img"
    aria-label="Frontend interface illustration"
  >
    <defs>
      <linearGradient id="frontend-panel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="frontend-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
      <linearGradient id="frontend-soft" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
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

    <rect x="82" y="92" width="110" height="10" rx="5" fill="#1e293b" />
    <rect x="82" y="92" width="56" height="10" rx="5" fill="url(#frontend-soft)">
      <animate attributeName="width" values="56;98;56" dur="3.2s" repeatCount="indefinite" />
    </rect>
    <rect x="250" y="72" width="116" height="8" rx="4" fill="#1e293b" />
    <rect x="382" y="72" width="54" height="8" rx="4" fill="#0f766e" />

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
    <rect x="250" y="164" width="124" height="9" rx="4.5" fill="#334155" />
    <rect x="388" y="164" width="44" height="9" rx="4.5" fill="#1e293b" />
    <rect x="250" y="198" width="56" height="10" rx="5" fill="#14b8a6" />
    <rect x="250" y="216" width="64" height="8" rx="4" fill="#334155" />
    <rect x="372" y="198" width="56" height="10" rx="5" fill="#38bdf8" />
    <rect x="372" y="216" width="52" height="8" rx="4" fill="#334155" />

    <circle cx="418" cy="138" r="16" fill="url(#frontend-accent)">
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="2.2s" repeatCount="indefinite" />
    </circle>
    <path d="M412 138h12M418 132v12" stroke="#082f49" strokeWidth="4" strokeLinecap="round" />

    <rect x="74" y="256" width="170" height="8" rx="4" fill="#0f1b2d" />
    <rect x="74" y="256" width="64" height="8" rx="4" fill="url(#frontend-soft)">
      <animate attributeName="x" values="74;166;74" dur="4.2s" repeatCount="indefinite" />
    </rect>
    <rect x="260" y="256" width="166" height="8" rx="4" fill="#0f1b2d" />
    <rect x="260" y="256" width="58" height="8" rx="4" fill="#22d3ee">
      <animate attributeName="x" values="260;360;260" dur="4.2s" repeatCount="indefinite" />
    </rect>

    <circle cx="222" cy="84" r="3" fill="#60a5fa">
      <animate attributeName="opacity" values="0.25;1;0.25" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="234" cy="84" r="3" fill="#22d3ee">
      <animate attributeName="opacity" values="1;0.25;1" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const BackendVisual = () => (
  <svg
    viewBox="0 0 520 320"
    preserveAspectRatio="xMidYMid meet"
    className="h-auto w-full"
    role="img"
    aria-label="Backend architecture illustration"
  >
    <defs>
      <linearGradient id="backend-panel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0b1220" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="backend-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
      <linearGradient id="backend-soft" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <rect width="520" height="320" rx="28" fill="#020617" />
    <rect x="28" y="28" width="464" height="264" rx="24" fill="url(#backend-panel)" stroke="#1e293b" />

    <rect x="64" y="48" width="128" height="10" rx="5" fill="#1e293b" />
    <rect x="64" y="48" width="52" height="10" rx="5" fill="url(#backend-soft)">
      <animate attributeName="width" values="52;92;52" dur="3.2s" repeatCount="indefinite" />
    </rect>
    <rect x="346" y="48" width="90" height="10" rx="5" fill="#0f1f1b" />
    <rect x="346" y="48" width="38" height="10" rx="5" fill="#10b981">
      <animate attributeName="x" values="346;392;346" dur="3.1s" repeatCount="indefinite" />
    </rect>

    <rect x="64" y="74" width="122" height="68" rx="18" fill="#111827" stroke="#243041" />
    <rect x="199" y="126" width="122" height="68" rx="18" fill="#111827" stroke="#243041" />
    <rect x="334" y="74" width="122" height="68" rx="18" fill="#111827" stroke="#243041" />
    <rect x="199" y="214" width="122" height="42" rx="16" fill="#0f172a" stroke="#243041" />

    <rect x="85" y="95" width="80" height="10" rx="5" fill="#22c55e" />
    <rect x="85" y="115" width="58" height="8" rx="4" fill="#334155" />
    <rect x="220" y="102" width="80" height="8" rx="4" fill="#1e293b" />
    <rect x="220" y="102" width="48" height="8" rx="4" fill="#2dd4bf">
      <animate attributeName="x" values="220;250;220" dur="2.4s" repeatCount="indefinite" />
    </rect>
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
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="2.4s" repeatCount="indefinite" />
    </circle>
    <circle cx="124" cy="108" r="8" fill="#86efac">
      <animate attributeName="opacity" values="1;0.45;1" dur="1.9s" repeatCount="indefinite" />
    </circle>
    <circle cx="394" cy="108" r="8" fill="#6ee7b7">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />
    </circle>

    <rect x="112" y="270" width="296" height="8" rx="4" fill="#0f1f1b" />
    <rect x="112" y="270" width="74" height="8" rx="4" fill="url(#backend-soft)">
      <animate attributeName="x" values="112;328;112" dur="4.4s" repeatCount="indefinite" />
    </rect>
  </svg>
);

const SkillsRow: React.FC<SkillsRowProps> = ({
  eyebrow,
  title,
  summary,
  badges,
  accent,
  glow,
  visual,
  reverse = false,
}) => {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.45)] md:p-8">
      <div className={`absolute h-40 w-40 rounded-full blur-3xl opacity-20 ${glow} ${reverse ? '-left-10 top-12' : '-right-10 top-0'}`} />
      <div className={`relative z-10 grid items-center gap-10 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
        <div className="aspect-[13/8] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-3">
          {visual}
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className={`text-xs font-semibold uppercase tracking-[0.35em] ${accent}`}>{eyebrow}</p>
            <h3 className="text-3xl font-semibold text-white md:text-[2rem]">{title}</h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{summary}</p>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge.label} className={`rounded-full border px-4 py-2 text-sm font-medium ${badge.tone}`}>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
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

        <div className="space-y-8">
          <SkillsRow
            eyebrow="Frontend Development"
            title="Interfaces that feel sharp, fast, and usable."
            summary="I build modern frontend experiences with attention to layout, responsiveness, interaction quality, and maintainable component structure. The goal is not just to make screens look good, but to make them feel stable and intuitive in real usage."
            badges={frontendBadges}
            accent="text-cyan-300"
            glow="bg-cyan-400"
            visual={<FrontendVisual />}
          />

          <SkillsRow
            eyebrow="Backend Development"
            title="Systems that stay reliable behind the UI."
            summary="On the backend, I focus on API design, business logic, and data flow that can support real applications cleanly. I aim for services that are easy to reason about, straightforward to extend, and dependable in production."
            badges={backendBadges}
            accent="text-emerald-300"
            glow="bg-emerald-400"
            visual={<BackendVisual />}
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
