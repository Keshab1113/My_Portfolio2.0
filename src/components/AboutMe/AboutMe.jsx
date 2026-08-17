import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-2.5 border-b border-white/5 last:border-0">
    <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80 sm:w-44 shrink-0">{label}</span>
    <span className="text-slate-200 text-sm">{value}</span>
  </div>
);

const AboutMe = () => {
  return (
    <div className="section">
      {/* Top: Intro + Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="heading-eyebrow">About Me</span>
          <h2 className="heading-xl mt-3">
            Crafting <span className="gradient-text">delightful</span> software.
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            I'm <span className="text-white font-semibold">Keshab Das</span>, a Software Engineer and Web Developer passionate about building modern, accessible, and meaningful digital products.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            I enjoy turning ideas into real-world applications—from pixel-perfect React interfaces to scalable backend systems and full-stack web applications. My core expertise lies in React.js, JavaScript, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, and modern web development technologies.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {['React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Next.js'].map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/30 via-violet-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-violet-500 to-pink-500">
              <img
                src="/mypicture.png"
                alt="Keshab Das"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-ink-950"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-2xl card-dark flex items-center gap-2 text-sm">
              <FaUserAstronaut className="text-cyan-300" />
              <span className="text-slate-200">Software Engineer</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom: Map / contact card + Personal info */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-dark p-6"
        >
          <div className="rounded-xl overflow-hidden border border-white/5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58771.30397539102!2d88.44881620927276!3d22.979432831626582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f895237d8c2c43%3A0xa617faf57fbd04d1!2sKalyani%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1786913748748!5m2!1sen!2sin"
              width="100%"
              height="240"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <div className="mt-5 space-y-3">
            {[
              { icon: <FaLocationDot />, color: 'text-rose-400', label: 'Kalyani, West Bengal' },
              { icon: <FaLinkedin />, color: 'text-sky-400', label: 'linkedin.com/in/keshab-das' },
              { icon: <FaWhatsapp />, color: 'text-emerald-400', label: '+91 9547019555' },
              { icon: <HiOutlineMail />, color: 'text-indigo-400', label: 'keshabdas2003@gmail.com' },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-200 text-sm">
                <span className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center ${row.color}`}>
                  {row.icon}
                </span>
                <span>{row.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-dark p-6"
        >
          <span className="heading-eyebrow">Personal Details</span>
          <h3 className="font-display text-2xl font-bold text-white mt-2 mb-4">Quick Facts</h3>
          <InfoRow label="Date of Birth" value="30 / 07 / 2003" />
          <InfoRow label="Gender" value="Male" />
          <InfoRow label="College" value="Jalpaiguri Government Engineering College" />
          <InfoRow label="Degree" value="Bachelor of Technology (B.Tech)" />
          <InfoRow label="Department" value="Information Technology" />
          <InfoRow label="Current Address" value="Kalyani, West Bengal, India" />
          <InfoRow label="Permanent Address" value="Singi, Katwa, Purba Bardhaman, West Bengal" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
