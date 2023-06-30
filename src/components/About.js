import React from 'react'
import Resume from './Shivang_Resume.pdf'


function About() {
  return (
    <div className='w-full h-screen bg-black flex flex-col justify-center'>

        <div>
            <h1 className='font-helloFont text-5xl text-red-700 ml-4'>About</h1>
            <div className='h-1 mt-4 bg-red-700 w-full'>

            </div>
        </div>

        <div>
            <p className='text-white mt-8 ml-4 font-descFont text-xl md:text-2xl mr-4 lg:text-3xl'>
            I am a software developer with one year of experience in major industrial full-stack technologies. 
            I have a strong foundation in HTML, CSS, React.js, JavaScript, Core Java, and the Spring framework, including Spring Core, 
            Spring MVC, and Spring Boot. My expertise spans both front-end and back-end development, allowing me to create captivating 
            user interfaces using React.js and build robust and scalable back-end systems using Core Java and Spring. 
            </p>
        </div>

        <div className='ml-4 flex justify-between mt-10 lg:justify-normal lg:mr-4 '>
            <div className='lg:flex'>
                <div className='lg:ml-32'>
                <h1 className='text-red-700 font-helloFont text-lg md:text-xl lg:text-2xl'>Education</h1>
                <h2 className='text-white font-descFont md:text-lg lg:text-xl'>B.Tech in Computer Science</h2>
                </div>

                <div className='lg:ml-32'>
                <h1 className='text-red-700 font-helloFont mt-4 lg:mt-0 text-lg md:text-xl lg:text-2xl'>Address</h1>
                <h2 className='text-white font-descFont md:text-lg lg:text-xl'>Pinjore, Haryana 134102</h2>
                </div>

            </div>
            <div className='lg:flex'>
                <div className='lg:ml-32'>
                <h1 className='text-red-700 font-helloFont text-lg md:text-xl lg:text-2xl'>Phone</h1>
                <h2 className='text-white font-descFont md:text-lg lg:text-xl'>+91 8708028407</h2>
                </div>

                <div className='lg:ml-32'>
                <h1 className='text-red-700 font-helloFont mt-4 lg:mt-0 text-lg md:text-xl lg:text-2xl'>Email</h1>
                <h2 className='text-white font-descFont md:text-lg lg:text-xl'>shivang0107@gmail.com</h2>
                </div>
            </div>

        </div>

        <div className=' flex justify-center md:mt-10'>
        <a href={Resume} download="Shivang_Resume" target="_blank" rel="noreferrer">
            <button className='bg-red-700 mt-4 h-10 w-60 rounded-xl  text-white pt-2 pb-2 pl-4 pr-4 font-descFont'>Download Resume</button>
        </a>
        </div>

    </div>
  )
}

export default About