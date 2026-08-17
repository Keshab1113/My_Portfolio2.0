import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card-dark overflow-hidden flex flex-col group"
    >
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent z-10 pointer-events-none"></div>
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6 }}
          src={project.image}
          alt={project.name}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-3 left-3 z-20 code-tag">{project.subname}</span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold text-white">{project.name}</h3>
        <p className="text-slate-400 text-sm mt-2 leading-relaxed flex-1">{project.description}</p>

        <div className="mt-4">
          <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80 mb-2">Technologies</p>
          <div className="flex flex-wrap gap-1.5">
            {project.skills.map(([tag], i) => (
              <span key={i} className="chip">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-3">
          <Link
            to={project.source}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost flex-1 justify-center text-xs py-2.5"
          >
            <AiFillGithub size={16} /> Source
          </Link>
          <Link
            to={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex-1 justify-center text-xs py-2.5"
          >
            Live Demo <FaArrowRight size={11} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
