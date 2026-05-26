import React from 'react'
import profile from '../assets/profile.jpeg'

function Hero() {
  return (
    <div className='flex bg-white p-12 m-12 justify-between'>
        <div className="about-text flex flex-col gap-y-5">
            <h1 className='text-5xl text-blue-900'>Hemanshi Ghoghari</h1>
            <h2 className='text-2xl text-gray-900'>A Full Stack Developer and Designer based in India
            </h2>
            <p className='text-gray-600'>Full-stack developer with a passion for turning code into seamless <br></br>user experiences!</p>
           <div> <button className='rounded-full border-2 px-6 py-3 border-gray-600 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-none'>Download Cv</button></div>
        </div>
        <div className="about-img ">
             <img src={profile} alt=""  className='rounded-full h-70 w-70' />
        </div>
    </div>
  )
}

export default Hero