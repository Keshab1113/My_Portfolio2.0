import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage'
import Layout from './Layout';
import Projects from './pages/Projects/Projects';
import Resume from "./pages/Resume/Resume"
import ThreeD from './pages/ThreeD/ThreeD';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={< HomePage />} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="contact" element={<ContactPage/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="resume" element={<Resume/>} />
          </Route>
          <Route path="3D" element={<ThreeD />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
