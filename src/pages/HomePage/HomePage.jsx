import React from 'react'
import AdminDetails from '../../components/HomePage/AdminDetails'
import AdminPicture from '../../components/HomePage/AdminPicture'
import { Helmet } from "react-helmet";
import bannerVideo from "/banner.mp4";
import Header from "../../components/Header/Header"

const HomePage = () => {
  return (
    <div className='h-screen flex sm:flex-row flex-col-reverse overflow-hidden'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keshab Das - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <video
        className="h-screen object-cover w-full"
        src={bannerVideo}
        autoPlay
        loop
        muted
      />
      <Header/>
            <AdminDetails />
            <AdminPicture/>
    </div>
  )
}

export default HomePage
