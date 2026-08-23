import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLightbulb,
  FaProjectDiagram,
  FaLayerGroup,
  FaCode,
  FaVial,
  FaRocket,
  FaChartLine,
} from 'react-icons/fa';
import CardStack from '../ui/CardStack';

const steps = [
  {
    id: 0,
    num: '01',
    icon: FaLightbulb,
    emoji: '💡',
    title: 'Thinking the Idea',
    tagline: 'Define the problem',
    color: '#fbbf24',
    bg: 'from-amber-500/20 to-orange-500/0',
    desc:
      'Every project starts with a problem worth solving. I ask who it helps, why it matters, and what success looks like — before writing a single line of code.',
    deliverable: 'Problem statement & goals',
    illustration: 'think',
  },
  {
    id: 1,
    num: '02',
    icon: FaProjectDiagram,
    emoji: '📋',
    title: 'Plan & Flow Chart',
    tagline: 'Map the journey',
    color: '#f472b6',
    bg: 'from-pink-500/20 to-rose-500/0',
    desc:
      'I sketch the user flow, list features by priority, and break the build into milestones — so every step has a clear input and output.',
    deliverable: 'Wireframes & feature roadmap',
    illustration: 'plan',
  },
  {
    id: 2,
    num: '03',
    icon: FaLayerGroup,
    emoji: '🏗️',
    title: 'Architecture',
    tagline: 'Design the system',
    color: '#a78bfa',
    bg: 'from-violet-500/20 to-fuchsia-500/0',
    desc:
      'Pick the right stack, design the data model, and decide on folder structure. A solid architecture means the codebase can grow without breaking.',
    deliverable: 'Tech stack & schema design',
    illustration: 'arch',
  },
  {
    id: 3,
    num: '04',
    icon: FaCode,
    emoji: '⌨️',
    title: 'Writing Code',
    tagline: 'Build with intent',
    color: '#22d3ee',
    bg: 'from-cyan-500/20 to-sky-500/0',
    desc:
      'Modular, readable components. Meaningful names. Small commits with clear messages. Code is read more than it is written — so I optimize for clarity.',
    deliverable: 'Modular, version-controlled code',
    illustration: 'build',
  },
  {
    id: 4,
    num: '05',
    icon: FaVial,
    emoji: '🧪',
    title: 'Testing',
    tagline: 'Break it before users do',
    color: '#34d399',
    bg: 'from-emerald-500/20 to-teal-500/0',
    desc:
      'Edge cases, broken states, slow networks. I test what happens when things go wrong — because real users always find a way to break your assumptions.',
    deliverable: 'Test coverage & edge cases',
    illustration: 'test',
  },
  {
    id: 5,
    num: '06',
    icon: FaRocket,
    emoji: '🚀',
    title: 'Deployment',
    tagline: 'Ship to production',
    color: '#60a5fa',
    bg: 'from-blue-500/20 to-indigo-500/0',
    desc:
      'CI-friendly builds, environment variables locked down, and a clean deploy pipeline. Shipping a project is not the end — it is the start of real feedback.',
    deliverable: 'Live URL & monitoring',
    illustration: 'deploy',
  },
  {
    id: 6,
    num: '07',
    icon: FaChartLine,
    emoji: '📈',
    title: 'Iterate & Improve',
    tagline: 'Ship the next version',
    color: '#c084fc',
    bg: 'from-purple-500/20 to-pink-500/0',
    desc:
      'Measure what users actually do, fix what hurts, and ship what helps. Every v2 is informed by what v1 taught me.',
    deliverable: 'Analytics & feedback loop',
    illustration: 'iterate',
  },
];

