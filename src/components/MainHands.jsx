// eslint-disable-next-line no-unused-vars
import React from 'react'
import HelpingHands from "../assets/Img/HelpingHandsRotate.png"
import Movers from "../assets/Img/Movers.jpg"
import Movericon2 from "../assets/Img/Movericon2.png"
import MoverPerson from "../assets/Img/MoverPersonSmallScreen.jpg"
import TwoGuysSmallScreen from "../assets/Img/TwoGuysSmallScreen.jpg"







const RotateHands = () => {
  return (
    <div>
       <>

<div className='bodyWrapper -mr-3'>
<div className='HeaderWrapper '>


 
 

      <a href="https://www.facebook.com/Helpinghandservices626/about">

     

      <div className='RotateHandsWrapper fixed   flex w-fit
       p-1 shadow-inner  bg-white rounded-full
        
       -top-[2.5rem] xs:-top-[2.5rem] sm:-top-[1.95rem]  md:-top-[1.35rem] lg:-top-[.8rem]
       -left-[2rem] xxs:-left-2rem sm:-left-[1.75rem] md:-left-[1.35rem] lg:-left-[.7rem]  >
          scale-[35%] sm:scale-[50%] md:scale-[60%] lg:scale-[70%] '>
         <div className=' relative     w-fit animate-spin'
               style={{ animationDuration: '9s' }}>
               <img src={HelpingHands} alt="Helping Hands" />          
         </div>
      <div id='RotateHandsWords'></div>
      
    </div>
  </a>
   
      <p className='HelpingHandHeading1  text-green-50/[.85] 
           xxs:hidden  sm:hidden md:block lg:block xl:block hidden  
           text-[.50rem] xxs:text-[.575rem] xs:text-[.7rem] sm:text-[1rem] 
              md:text-[1.35rem] lg:text-[1.75rem] xl:text-[2rem]
           
           translate-x-[10%] xs:translate-x-[0%] lg:translate-x-[0%] xl:translate-x-[0%]
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
             Helping Hand  Community Services
       </p>
       <p className='HelpingHandHeading2 text-green-50/[.85]   
             md:hidden lg:hidden xl:hidden   
             text-[.50rem] xxs:text-[.575rem] xs:text-[.7rem] sm:text-[1rem] 
              md:text-[1.35rem] lg:text-[1.75rem] xl:text-[2rem]
           
           
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
             Helping Hand <br /> Community Services
       </p>

       <div className='MovericonWrapper fixed flex w-fit
           p-1 shadow-inner  bg-white rounded-full  hidden md:block
               md:-top-[1.55rem] lg:-top-[1.15rem]
           -right-[2rem] xxs:-right-2rem sm:-right-[1.75rem] md:-right-[1.35rem] lg:-right-[.7rem]  >
          scale-[35%] sm:scale-[50%] md:scale-[60%] lg:scale-[70%] '>
         <div className=' relative w-[160px]'>
               <img src={Movericon2} alt="Mover Icon" />          
        </div>
      </div>
    </div>
 </div>
 
   
           
   

         
  
<div className='relative  block px-[4rem]
       mt-[6.5rem] text-green-50/[.85]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}> 
       
<div className='flex justify-center content-center'>
         <div className='Movers md:hidden relative flex w-fit mt-[1.5rem] block'>
       <img src={TwoGuysSmallScreen} alt="Two Guys" className=' rounded-[18px] z-1' />
         </div>      
</div>






        <h1 id='HelpingHandMovers_H1' className='WhiteSpaceNowrap mb-2'> Helping Hand Movers</h1> <p className='text-2xl '>    We are the perfect choice for your moving needs</p> <p className='text-2xl p-4'> With over 10 years of experience, we guarantee a move that exceeds your expectations. Our team is dedicated to providing exceptional customer service  and we always strives for <span className='whitespace-nowrap'> five-star rating </span><span className='text-base'> ⭐⭐⭐⭐⭐</span></p>
        
        <div className='Movers relative flex w-fit mt-[1.5rem] block'>
       <img src={MoverPerson} alt="Mover Person" className='MoversImg rounded-[18px] z-1' />
        </div>
        <div className='Movers relative flex w-fit mt-[1.5rem] block'>
       <img src={MoverPerson} alt="Mover Person" className='MoversImg rounded-[18px] z-1' />
        </div>
        <div className='Movers relative flex w-fit mt-[1.5rem] block'>
       <img src={MoverPerson} alt="Mover Person" className='MoversImg rounded-[18px] z-1' />
        </div>
        <div className='Movers relative flex w-fit mt-[1.5rem] block'>
       <img src={MoverPerson} alt="Mover Person" className='MoversImg rounded-[18px] z-1' />
        </div>
        <div className='Movers relative flex w-fit mt-[1.5rem] block'>
       <img src={MoverPerson} alt="Mover Person" className='MoversImg rounded-[18px] z-1' />
        </div>
      

            {/* this is the Hidden Image from photoshop, 
               Several images in one Hidden for large screens. */}
     <div className='Movers relative flex w-fit mt-[1.5rem]
        hidden md:block       
        md:ml-14 lg:ml-16 xl:ml-20'>
       <img src={Movers} alt="Movers" className='MoversImg rounded-[18px] z-0' />
     </div>
       {/* xxxxxxxxxxxxxx  above Hidden image  xxxxxxxxxxxxxxx */}

</div>
  </>
</div>
  )
}

export default RotateHands



