import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaWhatsapp, FaGithub, FaLinkedinIn, FaArrowRight, FaDownload, FaPlay } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import bannerAnime2 from '../../assets/bannerAnime2.json';

const roles = [
  'Software Engineer',
  'Web Developer',
  'MERN Developer',
  'React Developer',
  'Open Source Contributor',
  'Problem Solver',
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-aurora opacity-90"></div>
      <div className="absolute inset-0 -z-10 bg-grid-dark bg-grid-32 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute top-40 right-0 w-[28rem] h-[28rem] rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-cyan-300 mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Available for new opportunities
          </div>

          <p className="font-mono text-cyan-300 text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="animate-pingpong">👋</span> Hello there, I'm
          </p>

          <h1 className="font-display heading-shimmer font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Keshab <span className="gradient-text">Das</span>
          </h1>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <span className="code-tag">&lt;</span>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200">
              <span className="text-slate-100">
                <Typewriter
                  words={roles}
                  loop={0}
                  cursor
                  cursorBlinking
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1400}
                />
              </span>
            </h2>
            <span className="code-tag">/&gt;</span>
          </div>

          <p className="mt-6 text-slate-300/90 max-w-xl leading-relaxed">
            I design and engineer fast, accessible, and beautiful web experiences.
            Specialized in the MERN stack, building scalable products from
            pixel-perfect interfaces to robust backend systems.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
            {[
              { k: '10+', v: 'Projects' },
              { k: 'MERN', v: 'Stack' },
              { k: 'B.Tech', v: 'IT Engineer' },
            ].map((s) => (
              <div key={s.v} className="card-dark px-3 py-3 text-center">
                <p className="font-display text-2xl font-bold text-white">{s.k}</p>
                <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400">{s.v}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/projects')}
              className="btn-primary"
            >
              View Projects <FaArrowRight size={14} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="btn-ghost"
            >
              <FaPlay size={12} /> Hire Me
            </button>
            <a
              href="/keshab.pdf"
              download
              className="btn-ghost"
            >
              <FaDownload size={14} /> Resume
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-1">Find me on</span>
            {[
              { icon: <FaGithub size={16} />, href: 'https://github.com/Keshab1113', label: 'GitHub' },
              { icon: <FaLinkedinIn size={16} />, href: 'https://www.linkedin.com/in/keshab-das-6a84ab234/', label: 'LinkedIn' },
              { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/919547019555', label: 'WhatsApp' },
              { icon: <FaFacebookF size={16} />, href: 'https://www.facebook.com/Keshab1113/', label: 'Facebook' },
            ].map((s) => (
              <motion.a
                key={s.label}
                whileHover={{ y: -3 }}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl grid place-items-center glass text-slate-200 hover:text-white hover:border-cyan-400/40"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right content — Lottie + terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="relative max-w-xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20 blur-2xl rounded-full"></div>
            <div className="relative card-dark p-6">
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                online
              </div>
              <Lottie animationData={bannerAnime2} loop autoplay className="w-full h-72 sm:h-80" />
            </div>
          </div>

          {/* Terminal card */}
          <div className="mt-6 terminal max-w-xl mx-auto">
            <span className="terminal-dot r"></span>
            <span className="terminal-dot y"></span>
            <span className="terminal-dot g"></span>
            <div className="terminal-body">
              <p className="text-emerald-400">~/keshab $ <span className="text-cyan-300">whoami</span></p>
              <p className="text-slate-300">Software Engineer • Web Developer</p>
              <p className="text-emerald-400 mt-1">~/keshab $ <span className="text-cyan-300">stack --primary</span></p>
              <p className="text-slate-300">React · Node · Express · MongoDB · Tailwind · Next.js</p>
              <p className="text-emerald-400 mt-1">~/keshab $ <span className="text-cyan-300">contact --hire</span></p>
              <p className="text-slate-300">→ <a className="text-cyan-300 hover:underline" href="mailto:keshabdas2003@gmail.com">keshabdas2003@gmail.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-400">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-cyan-300 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