// Card content renderer
const ProcessCard = ({ step }) => {
  const Icon = step.icon;
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-ink-900/90 to-ink-950/90 backdrop-blur-sm shadow-2xl">
      {/* Gradient corner glow */}
      <div
        className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl opacity-60"
        style={{ background: `radial-gradient(circle, ${step.color}, transparent)` }}
      ></div>

      {/* Colored border ring */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 2px ${step.color}40, 0 0 60px -10px ${step.color}80`,
        }}
      ></div>

      <div className="relative h-full p-7 md:p-8 flex flex-col">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl grid place-items-center ring-2 ring-ink-950"
              style={{
                background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                boxShadow: `0 0 20px -5px ${step.color}`,
              }}
            >
              <Icon className="text-ink-950 text-lg" />
            </div>
            <div>
              <p
                className="font-mono text-[10px] tracking-widest uppercase font-bold"
                style={{ color: step.color }}
              >
                Step {step.num}
              </p>
              <p className="text-[10px] font-mono tracking-widest uppercase text-slate-500 mt-0.5">
                {step.tagline}
              </p>
            </div>
          </div>
          <span className="text-3xl">{step.emoji}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-5 flex-1">
          {step.desc}
        </p>

        {/* Deliverable */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/5">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: step.color }}
          ></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            Output:
          </span>
          <span className="text-sm text-slate-200 font-medium">
            {step.deliverable}
          </span>
        </div>
      </div>
    </div>
  );
};

// Big illustration per step (right pane)
const BigIllustration = ({ step }) => {
  if (step.illustration === 'think') {
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <circle cx="200" cy="200" r="160" fill={step.color} opacity="0.15" />
        <circle cx="200" cy="200" r="120" fill="none" stroke={step.color} strokeWidth="2" className="anim-think-ring" />
        <circle cx="200" cy="200" r="80" fill="none" stroke={step.color} strokeWidth="2" opacity="0.6" className="anim-think-ring" style={{ animationDelay: '0.8s' }} />
        <circle cx="200" cy="200" r="40" fill={step.color} opacity="0.3" />
        <text x="200" y="225" textAnchor="middle" fontSize="60" fill={step.color} fontWeight="bold">?</text>
        <text x="80" y="100" fontSize="32" fill={step.color} opacity="0.6" className="anim-float-1">?</text>
        <text x="310" y="120" fontSize="24" fill={step.color} opacity="0.5" className="anim-float-2">?</text>
        <text x="60" y="280" fontSize="28" fill={step.color} opacity="0.5" className="anim-float-3">?</text>
        <text x="320" y="290" fontSize="20" fill={step.color} opacity="0.6" className="anim-float-1">?</text>
      </svg>
    );
  }

  if (step.illustration === 'plan') {
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <rect x="40" y="80" width="80" height="40" rx="6" fill="none" stroke={step.color} strokeWidth="2" className="anim-plan-node" />
        <rect x="160" y="180" width="80" height="40" rx="6" fill="none" stroke={step.color} strokeWidth="2" className="anim-plan-node" style={{ animationDelay: '0.4s' }} />
        <rect x="280" y="80" width="80" height="40" rx="6" fill="none" stroke={step.color} strokeWidth="2" className="anim-plan-node" style={{ animationDelay: '0.8s' }} />
        <rect x="160" y="280" width="80" height="40" rx="6" fill="none" stroke={step.color} strokeWidth="2" className="anim-plan-node" style={{ animationDelay: '1.2s' }} />
        <path
          className="anim-plan-path"
          d="M120 100 L160 200 M240 200 L280 100 M200 220 L200 280"
          fill="none"
          stroke={step.color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text x="60" y="105" fontSize="12" fill={step.color} fontFamily="monospace" opacity="0.7">idea</text>
        <text x="180" y="205" fontSize="12" fill={step.color} fontFamily="monospace" opacity="0.7">plan</text>
        <text x="295" y="105" fontSize="12" fill={step.color} fontFamily="monospace" opacity="0.7">build</text>
        <text x="185" y="305" fontSize="12" fill={step.color} fontFamily="monospace" opacity="0.7">ship</text>
      </svg>
    );
  }

  if (step.illustration === 'arch') {
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <rect className="anim-arch-1" x="40" y="60" width="100" height="40" rx="4" fill={step.color} opacity="0.6" />
        <rect className="anim-arch-2" x="160" y="100" width="120" height="40" rx="4" fill={step.color} opacity="0.8" />
        <rect className="anim-arch-3" x="60" y="160" width="90" height="40" rx="4" fill={step.color} opacity="0.7" />
        <rect className="anim-arch-1" x="180" y="200" width="140" height="40" rx="4" fill={step.color} opacity="0.6" />
        <rect className="anim-arch-2" x="80" y="260" width="120" height="40" rx="4" fill={step.color} opacity="0.8" />
        <rect className="anim-arch-3" x="220" y="300" width="100" height="40" rx="4" fill={step.color} opacity="0.7" />
        <line x1="140" y1="80" x2="160" y2="120" stroke={step.color} strokeWidth="1" opacity="0.4" />
        <line x1="150" y1="180" x2="180" y2="220" stroke={step.color} strokeWidth="1" opacity="0.4" />
        <line x1="200" y1="280" x2="220" y2="320" stroke={step.color} strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }

  if (step.illustration === 'build') {
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <rect x="40" y="60" width="320" height="280" rx="8" fill="rgba(0,0,0,0.4)" stroke={step.color} strokeWidth="1" opacity="0.6" />
        <rect x="40" y="60" width="320" height="30" rx="8" fill={step.color} opacity="0.2" />
        <circle cx="60" cy="75" r="4" fill="#ff5f57" />
        <circle cx="78" cy="75" r="4" fill="#febc2e" />
        <circle cx="96" cy="75" r="4" fill="#28c840" />
        <text x="60" y="125" fontSize="14" fill={step.color} fontFamily="monospace" opacity="0.8">{`const build = () => {`}</text>
        <text x="80" y="155" fontSize="14" fill={step.color} fontFamily="monospace" opacity="0.6">{`<Component />`}</text>
        <text x="80" y="180" fontSize="14" fill={step.color} fontFamily="monospace" opacity="0.6">{`return ship;`}</text>
        <text x="60" y="210" fontSize="14" fill={step.color} fontFamily="monospace" opacity="0.8">{`}`}</text>
        <rect x="60" y="240" width="200" height="2" rx="1" fill={step.color} opacity="0.4" className="anim-build-line" />
        <rect x="60" y="270" width="160" height="2" rx="1" fill={step.color} opacity="0.4" className="anim-build-line" style={{ animationDelay: '0.3s' }} />
        <rect x="60" y="300" width="220" height="2" rx="1" fill={step.color} opacity="0.4" className="anim-build-line" style={{ animationDelay: '0.6s' }} />
        <rect x="282" y="296" width="2" height="10" fill={step.color} className="anim-build-caret" />
      </svg>
    );
  }

  if (step.illustration === 'test') {
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <circle cx="200" cy="200" r="180" fill={step.color} opacity="0.08" />
        <circle cx="200" cy="200" r="160" fill="none" stroke={step.color} strokeWidth="1.5" className="anim-test-ring" />
        <circle cx="200" cy="200" r="120" fill="none" stroke={step.color} strokeWidth="1.5" className="anim-test-ring" style={{ animationDelay: '0.5s' }} />
        <circle cx="200" cy="200" r="80" fill="none" stroke={step.color} strokeWidth="1.5" className="anim-test-ring" style={{ animationDelay: '1s' }} />
        <rect x="170" y="140" width="60" height="140" rx="20" fill="none" stroke={step.color} strokeWidth="2" />
        <rect x="172" y="180" width="56" height="100" rx="14" fill={step.color} opacity="0.3" />
        <rect x="172" y="140" width="56" height="20" fill={step.color} opacity="0.5" className="anim-test-beam" />
        <circle className="anim-test-tick-1" cx="60" cy="60" r="6" fill={step.color} />
        <circle className="anim-test-tick-2" cx="340" cy="60" r="6" fill={step.color} />
        <circle className="anim-test-tick-3" cx="60" cy="340" r="6" fill={step.color} />
        <circle className="anim-test-tick-1" cx="340" cy="340" r="6" fill={step.color} />
        <text x="56" y="65" fontSize="12" fill="#05060a" fontWeight="bold" textAnchor="middle">✓</text>
        <text x="336" y="65" fontSize="12" fill="#05060a" fontWeight="bold" textAnchor="middle">✓</text>
        <text x="56" y="345" fontSize="12" fill="#05060a" fontWeight="bold" textAnchor="middle">✓</text>
        <text x="336" y="345" fontSize="12" fill="#05060a" fontWeight="bold" textAnchor="middle">✓</text>
      </svg>
    );
  }

  if (step.illustration === 'deploy') {
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <path d="M200 380 Q190 320, 200 260 Q210 200, 200 140" fill="none" stroke={step.color} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <g className="anim-deploy-rocket" style={{ transformOrigin: '200px 120px' }}>
          <path d="M180 80 L220 80 L220 140 L210 160 L190 160 L180 140 Z" fill={step.color} />
          <circle cx="200" cy="110" r="8" fill="#05060a" />
          <path d="M180 140 L160 170 L180 155 Z" fill={step.color} opacity="0.8" />
          <path d="M220 140 L240 170 L220 155 Z" fill={step.color} opacity="0.8" />
        </g>
        <path className="anim-deploy-flame" d="M188 160 L195 200 L200 215 L205 200 L212 160 Z" fill={step.color} opacity="0.9" />
        <circle cx="100" cy="320" r="20" fill={step.color} opacity="0.3" className="anim-deploy-cloud-1" />
        <circle cx="120" cy="330" r="15" fill={step.color} opacity="0.3" className="anim-deploy-cloud-2" />
        <circle cx="300" cy="320" r="20" fill={step.color} opacity="0.3" className="anim-deploy-cloud-1" style={{ animationDelay: '0.5s' }} />
        <circle cx="280" cy="330" r="15" fill={step.color} opacity="0.3" className="anim-deploy-cloud-2" style={{ animationDelay: '0.5s' }} />
        <circle className="anim-deploy-p-1" cx="200" cy="240" r="3" fill={step.color} />
        <circle className="anim-deploy-p-2" cx="190" cy="260" r="2.5" fill={step.color} />
        <circle className="anim-deploy-p-3" cx="210" cy="270" r="2.5" fill={step.color} />
      </svg>
    );
  }

  if (step.illustration === 'iterate') {
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <line x1="40" y1="320" x2="360" y2="320" stroke={step.color} strokeWidth="2" opacity="0.5" />
        <line x1="40" y1="320" x2="40" y2="80" stroke={step.color} strokeWidth="2" opacity="0.5" />
        <path
          className="anim-iterate-line"
          d="M60 280 L120 240 L180 260 L240 180 L300 140 L360 100"
          fill="none"
          stroke={step.color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle className="anim-iterate-dot-1" cx="120" cy="240" r="6" fill={step.color} />
        <circle className="anim-iterate-dot-2" cx="240" cy="180" r="6" fill={step.color} />
        <circle className="anim-iterate-dot-1" cx="360" cy="100" r="6" fill={step.color} style={{ animationDelay: '0.8s' }} />
        <path d="M350 100 L360 100 L360 110" fill="none" stroke={step.color} strokeWidth="3" strokeLinecap="round" />
        <text x="20" y="120" fontSize="10" fill={step.color} fontFamily="monospace" opacity="0.6">100</text>
        <text x="20" y="200" fontSize="10" fill={step.color} fontFamily="monospace" opacity="0.6">50</text>
        <text x="20" y="320" fontSize="10" fill={step.color} fontFamily="monospace" opacity="0.6">0</text>
        <text x="60" y="340" fontSize="10" fill={step.color} fontFamily="monospace" opacity="0.6">v1</text>
        <text x="180" y="340" fontSize="10" fill={step.color} fontFamily="monospace" opacity="0.6">v2</text>
        <text x="300" y="340" fontSize="10" fill={step.color} fontFamily="monospace" opacity="0.6">v3</text>
      </svg>
    );
  }

  return null;
};

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Jump to a specific step (used by buttons + dots) — state change only,
  // no scrolling, no observer-driven updates.
  const goToStep = (index) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, index));
    setActiveIndex(clamped);
  };

  const goPrev = () => goToStep(activeIndex - 1);
  const goNext = () => goToStep(activeIndex + 1);

  // Keyboard navigation (Arrow Left / Arrow Right)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const cards = steps.map((step) => ({
    id: step.id,
    content: <ProcessCard step={step} />,
  }));

  return (
    <section className="relative py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-8 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="heading-eyebrow justify-center"
        >
          My Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="heading-display heading-xl mt-4"
        >
          How I bring an <span className="gradient-text">idea to life</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 mt-5 max-w-xl mx-auto"
        >
          A simple, repeatable workflow I follow on every project — click
          through each step.
        </motion.p>
      </div>

      {/* Split layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ">
        {/* LEFT — Card stack */}
        <div className="relative">
          <CardStack items={cards} offset={20} activeIndex={activeIndex} />

          {/* Step indicator dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => goToStep(i)}
                aria-label={`Go to step ${step.num}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? 'w-10' : 'w-1.5 hover:bg-white/40'
                }`}
                style={{
                  backgroundColor: i === activeIndex ? step.color : 'rgba(255,255,255,0.2)',
                }}
              ></button>
            ))}
          </div>
          <p className="text-center mt-3 text-[10px] font-mono tracking-widest uppercase text-slate-500">
            Step {steps[activeIndex].num} of {String(steps.length).padStart(2, '0')} · {steps[activeIndex].tagline}
          </p>

          {/* Prev / Next navigation */}
          <div className="mt-6 flex items-center justify-between gap-3 max-w-md mx-auto">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              aria-label="Previous step"
              className={`group flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 ${
                activeIndex === 0
                  ? 'border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed'
                  : 'border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:-translate-x-0.5'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Prev</span>
              <span className="hidden md:inline text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300">
                {activeIndex > 0 ? steps[activeIndex - 1].title : ''}
              </span>
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === steps.length - 1}
              aria-label="Next step"
              className={`group flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 ${
                activeIndex === steps.length - 1
                  ? 'border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed'
                  : 'border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:translate-x-0.5'
              }`}
            >
              <span className="hidden md:inline text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300">
                {activeIndex < steps.length - 1 ? steps[activeIndex + 1].title : ''}
              </span>
              <span className="hidden sm:inline">Next</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT — Animation panel (no sticky, no scroll triggers) */}
        <div className="relative ">
          <div className="relative aspect-square w-full max-w-[480px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-ink-900/80 to-ink-950/80 backdrop-blur-sm shadow-2xl">
            {/* Background gradient that shifts per step */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${steps[activeIndex].color}, transparent 70%)`,
                }}
              ></motion.div>
            </AnimatePresence>

            {/* Illustration */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-8"
              >
                <BigIllustration step={steps[activeIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Step label at bottom */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-5 left-5 right-5 text-center"
              >
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
                  style={{
                    color: steps[activeIndex].color,
                    backgroundColor: `${steps[activeIndex].color}15`,
                    border: `1px solid ${steps[activeIndex].color}40`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: steps[activeIndex].color }}
                  ></span>
                  {steps[activeIndex].tagline}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
