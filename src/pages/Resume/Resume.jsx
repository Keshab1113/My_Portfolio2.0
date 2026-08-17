import React from 'react';
import { Helmet } from 'react-helmet';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import keshab from '/keshab.pdf';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="relative pt-28 pb-16">
      <Helmet>
        <title>Resume — Keshab Das</title>
        <meta
          name="description"
          content="Resume of Keshab Das — Software Engineer & Web Developer. Education, skills, projects, and experience. Download the PDF for the complete version."
        />
      </Helmet>

      <section className="section pb-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="heading-eyebrow">Resume</span>
            <h1 className="heading-display heading-xl mt-3">
              Here is my <span className="gradient-text">resume</span>.
            </h1>
            <p className="mt-3 text-slate-400 max-w-xl">
              A snapshot of my education, skills, and experience. Download the
              PDF for the complete version.
            </p>
          </div>
          <a href={keshab} download className="btn-primary">
            <FaDownload size={14} /> Download Resume
          </a>
        </div>
      </section>

      <section className="section pt-2">
        <div className="card-dark overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
            <FaFileAlt className="text-cyan-300" />
            <span className="text-sm font-mono text-slate-300">keshab-resume.pdf</span>
            <span className="ml-auto text-xs font-mono text-slate-500">Preview</span>
          </div>
          <div className="bg-white h-[78vh] w-full overflow-scroll">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer theme="dark" defaultScale={1.3} fileUrl={keshab} />
            </Worker>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
