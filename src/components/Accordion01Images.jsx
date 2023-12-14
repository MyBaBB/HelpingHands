// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MoverPerson from "../assets/Img/MoverPersonSmallScreen.webp"
import TwoGuysSmallScreen from "../assets/Img/TwoGuysSmallScreen.webp"
 
import PianoSmallScreen from "../assets/Img/PianoSmallScreen.webp"
import WarehouseWorkerSmallScreen from "../assets/Img/WarehouseWorkerSmallScreen.webp"
import StorageSmallScreen from "../assets/Img/StorageSmallScreen.webp"







const Accordion01 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion01Images = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className='content-center w-full mx-auto'>
        <>
        
      <div onClick={toggleAccordion01Images} 
        className={`openMenu relative flex justify-center items-center
         mx-auto w-[80%] h-full  
      }`}
    >
        <div className='OurPhotosAccordion1  relative  justify-center content-center mx-auto md:hidden bg-[#41301b]  rounded-3xl w-full  cursor-pointer'>
        
          <div  className='relative flex justify-center content-center mx-auto '>
            <button  className='text-amber-100  text-base sm:text-2xl  font-extrabold'
                       style={{ textShadow: '1px 1px 2px black' }}>
            <div className='absolute left-[-5px]  top-[-4px] sm:top-[0px]    w-8  h-8  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown shadow-sm  shadow-black  rounded-full pt-[7px] text-4xl ' 
             style={{ textShadow: '0px -1px 2px black' }}>
               <span className='triangle'></span></div>
 Photos
            </button>
          </div>
          {isOpen &&
            <>
            <div   className=' flex justify-center content-center  '>
            <div className='MoversSmallScreen  md:hidden relative flex w-fit mt-[.25rem] block'>
              <img src={TwoGuysSmallScreen} alt="Two Guys" width={480} height={480} className=' rounded-[18px] z-1'
                    loading="lazy" />
            </div>
          </div>

            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem]
                 block'>
                <img src={MoverPerson} alt="Mover Person" width={480} height={480}  className=' rounded-[18px] z-1' 
                    loading="lazy"/>
              </div>
            </div>

            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={PianoSmallScreen} alt="Piano Small Screen" width={480} height={480}   className=' rounded-[18px] z-1'loading="lazy" />
              </div>
            </div>
            
            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={WarehouseWorkerSmallScreen} alt="Warehouse Worker SmallScreen"
                width={480} height={480}   className=' rounded-[18px]  z-1'loading="lazy" />
              </div>
            </div>
            
            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem]  block'>
                <img src={StorageSmallScreen} alt="Storage Small Screen" width={480} height={480} 
                 className=' rounded-[18px] z-1'loading="lazy" />
              </div>
            </div>
  
   </>
            
            
            }
        </div>
      </div>
      
      </>
      </div>
  );
};

export default Accordion01

