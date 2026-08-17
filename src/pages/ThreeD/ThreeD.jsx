import React from 'react';
import { Helmet } from 'react-helmet';

const ThreeD = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>3D — Keshab Das</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="section">
        <span className="heading-eyebrow">3D Playground</span>
        <h1 className="heading-display heading-xl mt-3">
          Experimental <span className="gradient-text">3D scenes</span>.
        </h1>
        <p className="mt-4 text-slate-400 max-w-2xl">
          Coming soon — a collection of interactive 3D scenes built with React
          Three Fiber and GLSL shaders. Stay tuned!
        </p>
        <div className="mt-10 card-dark p-10 text-center">
          <span className="text-cyan-300 font-mono text-sm">[ 3D canvas will render here ]</span>
        </div>
      </section>
    </div>
  );
};

export default ThreeD;
