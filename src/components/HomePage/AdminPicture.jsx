import React from 'react'
import Lottie from "lottie-react";
import bannerAnime2 from "../../assets/bannerAnime2.json";

const AdminPicture = () => {
  return (
    <div className='absolute sm:w-[50%] w-full sm:h-[92vh] h-[50%] flex flex-col justify-center items-start sm:p-[100px] sm:right-0 top-0 sm:mt-[8vh]'>
      <Lottie animationData={bannerAnime2} loop={true} />
    </div>
  )
}

export default AdminPicture
