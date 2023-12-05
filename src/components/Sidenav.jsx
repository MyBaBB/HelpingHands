/* eslint-disable no-unused-vars */
 
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr'; 

const Sidenav = () => {

   const [nav, setNav] = useState(false)
    
   const handleNav = () => {
          setNav(!nav);
         
    };

  return (
    <div>
   <div className='outersideContainer '> 
    <AiOutlineMenu  size={50} onClick={handleNav} className='fixed top-4 sm:top-[1.5rem]  right-5 sm:right-4  z-[99] md:hidden
       
    ' style={{color:"#403121"}}  />
     {
      nav ? (
        <div className='fixed  top-0 left-0 right-0 bottom-0 w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 '>

          <a onClick={handleNav} href="#main" className='w-[65%]
           mt-[5rem] md:mt-22  flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}  />
            <span className='pl-4 '> Home</span>
          </a>
          <a onClick={handleNav} href="#work" className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <GrProjects size={20}  />
            <span className='pl-4'> Work</span>
          </a>
          <a onClick={handleNav} href="#projects" className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineProject size={20}  />
            <span className='pl-4'> Projects</span>
          </a>

          
          
          <a onClick={handleNav} href="#contact" className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20}  />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
        )
        : (
        '' 
        )}
     <div className='upperNav md:block hidden fixed top-[25%] z-10 
          ml-[-1rem]  lg:ml-[-1rem] xl:ml-[-4rem]  md:mt-32 lg:mt-38
     '>
      <div className='flex flex-col '>
        <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <AiOutlineHome size={20} />
        </a>
        <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <GrProjects size={20} />
        </a>
        <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <AiOutlineProject size={20} />
        </a>
       {/*  <a href="#" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <BsPerson size={20} />
        </a> */}
        <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <AiOutlineMail size={20} />
         
        </a>
      </div>
     </div>
     </div> 
    </div>    

          
    
        
     
  );
};

export default Sidenav;