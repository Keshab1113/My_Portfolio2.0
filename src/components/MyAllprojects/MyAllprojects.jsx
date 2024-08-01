import React from 'react'
import { motion } from "framer-motion"
import { AiFillGithub } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from 'react-router-dom';
import projects from './ProjectData';

const Projectcomponent = () => {
  return (
    <>
      {
        projects.map((i) => {
          return (
            <div className='bg-black w-full h-full text-black border-2 border-slate-600  rounded-2xl pt-4'>
              <div className=' overflow-hidden rounded-md m-4'>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={i.image}
                  alt="project-image"
                  className=" w-full h-full bg-cover rounded-md"
                />
              </div>
              <div className=' mt-6 bg-white px-4'>
                <h1 className=' text-3xl font-bold pt-4'>{i.name}</h1>
                <h1 className=' text-xl font-bold text-slate-600'>{ i.subname}</h1>
                <p className=' font-medium mt-4'>{i.description}</p>
              </div>
              <div className='pt-4 p-4 bg-white'>
                <div className=' border-b pb-2 border-slate-600'>
                  <h1 className=' text-xl font-bold text-slate-600'>Technologies</h1>
                </div>
                
                <div className=' mt-2 grid grid-cols-3 gap-2'>
                  {i.skills.map((j) => {
                    return (
                      <h1 className={`font-bold bg-blue-700 text-white w-min px-2 rounded ${j[1]}`}>{j[0]}</h1>
                  )
                  })}
                </div>
              </div>
              <div className=' flex justify-around p-4 bg-white rounded-b-2xl'>
                <Link to={i.source}>
                  <motion.button whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }} className=' flex justify-center items-center border-2 border-slate-600 p-2 hover:cursor-pointer'>
                    <h1 className=' font-bold pr-2'>Source Code</h1>
                    <AiFillGithub size={28}
                      className="text-black" />
                  </motion.button>
                </Link>
                <Link to={i.link}>
                  <motion.button whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }} className=' flex justify-center items-center border-2 border-blue-500 p-2 hover:cursor-pointer bg-blue-500 text-white'>
                    <h1 className=' font-bold pr-2'>Live Demo</h1>
                    <FaGlobeAmericas size={22}
                      className="" />
                  </motion.button>
                </Link>
              </div>
            </div>
          );
        })
      }
    </>
  )
}

export default Projectcomponent
