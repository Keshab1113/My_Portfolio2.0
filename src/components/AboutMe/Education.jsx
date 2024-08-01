import React from 'react'

const Education = () => {
  return (
      <div className=' w-full h-full sm:px-[200px] px-4 text-center bg-black py-10 imgbag'>
          <h1 className=' text-5xl text-white font-bold'>Education</h1>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
              <li>
                  <div className="timeline-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic text-white">2021-2025</time>
                      <div className="text-lg font-black text-white">B.Tech In Information Technology</div>
                      I appeared for WBJEE in year 2021 and obtained 7229 rank, then i appeared for online counselling of WBJEE and got an opportunity to study in Information Technology Department in Jalpaiguri Government Engineering College, autonomous.
                  </div>
                  <hr />
              </li>
              <li>
                  <hr />
                  <div className="timeline-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end mb-10 flex flex-col  sm:items-start">
                      <time className="font-mono italic text-white float-left">2019-2021</time>
                      <div className="text-lg font-black text-white float-left">Higher Secondary</div>
                      <h1 className=' sm:text-left'>
                          I passed higher secondary from Dainhat High School affiliated to West Bengal Council Of Higher Secondary Examination with 76 percentage in 2021.</h1>
                  </div>
                  <hr />
              </li>
              
              <li>
                  <hr />
                  <div className="timeline-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic text-white">2014-2019</time>
                      <div className="text-lg font-black text-white">Madhyamik Examination</div>
                      I passed secondary examination from Okersha High School affiliated to West Bengal Board of Secondary Examination with 69 percentage in 2019.
                  </div>
              </li>
              
          </ul>
    </div>
  )
}

export default Education
