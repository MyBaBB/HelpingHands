// eslint-disable-next-line no-unused-vars
import React from 'react'
import HelpingHands from "./assets/HelpingHandsRotate.png"


const RotateHands = () => {
  return (
    <div>
       <>


<div className='HeaderWrapper'>

      <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2FHelpinghandservices626&e=AT3FFnsR3B9j02j9ISydIny34ZuiqWVWWzyCorZbMwU5lnCNc2CyJY2FdkCTf0TEqDJdQIlzcosyx_9n_X0OPfHnhQkLKI1Rili5leE">



      <div className='RotateHandsWrapper  fixed w-fit
       p-1 shadow-inner  bg-white rounded-full
          -top-4 xs:top-1 sm:top-0  md:top-1 lg:top-7
          -left-4 sm:left-2 md:left-4 lg:left-7 
          scale-50 sm:scale-60 md:scale-75 lg:scale-100 '>
         <div className='relative     w-fit animate-spin'
               style={{ animationDuration: '9s' }}>
               <img src={HelpingHands} alt="Helping Hands" />          
         </div>
      <div id='RotateHandsWords'></div>
      
    </div>
  </a> 
       <p className='HelpingHandHeading    
           text-xs xxs:text-sm xs:text-2xl sm:text-[1.6rem] md:text-4xl lg:text-6xl 
          translate-x-[33%] xs:translate-x-[20%] lg:translate-x-[10%] xl:translate-x-[0%]
         '>
             Helping Hand <br /> Community Services
       </p>
    </div>   
  </>
</div>
  )
}

export default RotateHands
