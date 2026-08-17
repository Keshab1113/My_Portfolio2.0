import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

const experiences = [
  {
    role: 'Web Developer',
    company: 'Freelance',
    type: 'Freelance',
    period: 'Mar 2023 — Jan 2024',
    duration: '11 mos',
    location: 'India · Remote',
    icon: <FaLaptopCode />,
    accent: 'from-cyan-400 to-violet-500',
    desc:
      "Here I built a Travel Website — end-to-end design and development, responsive UI, and modern web tooling.",
  },
  {
    role: 'Web Developer',
    company: 'Altruism Labs',
    type: 'Internship',
    period: 'Feb 2024 — May 2024',
    duration: '4 mos',
    location: 'Remote',
    icon: <FaBriefcase />,
    accent: 'from-violet-500 to-pink-500',
    desc:
      'Worked as a React Developer building interactive UIs, reusable components, and shipping product features in a fast-paced remote team.',
  },
  {
    role: 'React Developer',
    company: 'Celebal Technologies',
    type: 'Internship',
    period: 'Jun 2024 — Aug 2024',
    duration: '3 mos',
    location: 'Jaipur, Rajasthan, India · Remote',
    icon: <FaBriefcase />,
    accent: 'from-pink-500 to-amber-400',
    desc:
      'Worked here as a React Developer crafting performant interfaces, integrating APIs, and collaborating on enterprise-grade components.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Levitation Infotech',
    type: 'Internship',
    period: 'Nov 2024 — Jun 2025',
    duration: '8 mos',
    location: 'Noida · Remote',
    icon: <FaBriefcase />,
    accent: 'from-emerald-400 to-cyan-500',
    desc:
      'Worked as a Full Stack Developer building features across the stack — from React frontends to Node/Express APIs and MongoDB schemas.',
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Quantumhash Corporation',
    type: 'Full-time',
    period: 'Jul 2025 — Present',
    duration: '1 yr 2 mos',
    location: 'Wilmington, Delaware, United States · Remote',
    icon: <FaBriefcase />,
    accent: 'from-cyan-400 via-violet-500 to-pink-500',
    desc:
      'Currently working as a Full Stack Web Developer — designing and shipping production features end-to-end with a focus on clean architecture, performance, and delightful UX.',
    current: true,
  },
];

const Experience = () => {
  return (
    <section className="section">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <span className="heading-eyebrow">Experience</span>
          <h2 className="heading-xl mt-3">Professional journey.</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          A timeline of the teams I've built with — from freelance work to
          full-time product engineering.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-violet-500/40 to-transparent"></div>

        <div className="space-y-12">
          {experiences.map((it, i) => (
            <motion.div
              key={`${it.company}-${it.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative grid grid-cols-1 sm:grid-cols-2 sm:gap-12 items-center ${
                i % 2 === 0 ? '' : 'sm:[&>div:first-child]:order-2'
              }`}
            >
              <div className="pl-12 sm:pl-0">
                <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest flex items-center gap-2 flex-wrap">
                  {it.period}
                  <span className="text-slate-500">· {it.duration}</span>
                  {it.current && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Current
                    </span>
                  )}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {it.role}
                  <span className="text-slate-500 font-medium"> · </span>
                  <span className="gradient-text">{it.company}</span>
                </h3>
                <p className="text-slate-400 text-sm mt-1 flex items-center gap-2 flex-wrap">
                  <span className="chip">{it.type}</span>
                  <span>{it.location}</span>
                </p>
                <p className="text-slate-300/90 text-sm mt-3 leading-relaxed">{it.desc}</p>
              </div>
              <div className="hidden sm:block"></div>

              {/* Center icon */}
              <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-1">
                <div className={`relative w-9 h-9 rounded-full grid place-items-center bg-gradient-to-br ${it.accent} shadow-glow-cyan`}>
                  <span className="text-ink-950 text-base">{it.icon}</span>
                  <span className="absolute inset-0 rounded-full bg-white/10 animate-pulse-ring"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
