import React from "react";
import SkillsAPI from "../../assets/SkillsAPI";
import MlAPI from "../../assets/MlAPI";
import LanguageAPI from "../../assets/LanguageAPI"
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className=" sm:h-screen h-full py-10">
      <h1 className="text-5xl text-center font-bold text-white">Skills</h1>
      <div className=" flex sm:flex-row flex-col">
        <div className=" sm:w-[40%] w-full sm:mx-[5%] mx-2 h-full mt-9 px-2">
          <h1 className=" text-4xl font-bold text-white">Web Frameworks</h1>
          <div className=" grid mt-6 sm:grid-cols-6 grid-cols-4 sm:gap-4 gap-2">
            {SkillsAPI.map((i) => {
              return (
                <div className=" border flex flex-row" key={i.name}>
                  <img src={i.icon} alt={i.name} className=" h-16" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:w-[40%] w-full sm:mx-[5%] mx-2 h-full mt-9">
          <h1 className=" text-4xl font-bold px-2 text-white">Languages & Tools</h1>
          <div className="  grid mt-6 sm:grid-cols-6 grid-cols-4 sm:gap-4 gap-2 px-2">
            {MlAPI.map((i) => {
              return (
                <div className=" border flex flex-row" key={i.name}>
                  <img src={i.icon} alt={i.name} className=" h-16" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" flex sm:flex-row flex-col">
        <div className="sm:w-[40%] w-full sm:mx-[5%] mx-2 h-full mt-9 px-2">
          <h1 className=" text-4xl font-bold text-white">Machine Learning</h1>
          <div className=" grid mt-6 sm:grid-cols-6 grid-cols-4 sm:gap-4 gap-2 px-2">
            {LanguageAPI.map((i) => {
              return (
                <div className=" border mr-2 flex flex-row" key={i.name}>
                  <img src={i.icon} alt={i.name} className=" h-16" />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" sm:w-[40%] w-full sm:mx-[5%] mx-2 h-full mt-9 px-2 mb-6">
          <h1 className=" text-4xl font-bold text-white">Languages Proficiency</h1>
          <div className=" flex gap-4 mt-6">
            <motion.div whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }} className=" border rounded-md flex flex-col justify-center items-center cursor-pointer">
              <h1 className=" font-bold text-white">Bengali</h1>
              <h1 className=" text-center"> Native/Bilingual profiency</h1>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }} className=" border rounded-md flex flex-col justify-center items-center cursor-pointer">
              <h1 className=" font-bold text-white">Hindi</h1>
              <h1 className=" text-center">Full professional proficiency</h1>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }} className=" border rounded-md flex flex-col justify-center items-center cursor-pointer">
              <h1 className=" font-bold text-white">English</h1>
              <h1 className=" text-center">Full professional proficiency</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
