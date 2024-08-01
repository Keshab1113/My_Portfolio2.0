import React from 'react'
import { Helmet } from "react-helmet";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import "@react-pdf-viewer/core/lib/styles/index.css";
import keshab from "/keshab.pdf"
import { FaDownload } from "react-icons/fa6";

const Resume = () => {
  const pdfUrlViewer = keshab;
  
  return (
      <div className=''>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Keshab Das - Resume</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
        {/* pdf viewer */}
      <div className=" pt-20 bg-[#1a1a1a] py-10 flex flex-col-reverse justify-center items-center">
        <button className="btn duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] border-none text-white font-bold hover:scale-105 w-56 mt-5"><FaDownload />DOWNLOAD RESUME</button>
        <div className=' bg-white h-screen w-[95%] overflow-scroll'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer theme="dark" defaultScale={1.3} fileUrl={pdfUrlViewer}/>
        </Worker>
        </div>
        <div className=' text-left mt-10 mb-5'>
          <h1 className='text-5xl font-bold text-white px-4'>Here is my Resume</h1>
        </div>
        </div>
    </div>
  )
}

export default Resume
