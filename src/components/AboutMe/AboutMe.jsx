import React from "react";
import { FaLocationDot, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const AboutMe = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center sm:p-10 p-4">
        <div className="lg:w-[50%] w-full flex flex-col justify-center items-center h-full mb-10 lg:mb-0">
          <h1 className="text-5xl text-white font-bold mb-10 text-center">About Me</h1>
          <h1 className="text-2xl font-bold text-center">My name is Keshab Das</h1>
          <h1 className="text-xl font-semibold mt-4 text-center">
            I'm from Jalpaiguri, West Bengal. Currently, I'm studying at
            Jalpaiguri Government Engineering College in the stream of
            Information Technology Department. My strengths are I'm a positive
            thinker, a quick learner, and a self-motivated person. My goal is to get
            a job in a company as a software developer Engineer where I can
            enhance my skills and knowledge. I have a nuclear family with my
            father, mother, younger brother, and me. My hobbies are learning new
            skills which will help me in the future and in my free time, I play Cricket.
          </h1>
        </div>
        <div className="lg:w-[50%] w-full flex justify-center items-center h-full">
          <img src="/mypicture.jpg" alt="" className="rounded-full border-4 shadow-[0px_0px_40px_5px_white] h-80 w-80 sm:h-96 sm:w-96" />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center sm:p-10 p-4">
        <div className="lg:w-[50%] w-full h-full flex justify-center items-center mb-10 lg:mb-0">
          <div className="green-pink-gradient border-2 border-blue-700 w-full sm:w-[55%] h-[27rem] rounded-2xl bg-[rgb(21,16,48)]">
            <div className="h-[60%] rounded-t-2xl p-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2122.1964671660476!2d88.69691807886639!3d26.54922213952641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47bcc23bdc31f%3A0xf4314510e0a14f7a!2sGMXX%2BR54%2C%20Patkata%20Colony%2C%20Kharia%2C%20Jalpaiguri%2C%20West%20Bengal%20735102!5e0!3m2!1sen!2sin!4v1713466565893!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
            </div>
            <div className="text-[16px] font-Lora tracking-wider p-4 h-[40%] rounded-b-2xl">
              <h4 className="flex items-center gap-4 my-3">
                <FaLocationDot size={22} color="#ff4d4d" />
                Jalpaiguri, West Bengal
              </h4>
              <h4 className="flex items-center gap-4 my-3">
                <FaLinkedin size={22} color="0088cc" />
                Keshab Das
              </h4>
              <h4 className="flex items-center gap-4 my-3">
                <FaWhatsapp size={22} color="#1aff66" />
                +91 9547019555
              </h4>
              <h4 className="flex items-center gap-4 my-3">
                <HiOutlineMail size={22} color="#3385ff" />
                keshabdas2003@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-full flex flex-col justify-center sm:items-center items-start p-10">
          <div className="flex"><h1 className="font-bold mr-4">Date of Birth:</h1> 30/07/2003</div>
          <div className="flex"><h1 className="font-bold mr-4">Gender:</h1> Male</div>
          <div className="flex"><h1 className="font-bold mr-4">College Name:</h1> Jalpaiguri Government Engineering College</div>
          <div className="flex"><h1 className="font-bold mr-4">Degree:</h1> Bachelor of Technology (B.Tech)</div>
          <div className="flex"><h1 className="font-bold mr-4">Department:</h1> Information Technology</div>
          <div className="flex"><h1 className="font-bold mr-4">Current Address:</h1> Jalpaiguri, West Bengal, India</div>
          <div className="flex"><h1 className="font-bold mr-4">Permanent Address:</h1> Singi, Katwa, Purba Bardhaman, West Bengal, India</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
