// eslint-disable-next-line no-unused-vars
import React from 'react'
import InstagramReels2 from "../assets/Img/InstagramReels2.webp"
import FacebookMover from "../assets/Img/FacebookMover.webp"
import OldPhoneImg from "../assets/Img/OldPhone.webp"

const Instagram = () => {
  return (
    <div>
      <>
  
      <div className='OurReelsBoxTruckWrapper relative justify-evenly  flex block  mx-auto mt-[6.75rem] md:mt-[9rem]'>
      <a href="https://empty">
         <div className='OurReelsBoxTruck w-[60px] xxs:w-[70]px xs:w-[80px]  relative  content-center border-2 border-[#614829] flex w-fit rounded-[14px]  '>
             <img src={InstagramReels2} alt="Instagram Movers" 
             className='rounded-xl' />
         </div>
      </a>
     
      <button onClick={() => window.location.href = 'tel:626-371-4331'}>
            <div className='OldPhoneImage md:hidden w-[60px] xxs:w-[70]px xs:w-[80px] relative  content-center border-2 border-[#614829] flex w-fit   rounded-[14px]   '>
               <img src={OldPhoneImg} alt="OldPhoneImg" className='rounded-xl' />
            </div>
      </button>

<div className='relative justify-center content-center mx-auto hidden md:block'>
 <p className='text-white font-serif text-3xl mt-2  '><u>626-371-4331</u></p>
 </div>

      <a href="https://empty">
         <div className='OurReelsBoxMover w-[60px] xxs:w-[70]px xs:w-[80px]  relative  border-2 border-[#614829] flex w-fit rounded-[14px]   '>
             <img src={FacebookMover} alt="Facebook Mover" 
             className='rounded-xl' />
         </div>
         </a>







      </div>
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      </>
    </div>
  )
}

export default Instagram
