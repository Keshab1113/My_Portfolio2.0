import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaServer, FaPalette, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Frontend Engineering',
    desc: 'Pixel-perfect, accessible React interfaces with smooth motion, performant state, and a11y in mind.',
    color: 'from-cyan-400/30 to-cyan-500/0',
  },
  {
    icon: <FaServer />,
    title: 'Backend & APIs',
    desc: 'Scalable Node/Express services, RESTful & real-time APIs, MongoDB schema design, and auth flows.',
    color: 'from-violet-400/30 to-violet-500/0',
  },
  {
    icon: <FaPalette />,
    title: 'UI / UX Design',
    desc: 'Clean, modern interfaces with thoughtful typography, color, and motion — built for delight.',
    color: 'from-pink-400/30 to-pink-500/0',
  },
  {
    icon: <FaCogs />,
    title: 'Dev & Deployment',
    desc: 'Vite-powered tooling, CI-friendly builds, Vercel/Netlify deploys, and clean Git workflows.',
    color: 'from-emerald-400/30 to-emerald-500/0',
  },
];

const stack = [
  'React', 'Redux', 'JavaScript', 'TypeScript', 'Node.js', 'Express',
  'MongoDB', 'Tailwind', 'Material UI', 'Next.js', 'Framer Motion',
  'Vite', 'Git', 'GitHub', 'Postman', 'Python',
];

const projects = [
  { tag: 'MERN', name: 'CommuteGo', desc: 'Travel planner with buses, trains, flights & metro.' },
  { tag: 'React', name: 'Admin Dashboards', desc: 'Realtime analytics with recharts & Material UI.' },
  { tag: 'React', name: 'Zomato Clone', desc: 'A sleek ReactJS-powered restaurant discovery UI.' },
  { tag: 'React', name: 'Flight Booking', desc: 'Responsive booking flow with rich interactions.' },
];

const Highlights = () => {
  return (
    <div className="relative">
      {/* Services */}
      <section className="section">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="heading-eyebrow">What I Do</span>
            <h2 className="heading-xl mt-3">Services that ship value.</h2>
          </div>
          <Link to="/about" className="btn-ghost text-sm">
            More about me <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-dark p-6 relative overflow-hidden group"
            >
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${s.color} blur-2xl group-hover:scale-125 transition-transform duration-700`}></div>
              <div className="relative">
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-white/5 border border-white/10 text-cyan-300 text-lg mb-4">
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="heading-eyebrow">Featured Work</span>
            <h2 className="heading-xl mt-3">Recent projects I've built.</h2>
          </div>
          <Link to="/projects" className="btn-ghost text-sm">
            All projects <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-dark p-5 group"
            >
              <span className="code-tag">{p.tag}</span>
              <h3 className="font-display text-lg font-bold text-white mt-3">{p.name}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{p.desc}</p>
              <Link
                to="/projects"
                className="mt-4 inline-flex items-center gap-1.5 text-cyan-300 text-sm font-semibold group-hover:text-cyan-200"
              >
                View <FaArrowRight size={10} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech stack marquee */}
      <section className="py-12 border-y border-white/5 bg-ink-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 mb-6">
          <span className="heading-eyebrow">My Toolbox</span>
          <span className="text-xs font-mono text-slate-500">Always learning, always shipping.</span>
        </div>
        <div
          className="overflow-hidden marquee-mask"
          aria-label="Tools and technologies I work with"
        >
          <div className="marquee-track">
            {[...stack, ...stack, ...stack].map((s, i) => (
              <span key={i} className="marquee-item">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="relative card-dark overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="heading-eyebrow">Have an idea?</span>
              <h2 className="heading-xl mt-3">Let's build something great together.</h2>
              <p className="text-slate-400 mt-4 max-w-xl">
                I'm currently open to internships, freelance, and full-time
                opportunities as a Software Engineer. Let's talk.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Link to="/contact" className="btn-primary">
                Get in touch <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
