// eslint-disable-next-line no-unused-vars
import React from 'react'
import HelpingHands from "../assets/Img/HelpingHandsRotate.png"
import Movers from "../assets/Img/Movers.jpg"

const RotateHands = () => {
  return (
    <div>
       <>

<div className='bodyWrapper'>
<div className='HeaderWrapper '>


{/* */}
 

      <a href="https://www.facebook.com/Helpinghandservices626/about">

     

      <div className='RotateHandsWrapper fixed   flex w-fit
       p-1 shadow-inner  bg-white rounded-full
        
       -top-[2.5rem] xs:-top-[2.5rem] sm:-top-[1.95rem]  md:-top-[1.35rem] lg:-top-[.8rem]
       -left-[2.5rem] sm:-left-[1.75rem] md:-left-[1.35rem] lg:-left-[.7rem]  >
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
           
           translate-x-[10%] xs:translate-x-[0%] lg:translate-x-[0%] xl:translate-x-[0%]
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
             Helping Hand <br /> Community Services
       </p>
    </div> 
  </div>
  <div className='Movers mt-[11rem] xs:mt-[13rem] sm:mt=[19rem] lg:my-[16rem]'>
    <img src={Movers} alt="Movers" className='MoversImg rounded-[18px] z-10' />
 </div>  
  </>
</div>
  )
}

export default RotateHands



