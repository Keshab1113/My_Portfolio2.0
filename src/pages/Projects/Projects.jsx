import React from 'react'
import { Helmet } from "react-helmet";
import Projectcomponent from "../../components/MyAllprojects/MyAllprojects";
import { Link } from 'react-router-dom';


const Projects = () => {
  return (
      <div className=' pt-14 sm:px-12 px-2'>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Keshab Das - Projects</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      <h1 className=' text-5xl text-white font-bold text-center mt-10'>Projects</h1>
      <div className='  w-full h-full mt-6 grid sm:grid-cols-3 grid-cols-1 gap-10 sm:p-10 px-4'>
          <Projectcomponent/>
      </div>
      <div className=' w-full h-12 mb-10 mt-6'>
        <Link to={"https://github.com/Keshab1113?tab=repositories"}>
          <button className=' float-end text-white border px-2 hover:bg-slate-800 rounded'>More Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default Projects
