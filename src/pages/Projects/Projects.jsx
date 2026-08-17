import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaCode, FaMobile, FaServer } from 'react-icons/fa';
import projects from '../../components/MyAllprojects/ProjectData';
import ProjectCard from '../../components/MyAllprojects/ProjectCard';

const filters = [
  { id: 'all', label: 'All', icon: <FaCode size={12} /> },
  { id: 'mern', label: 'MERN', icon: <FaServer size={12} /> },
  { id: 'react', label: 'React', icon: <FaCode size={12} /> },
  { id: 'frontend', label: 'Frontend', icon: <FaMobile size={12} /> },
];

const Projects = () => {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    if (active === 'mern')
      return projects.filter((p) =>
        p.skills.some(([t]) =>
          ['mongodb', 'express', 'nodejs'].includes(t.replace('#', '').toLowerCase())
        )
      );
    if (active === 'react')
      return projects.filter((p) => p.skills.some(([t]) => t.toLowerCase().includes('react')));
    if (active === 'frontend')
      return projects.filter((p) =>
        p.skills.some(([t]) => ['html', 'css', 'javascript'].includes(t.replace('#', '').toLowerCase()))
      );
    return projects;
  }, [active]);

  return (
    <div className="relative pt-28 pb-16">
      <Helmet>
        <title>Projects — Keshab Das</title>
        <meta
          name="description"
          content="Selected projects by Keshab Das — web apps, dashboards, and clones designed and engineered end-to-end with MERN, React, and modern UI."
        />
      </Helmet>

      <section className="section pb-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="heading-eyebrow">Portfolio</span>
            <h1 className="heading-display heading-xl mt-3">
              Selected <span className="gradient-text">projects</span>.
            </h1>
            <p className="mt-3 text-slate-400 max-w-xl">
              A curated set of web apps, dashboards, and clones I've designed
              and engineered end-to-end.
            </p>
          </div>
          <Link
            to="https://github.com/Keshab1113?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            All repositories <FaChevronRight size={12} />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold border transition ${
                active === f.id
                  ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-ink-950 border-transparent shadow-glow-cyan'
                  : 'border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-white bg-white/[0.02]'
              }`}
            >
              {f.icon} {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-slate-500 self-center">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      <section className="section pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.name + i} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
