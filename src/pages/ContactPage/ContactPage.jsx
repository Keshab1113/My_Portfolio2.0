import React, { useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import { FaLocationDot, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_b04kavc', 'template_hzjp8vw', form.current, {
        publicKey: 'sqSISS2GbL7XteKTU',
      })
      .then(
        () => {
          alert('Message Send Sucessfull');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className=' pt-14 sm:px-12'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keshab Das - Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className=' text-4xl font-bold text-white px-12'>Contact</h1>
      <h2 className='text-xl font-semibold px-12'>Get in touch</h2>
      <h3 className=' font-semibold px-12'>I am available for any freelance or internship or full-time positions.</h3>
      <div className='  w-full h-full flex justify-center sm:px-10 mt-6'>
        
        <div className=' bg-[rgb(21,16,48)] border-2 border-blue-700 rounded-2xl sm:w-[55%] w-[100%] h-[27rem] '>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-black-100  p-5 rounded-2xl flex flex-col gap-8 "
          >
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                autoComplete="off"
                required
                className="bg-[rgb(29,22,65)] py-4 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full shadow-inner"
              />
            </label>
            <label htmlFor="email">
              <input
                type="text"
                placeholder="Your Email"
                name="user_email"
                autoComplete="off"
                required
                className="bg-[rgb(29,22,65)] py-4 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
            <label htmlFor="message">
              <textarea
                type="text"
                placeholder="Your Message"
                name="message"
                autoComplete="off"
                required
                className="bg-[rgb(29,22,65)] py-4 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full min-h-[120px] max-h-[140px]"
              />
            </label>
            <button className=' border w-20 py-2 rounded-lg bg-blue-700 text-blue-100 font-bold' type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage



