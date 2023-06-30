import React from 'react'
import Java from './Skills_Icons/java.png' 
import Spring from './Skills_Icons/spring.png' 
import Javascript from './Skills_Icons/javascript.png' 
import Cplusplus from './Skills_Icons/c++.png' 
import SQL from './Skills_Icons/sql.png' 
import ReactJS from './Skills_Icons/react.png' 
import HtmlLogo from './Skills_Icons/html5.png' 
import CSSLogo from './Skills_Icons/css.png' 
import Tailwind from './Skills_Icons/tailwind.png' 
import Bootstrap from './Skills_Icons/bootstrap.png' 


function Skills() {


    const list=[
        {
            id:1,
            link:Java,
            name:"Java"
        },
        {
            id:2,
            link:Spring,
            name:'Spring'
        },
        {
            id:3,
            link:Javascript,
            name:'Javascript'
    
        },
        {
            id:4,
            link:Cplusplus,
            name:"C++"
        },
        {
            id:5,
            link:SQL,
            name:"SQL"
        },
        {
            id:6,
            link:ReactJS,
            name:"React.JS"
        },
        {
            id:7,
            link:HtmlLogo,
            name:"HTML5"
    
        },
        {
            id:8,
            link:CSSLogo,
            name:"CSS3"
        },
        {
            id:9,
            link:Tailwind,
            name:"Tailwind"
        },
        {
            id:10,
            link:Bootstrap,
            name:"Bootstrap"
        }
    
    
    ]
  return (
    <div className='w-full h-screen bg-black flex flex-col justify-center'>

        <div>
            <h1 className='font-helloFont text-5xl text-red-700 ml-4'>Skills</h1>
            <div className='h-1 mt-4 bg-red-700 w-full'>
            </div>
        </div>

        <div className='grid grid-cols-4 pl-10 pr-10 gap-10 mt-20 md:mt-12 lg:mt-20 w-full lg:pl-20 lg:grid-cols-5'>

            { list.map( data=>(
            <div key={data.id} className='w-fit hover:scale-110'>
                <img src={data.link} width={100} className='h-16 md:h-20 lg:h-20' alt=''/>
                <h1 className='text-white flex justify-center mt-4 font-descFont text-xl lg:text-2xl'>{data.name}</h1>
            </div>
            )
            )
            }
            {/* <div><img src={Spring} height={100} width={100} alt=''/></div>
            <div><img src={Javascript} height={100} width={100} alt=''/></div>
            <div><img src={Cplusplus} height={100} width={100} alt=''/></div>
            <div><img src={SQL} height={100} width={100} alt=''/></div>
            <div><img src={ReactJS} height={100} width={100} alt=''/></div>
            <div><img src={HtmlLogo} height={100} width={100} alt=''/></div>
            <div><img src={CSSLogo} height={100} width={100} alt=''/></div>
            <div><img src={Tailwind} height={100} width={100} alt=''/></div>
            <div><img src={Bootstrap} height={100} width={100} alt=''/></div> */}
           
            
          

        </div>
    </div>
  )
}

export default Skills