import React from 'react'
import { Helmet } from "react-helmet";
import AboutMe from '../../components/AboutMe/AboutMe';
import Education from '../../components/AboutMe/Education';
import Skills from '../../components/AboutMe/Skills';

const AboutPage = () => {
  return (
      <div className=' pt-14 flex flex-col'>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Keshab Das - About</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      <AboutMe />
      <Education />
      <Skills/>
    </div>
  )
}

export default AboutPage
