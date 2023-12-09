// eslint-disable-next-line no-unused-vars
import React from 'react'
import HelpingHands from "../assets/Img/HelpingHandsRotate.png"
import HelpingHands2 from "../assets/Img/HelpingHandsRotate2.png"
import Movers from "../assets/Img/Movers.jpg"
import Movericon2 from "../assets/Img/Movericon2.png"
import TruckSmallScreen from "../assets/Img/TruckSmallScreen.jpg"
import Accordion01Images from './Accordion01Images.jsx'
import Accordion02About from './Accordion02About.jsx'
import Accordion03Reviews from './Accordion03Reviews.jsx'
 

const MainHands  = () => {
  return (
    <div>
       <>

<div className='bodyWrapper'>
  <div className='HeaderWrapper'>
 
           {/* the Animated Helping Hands */}
      <a href="https://www.facebook.com/Helpinghandservices626/about">
    <div className='RotateHandsWrapper     
           bg-white
       -top-[2.5rem] xs:-top-[2.5rem] sm:-top-[1.95rem]  md:-top-[1.35rem] lg:-top-[.8rem]
       -left-[2rem] xxs:-left-2rem sm:-left-[1.75rem] md:-left-[1.35rem] lg:-left-[.7rem]
        
       >
          scale-[35%] sm:scale-[50%] md:scale-[60%] lg:scale-[70%] '>
               <div className=' relative  w-fit animate-spin'
                style={{ animationDuration: '9s' }}>
               <img id='RotateHelpingHands' src={HelpingHands2} alt="Helping Hands" />
               </div>
         
               <div>
               <img id='RotateHelpingHands2' src={HelpingHands} alt="Helping Hands" />
               </div>            
               
         </div>
         {/* <div id='RotateHandsWords'></div> */}

  
      </a> {/*  the Animated Helping Hands */}

           {/*  Helping Hand Heading 1 sm: hidden  */}
       <p className='HelpingHandHeading1  text-amber-100 
           xxs:hidden  sm:hidden md:block lg:block xl:block hidden  
           
              md:text-[1.75rem] lg:text-[1.75rem] xl:text-[2rem]
            
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
             Helping Hand  Community Services
       </p>{/*  Helping Hand Heading 1 sm: hidden  */}

           {/*  Helping Hand Heading 2 lg: hidden */}
       <p className='HelpingHandHeading2 text-amber-100    
             md:hidden lg:hidden xl:hidden   
             text-[.6rem] xxs:text-[.85rem] xs:text-[1.2rem] sm:text-[1.5rem] 
              md:text-[1.35rem] lg:text-[1.75rem] xl:text-[2rem]
              mt-[-12px] sm:mt-[-10px]
             
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
             Helping Hand <br /> Community Services
       </p>{/* Helping Hand Heading 2 lg: hidden  */}

            {/* Mover Icon */}
       <div className='MovericonWrapper fixed flex w-fit
           p-1 shadow-inner  bg-white rounded-full  hidden md:block
               md:-top-[1.65rem] lg:-top-[1.5rem]
           -right-[2rem] xxs:-right-2rem sm:-right-[1.75rem] md:-right-[1.55rem] lg:-right-[.7rem]  >
          scale-[35%] sm:scale-[50%] md:scale-[60%] lg:scale-[70%] '>
         <div className=' relative w-[160px]'>
               <img src={Movericon2} alt="Mover Icon" />          
        </div>
      </div>{/* Mover Icon */}

    </div>
 </div>     {/*above is the HeaderWrapper */} 
           
   
  
<div className='Accordian2Wrapper relative  block  px-[10px]   sm:px-[.5rem]
        mt-[4rem]   md:mt-[6.5rem] text-green-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}> 
          
          

        <h1 id='HelpingHandMovers_H1' className='WhiteSpaceNowrap  text-amber-100 hidden md:block pb-4 mb-0  sm:mb-4 mt-8'> Helping Hand Movers</h1>

            {/* TruckSmallScreen */}
         <div className='flex justify-center content-center mb-3'>
         <div className='Movers md:hidden relative flex w-fit  mt-1.5 md:mt-[1.2rem] block  ]'>
       <img src={TruckSmallScreen} alt="Two Guys" className=' rounded-[18px] z-1' />
         </div>      
         </div>
            {/* TruckSmallScreen */}

            {/*  TopIntro */}

            <div className='AboutUsParagraphWrapper relative flex justify-center content-center mx-auto   hidden md:block'>

        <p id='AboutUsh2' className='AboutUsh2 text-[1.45rem]
           lg:text-3xl      
           ' >
           
         
         
       </p>
      
   <p className='AboutUsParagraphMdBlock text-lg lg:text-2xl  p-4 
    '>
   “We specialize in moving and offer two trucks, a 16ft and a 26ft, both fully insured.🔸Our busiest seasons for Moving are during Summer and Christmas, but we are here to help you all year round.🔸We have a talented crew, which includes a Licensed Electrician.🔸We also offer Property Management Services that include Painting, Custom Woodworking, General Construction and Hauling.🔸We take pride in our work and enjoy helping the folks in our community.”
   </p>
   </div>



            {/*  TopIntro */}

<div className='relative flex justify-center content-center mx-auto '> 
            <div id='OurPhotos' className='relative scroll-mt-[-4rem]'>
            {/* Several images in one Hidden for large screens. */}
       <div  className='Movers -scroll-mt-80 relative flex w-fit mt-[1.5rem]
        hidden md:block min-w-[240px]      
          '>
       <img src={Movers} alt="Movers" className='MoversImg rounded-[18px] z-0' />
       </div>
  </div>
 </div>
            {/* Several images in one Hidden for large screens. */} 
           
                              {/* Bottom Paragraph */}
    <div className='relative flex justify-center content-center
             mx-auto w-[100%] mt-4 '>
          <article className='TopArticleWrapper'>
            <h2 className='TopIntro text-xl  md:text-2xl pt-2 md:px-[2rem] mb-2 text-amber-200'> We are the perfect choice for your moving needs.
             </h2>
             <Accordion02About />
                <p className='text-2xl  md:px-[1rem] p-2'>
           With over 10 years of experience, We guarantee a move that exceeds your expectations. Our team is dedicated to providing exceptional customer service  and we always strive for
           <span className='whitespace-nowrap'> five-star rating </span>
           <span className='text-base'><Accordion03Reviews /> ⭐⭐⭐⭐⭐</span>
                </p>
                
                <Accordion01Images/>
         </article>
</div>

      

   
 

 





 

</div>
  </>
</div>
  )
}

export default MainHands 



