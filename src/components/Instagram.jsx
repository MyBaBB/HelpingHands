// eslint-disable-next-line no-unused-vars
import React from 'react'
import InstagramReels2 from "../assets/Img/InstagramReels2.jpg"
import FacebookMover from "../assets/Img/FacebookMover.jpg"
import OldPhoneImg from "../assets/Img/OldPhone.jpg"

const Instagram = () => {
  return (
    <div>
      <>
  
      <div className='OurReelsBoxTruckWrapper relative justify-evenly  flex block      mx-auto mt-[6.75rem] md:mt-[9rem]'>
      <a href="https://www.instagram.com/helpinghandservices626">
         <div className='OurReelsBoxTruck w-[60px] xxs:[70]px xs:w-[80px] relative  content-center border-2 border-[#614829] flex w-fit rounded-[14px]   '>
             <img src={InstagramReels2} alt="Instagram Movers" 
             className='rounded-xl' />
         </div>
         </a>
     
      <button onClick={() => window.location.href = 'tel:626-371-4331'}>
            <div className='OldPhoneImage w-[60px] xxs:[70]px xs:w-[80px] relative  content-center border-2 border-[#614829] flex w-fit rounded-[14px]   '>
               <img src={OldPhoneImg} alt="OldPhoneImg" className='rounded-xl' />
        </div>
     </button>




      <a href="https://www.facebook.com/Helpinghandservices626">
         <div className='OurReelsBoxTruck w-[60px] xxs:[70]px xs:w-[80px] relative  border-2 border-[#614829] flex w-fit rounded-[14px]   '>
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
