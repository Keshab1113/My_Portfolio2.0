import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const items = [
  {
    year: '2021 — 2025',
    title: 'B.Tech in Information Technology',
    org: 'Jalpaiguri Government Engineering College',
    icon: <FaUniversity />,
    accent: 'from-cyan-400 to-violet-500',
    desc:
      "Appeared for WBJEE in 2021 (AIR 7229) and joined Information Technology through online counselling. Building a strong foundation in software engineering, data structures, and modern web development.",
  },
  {
    year: '2019 — 2021',
    title: 'Higher Secondary',
    org: 'Dainhat High School (WBCHSE)',
    icon: <FaGraduationCap />,
    accent: 'from-violet-500 to-pink-500',
    desc:
      'Completed higher secondary with 76% under the West Bengal Council of Higher Secondary Examination in 2021.',
  },
  {
    year: '2014 — 2019',
    title: 'Madhyamik Examination',
    org: 'Okersha High School (WBBSE)',
    icon: <FaSchool />,
    accent: 'from-pink-500 to-amber-400',
    desc:
      'Passed secondary examination with 69% under the West Bengal Board of Secondary Examination in 2019.',
  },
];

const Education = () => {
  return (
    <section className="section">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <span className="heading-eyebrow">Education</span>
          <h2 className="heading-xl mt-3">Academic journey.</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          A path of consistent learning — from secondary school to engineering,
          building strong fundamentals along the way.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-violet-500/40 to-transparent"></div>

        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative grid grid-cols-1 sm:grid-cols-2 sm:gap-12 items-center ${
                i % 2 === 0 ? '' : 'sm:[&>div:first-child]:order-2'
              }`}
            >
              <div className="pl-12 sm:pl-0">
                <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">{it.year}</span>
                <h3 className="font-display text-xl font-bold text-white mt-1">{it.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{it.org}</p>
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

export default Education;
