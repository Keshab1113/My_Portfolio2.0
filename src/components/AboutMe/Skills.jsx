import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaPython, FaNpm, FaLinux, FaMobileAlt, FaCode, FaDatabase, FaCloud,
  FaCogs, FaRobot, FaBrain, FaProjectDiagram, FaChartLine, FaServer,
  FaCodeBranch, FaShieldAlt, FaCookieBite, FaUniversalAccess, FaPaintBrush,
  FaFilePdf, FaCog, FaComments, FaUsers, FaLightbulb, FaPuzzlePiece,
  FaSearch, FaCheckCircle, FaRocket, FaCloudUploadAlt, FaNetworkWired,
  FaCubes, FaBolt
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiMui, SiVite,
  SiPostman, SiCplusplus, SiC, SiNumpy, SiPandas, SiScikitlearn,
  SiTensorflow, SiJupyter, SiTypescript, SiNextdotjs, SiReactquery,
  SiMysql, SiFirebase, SiVercel, SiNetlify, SiPlotly, SiPuppeteer
} from "react-icons/si";
import { TbBrandVscode, TbBrandReactNative } from "react-icons/tb";

const iconMap = {
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "JavaScript (ES6+)": <FaJs className="text-yellow-400" />,
  "TypeScript": <SiTypescript className="text-blue-400" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "React Router": <FaCodeBranch className="text-red-400" />,
  "Redux Toolkit": <SiRedux className="text-purple-500" />,
  "Redux Persist": <SiRedux className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Shadcn UI": <FaCubes className="text-slate-200" />,
  "Material UI (MUI)": <SiMui className="text-sky-400" />,
  "Flowbite": <FaBolt className="text-blue-300" />,
  "Responsive Web Design": <FaMobileAlt className="text-violet-400" />,
  "Progressive Web Apps (PWA)": <FaCloudUploadAlt className="text-emerald-400" />,
  "Node.js": <FaNodeJs className="text-emerald-500" />,
  "Express.js": <SiExpress className="text-slate-300" />,
  "REST API Development": <FaServer className="text-slate-300" />,
  "Authentication & Authorization": <FaShieldAlt className="text-rose-400" />,
  "JWT Authentication": <FaShieldAlt className="text-amber-400" />,
  "Passport.js": <FaShieldAlt className="text-blue-400" />,
  "Session Management": <FaCog className="text-indigo-400" />,
  "Cookie-Based Authentication": <FaCookieBite className="text-amber-300" />,
  "MongoDB": <SiMongodb className="text-emerald-500" />,
  "Mongoose": <FaDatabase className="text-red-400" />,
  "MySQL": <SiMysql className="text-blue-400" />,
  "Database Design": <FaDatabase className="text-slate-300" />,
  "CRUD Operations": <FaDatabase className="text-cyan-300" />,
  "TanStack Query (React Query)": <SiReactquery className="text-red-500" />,
  "Context API": <FaReact className="text-cyan-300" />,
  "Git": <FaGitAlt className="text-orange-500" />,
  "GitHub": <FaGithub className="text-slate-200" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "Vite": <SiVite className="text-violet-400" />,
  "NPM": <FaNpm className="text-red-500" />,
  "Linux (Debian)": <FaLinux className="text-pink-400" />,
  "VS Code": <TbBrandVscode className="text-sky-400" />,
  "Render": <FaCloud className="text-indigo-300" />,
  "Firebase": <SiFirebase className="text-amber-400" />,
  "UI Development": <FaPaintBrush className="text-pink-400" />,
  "User Experience (UX)": <FaUsers className="text-teal-400" />,
  "Component-Based Architecture": <FaCubes className="text-cyan-300" />,
  "Mobile-First Design": <FaMobileAlt className="text-blue-300" />,
  "Accessibility (A11Y)": <FaUniversalAccess className="text-blue-400" />,
  "Pixel-Perfect Implementation": <FaCheckCircle className="text-emerald-400" />,
  "Plotly.js": <SiPlotly className="text-blue-300" />,
  "Recharts": <FaChartLine className="text-cyan-400" />,
  "Puppeteer": <SiPuppeteer className="text-green-400" />,
  "Web Scraping": <FaSearch className="text-orange-300" />,
  "PDF Generation": <FaFilePdf className="text-red-400" />,
  "Browser Automation": <FaCogs className="text-slate-300" />,
  "Vercel": <SiVercel className="text-white" />,
  "Netlify": <SiNetlify className="text-cyan-300" />,
  "GoDaddy Hosting": <FaNetworkWired className="text-green-400" />,
  "Hostinger": <FaNetworkWired className="text-violet-400" />,
  "DNS Management": <FaNetworkWired className="text-blue-400" />,
  "Domain Configuration": <FaNetworkWired className="text-orange-400" />,
  "AI-Powered Applications": <FaRobot className="text-emerald-400" />,
  "LLM Integration": <FaBrain className="text-violet-400" />,
  "Ollama": <FaBrain className="text-amber-300" />,
  "Prompt Engineering": <FaLightbulb className="text-yellow-300" />,
  "Chatbot Development": <FaComments className="text-cyan-300" />,
  "Problem Solving": <FaPuzzlePiece className="text-orange-400" />,
  "Quick Learning": <FaBolt className="text-yellow-400" />,
  "Self-Motivation": <FaRocket className="text-rose-400" />,
  "Team Collaboration": <FaUsers className="text-blue-400" />,
  "Leadership": <FaUsers className="text-indigo-400" />,
  "Communication": <FaComments className="text-teal-300" />,
  "Project Management": <FaProjectDiagram className="text-purple-400" />,
  "Agile Development": <FaProjectDiagram className="text-emerald-400" />,
  "Critical Thinking": <FaBrain className="text-rose-300" />,
  "Attention to Detail": <FaCheckCircle className="text-cyan-400" />,
  "React Native": <TbBrandReactNative className="text-cyan-400" />,
  "Advanced System Design": <FaCogs className="text-slate-300" />,
  "SaaS Architecture": <FaCloud className="text-sky-400" />,
  "Cloud Infrastructure": <FaCloud className="text-indigo-400" />,
  "AI & Machine Learning Applications": <FaBrain className="text-violet-300" />,
};

