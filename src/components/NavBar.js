import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

function NavBar() {

  const [navBtn,setNavBtn] = useState(false);

  const navlist=[
    {
        id:1,
        link:"About"
    },
    {
        id:2,
        link:"Skills"
    },
    {
        id:3,
        link:"Experience"

    },
    {
        id:4,
        link:"Contact me"
    }


]
  return (
    <div className="flex justify-between items-center w-full h-12 text-white  bg-black fixed top-0">

        <div>
        </div>

        <div>
            <ul className='hidden md:flex'>

                {navlist.map(link=>(
                <li key={link.id} className='px-10 cursor-pointer font-medium hover:text-red-700 hover:scale-125'>
                    {link.link}
                </li>
                ))}
           
            </ul>

            <div onClick={()=>setNavBtn(!navBtn)}className='cursor-pointer justify-center items-center px-10 hover:text-red-700 md:hidden'>
                {navBtn ? <FaTimes size={25}/>:<FaBars size={25}/>}
            </div>

            {navBtn && (

                <ul className='flex flex-col justify-center items-center absolute top-12 left-0 w-full h-screen bg-black'>

                {navlist.map(link=>(
                    <li key={link.id} className='text-4xl px-4 py-6 cursor-pointer'>
                        {link.link}
                    </li>
                ))}

                </ul>

            )}
            
        </div>
        
    </div>
  )
}

export default NavBar