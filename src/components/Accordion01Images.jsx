// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MoverPerson from "../assets/Img/MoverPersonSmallScreen.jpg"
import TwoGuysSmallScreen from "../assets/Img/TwoGuysSmallScreen.jpg"
 
import PianoSmallScreen from "../assets/Img/PianoSmallScreen.jpg"
import WarehouseWorkerSmallScreen from "../assets/Img/WarehouseWorkerSmallScreen.jpg"
import StorageSmallScreen from "../assets/Img/StorageSmallScreen.jpg"







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
        <div className='OurPhotosAccordion1  relative  justify-center content-center mx-auto md:hidden bg-[#41301b]  rounded-3xl w-full     cursor-pointer hover:scale-105 ease-in-out duration-300'>
        
          <div  className='flex justify-center content-center mx-auto '>
            <button  className='text-amber-100  text-base sm:text-2xl  font-extrabold'
                       style={{ textShadow: '1px 1px 2px black' }}>
            <span className='relative text-base md:text-3xl  ' 
             style={{ textShadow: '-1px -1px 2px black' }}></span>
 Our Photos
            </button>
          </div>
          {isOpen &&
            <>
            <div   className=' flex justify-center content-center  '>
            <div className='MoversSmallScreen  md:hidden relative flex w-fit mt-[.25rem] block'>
              <img src={TwoGuysSmallScreen} alt="Two Guys" className=' rounded-[18px] z-1' />
            </div>
          </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem]
                 block'>
                <img src={MoverPerson} alt="Mover Person" className=' rounded-[18px] z-1' />
              </div>
            </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={PianoSmallScreen} alt="Piano Small Screen" className=' rounded-[18px] z-1' />
              </div>
            </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={WarehouseWorkerSmallScreen} alt="Warehouse Worker SmallScreen" className=' rounded-[18px]  z-1' />
              </div>
            </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem]  block'>
                <img src={StorageSmallScreen} alt="Storage Small Screen" className=' rounded-[18px] z-1' />
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

