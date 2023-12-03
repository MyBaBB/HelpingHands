// eslint-disable-next-line no-unused-vars
import React from 'react'
import HelpingHands from "./assets/HelpingHandsRotate.png"


const RotateHands = () => {
  return (
    <div>
       <>
  <div className='RotateHandsWrapper  fixed top-5 left-5 w-fit shadow-inner p-1 bg-white rounded-full'>
        <div className='relative     w-fit animate-spin'
               style={{ animationDuration: '9s' }}>
               <img src={HelpingHands} alt="Helping Hands" />          
        </div>
        <div id='RotateHandsWords'></div>
  </div>
   

      
    </>
    </div>
  )
}

export default RotateHands
