import React, { useState } from 'react'
import avatar from './mypicAR.png'
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillGithub} from "react-icons/ai";

function Home() {

  const [changeavatar,setchangeavatar]=useState(false);
  return (
    <div className='flex flex-col md:flex-row-reverse items-center justify-center mx-auto bg-black w-full h-screen text-white' >

      <div>
     
      <img onMouseOver={()=>{setchangeavatar(!changeavatar)}} className='w-80 h-80 md:w-96 md:h-96' src={avatar} alt='Fail'/>

      </div>
      <div>
     

      <h1 className='font-helloFont text-5xl lg:text-7xl'>Hi There,</h1>
      <h1 className='font-helloFont text-5xl lg:text-7xl flex'>I'm <p className='text-red-600 ml-2'>Shivang Sharma</p></h1>
      <h1 className='text-white text-4xl  lg:text-6xl font-helloFont flex'>Full Stack Developer</h1>

      <div className='flex'>
      <a href='https://www.facebook.com/Shivangs177/' target="_blank" rel="noreferrer"><AiFillFacebook size={40} className='mr-4 cursor-pointer hover:scale-125 hover:text-blue-700'/></a>
      <a href='https://www.instagram.com/shivangs177/' target="_blank" rel="noreferrer"><AiFillInstagram size={40} className='mr-4 cursor-pointer hover:scale-125 hover:text-pink-800'/></a>
      <a href='https://www.linkedin.com/in/shivang-sharma-7067321a7/' target="_blank" rel="noreferrer"><AiFillLinkedin size={40} className='mr-4 cursor-pointer hover:scale-125 hover:text-blue-700'/></a>
      <a href='https://github.com/Shivang0107' target="_blank" rel="noreferrer"><AiFillGithub size={40} className='mr-4 cursor-pointer hover:scale-125'/></a>
      </div>

      <button className='bg-red-700 mt-4 flex h-14 rounded-xl pt-4 pb-4 pl-4 pr-4 font-helloFont'>About me</button>

      </div>

      
       

      
    </div>
  )
}

export default Home