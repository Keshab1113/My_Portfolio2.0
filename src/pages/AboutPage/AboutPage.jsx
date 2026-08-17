import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from '../../components/AboutMe/AboutMe';
import Education from '../../components/AboutMe/Education';
import Experience from '../../components/AboutMe/Experience';
import Skills from '../../components/AboutMe/Skills';

const AboutPage = () => {
  return (
    <div className="relative pt-28 flex flex-col">
      <Helmet>
        <title>About — Keshab Das</title>
        <meta
          name="description"
          content="About Keshab Das — Software Engineer & Web Developer from Kalyani, West Bengal. Education, experience, skills, and personal details."
        />
      </Helmet>
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default AboutPage;