const sections = [
  {
    title: "Frontend Development",
    items: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
      "React Router", "Redux Toolkit", "Redux Persist", "Tailwind CSS", "Shadcn UI",
      "Material UI (MUI)", "Flowbite", "Responsive Web Design", "Progressive Web Apps (PWA)",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js", "Express.js", "REST API Development", "Authentication & Authorization",
      "JWT Authentication", "Passport.js", "Session Management", "Cookie-Based Authentication",
    ],
  },
  {
    title: "Database Management",
    items: [
      "MongoDB", "Mongoose", "MySQL", "Database Design", "CRUD Operations",
    ],
  },
  {
    title: "State Management & Data Fetching",
    items: [
      "Redux Toolkit", "TanStack Query (React Query)", "Context API",
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Git", "GitHub", "Postman", "Vite", "NPM", "Linux (Debian)", "VS Code",
      "Render", "Firebase",
    ],
  },
  {
    title: "UI/UX & Design",
    items: [
      "UI Development", "User Experience (UX)", "Component-Based Architecture",
      "Mobile-First Design", "Accessibility (A11Y)", "Pixel-Perfect Implementation",
    ],
  },
  {
    title: "Data Visualization",
    items: [
      "Plotly.js", "Recharts",
    ],
  },
  {
    title: "Automation & Scripting",
    items: [
      "Puppeteer", "Web Scraping", "PDF Generation", "Browser Automation",
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      "Render", "Vercel", "Netlify", "GoDaddy Hosting", "Hostinger", "DNS Management",
      "Domain Configuration",
    ],
  },
  {
    title: "AI & Emerging Technologies",
    items: [
      "AI-Powered Applications", "LLM Integration", "Ollama", "Prompt Engineering",
      "Chatbot Development",
    ],
  },
  {
    title: "Professional Skills",
    items: [
      "Problem Solving", "Quick Learning", "Self-Motivation", "Team Collaboration",
      "Leadership", "Communication", "Project Management", "Agile Development",
      "Critical Thinking", "Attention to Detail",
    ],
  },
  {
    title: "Currently Learning / Exploring",
    items: [
      "React Native", "Advanced System Design", "SaaS Architecture", "Cloud Infrastructure",
      "AI & Machine Learning Applications",
    ],
  },
];

const languages = [
  { name: "Bengali", level: "Native", pct: 100 },
  { name: "Hindi", level: "Full Professional", pct: 90 },
  { name: "English", level: "Full Professional", pct: 88 },
];

const SkillIcon = ({ name }) => iconMap[name] || <FaCode className="text-slate-400" />;

const Skills = () => {
  return (
    <section className="section">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <span className="heading-eyebrow">Skills</span>
          <h2 className="heading-xl mt-3">Tools I work with daily.</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          A pragmatic mix of frontend, backend, cloud, AI, and professional skills
          I bring to every project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sections.map((sec) => (
          <motion.div
            key={sec.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-dark p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl font-bold text-white">{sec.title}</h3>
              <span className="text-xs font-mono text-slate-500">{sec.items.length} skills</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {sec.items.map((name) => (
                <div
                  key={name}
                  className="group relative flex flex-col items-center gap-2 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    <SkillIcon name={name} />
                  </div>
                  <span className="text-[11px] text-slate-300 text-center font-medium leading-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-dark p-6 md:col-span-2 xl:col-span-3"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-xl font-bold text-white">Language Proficiency</h3>
            <span className="text-xs font-mono text-slate-500">{languages.length} languages</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((l) => (
              <div key={l.name}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-slate-200 font-semibold">{l.name}</span>
                  <span className="text-slate-500 font-mono text-xs">{l.level}</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
