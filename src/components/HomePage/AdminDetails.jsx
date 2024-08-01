import React from 'react'
import Button from '@mui/material/Button';
import { FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const AdminDetails = () => {
  const navigate = useNavigate();
  return (
    <div className=' absolute sm:w-[50%] w-full sm:h-[92vh] h-[60%] flex flex-col justify-center items-start sm:p-[100px] p-4 text-white mt-[8vh]'>
      <div className=' text-xl font-semibold flex'>Hello<h1 className=' animate-pingpong'>👋</h1>, It's Me</div>
      <h1 className=' text-6xl font-bold mt-2 capitalize inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#617bce] to-[#43aeba] '>Keshab Das</h1>
      <h1 className=' text-3xl font-bold mt-2'>
        <span style={{ color: 'red', fontWeight: 'bold',textTransform: 'uppercase' }}>
          <Typewriter
            words={['Frontend Developer', 'backend developer', 'Mern Developer', 'React Developer', 'competitive programmer', 'Ml enthusiastic','Open Source Contributor']}
            loop={10}
            cursor
            cursorBlinking
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h1>
          <div className=' flex mt-5'>
        <motion.div whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }} className=' w-10 h-10 rounded-full border-2 border-white  flex justify-center items-center mr-2 hover:bg-blue-700 hover:cursor-pointer text-blue-700 hover:text-white text-xl'><Link to={"https://www.facebook.com/Keshab1113/"}><FaFacebookF /></Link></motion.div>
        <motion.div whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }} className=' w-10 h-10 rounded-full border-2 border-white  flex justify-center items-center mr-2 hover:bg-green-700 hover:cursor-pointer text-green-700 hover:text-white text-2xl'><Link to={"https://wa.me/919547019555"}><FaWhatsapp /></Link> </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }} className=' w-10 h-10 rounded-full border-2 border-white  flex justify-center items-center mr-2 hover:bg-blue-700 hover:cursor-pointer text-blue-700 hover:text-white text-xl'><Link to={"https://www.linkedin.com/in/keshab-das-6a84ab234/"}><FaLinkedinIn /></Link></motion.div>
        <motion.div whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }} className=' w-10 h-10 rounded-full border-2 border-white  flex justify-center items-center hover:bg-white hover:cursor-pointer text-white hover:text-black text-2xl'><Link to={"https://github.com/Keshab1113"}><FaGithub /></Link></motion.div>  
          </div>
          <div className=' mt-5 flex gap-4'>
        
        <button onClick={() => navigate("resume")} className="btn hover:tracking-widest">
          <span>Resume</span>
          <div className="top"></div>
          <div className="left"></div>
          <div className="bottom"></div>
          <div className="right"></div>
        </button>
        <button onClick={() => navigate("contact")} className="btn hover:tracking-widest">
          <span>Hire Me</span>
          <div className="top"></div>
          <div className="left"></div>
          <div className="bottom"></div>
          <div className="right"></div>
        </button>
          </div>
    </div>
  )
}

export default AdminDetails
