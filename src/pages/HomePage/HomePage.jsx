import React from 'react';
import { Helmet } from "react-helmet";
import Hero from '../../components/HomePage/Hero';
import Process from '../../components/HomePage/Process';
import Highlights from '../../components/HomePage/Highlights';

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Keshab Das — Software Engineer & Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Keshab Das — Software Engineer and Web Developer specializing in MERN, React, and modern UI engineering."
        />
      </Helmet>
      <Hero />
      <Process />
      <Highlights />
    </div>
  );
};

export default HomePage;
