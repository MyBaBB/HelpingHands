// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MoverPerson from "../assets/Img/MoverPersonSmallScreen.jpg"
import TwoGuysSmallScreen from "../assets/Img/TwoGuysSmallScreen.jpg"
 
import PianoSmallScreen from "../assets/Img/PianoSmallScreen.jpg"
import WarehouseWorkerSmallScreen from "../assets/Img/WarehouseWorkerSmallScreen.jpg"
import StorageSmallScreen from "../assets/Img/StorageSmallScreen.jpg"







const Accordian01 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion01 = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div>
        <> 
      <div onClick={toggleAccordion01} 
      className={`openMenu relative flex justify-center items-center w-full h-full my-10 
      }`}
    >
        <div className=' md:hidden bg-black  rounded-3xl w-full p-1 m-1 text-left shadow-lg shadow-gray-700
        cursor-pointer hover:scale-105 ease-in-out duration-300'>
        
          <div className='flex justify-center'>
            <button  className='text-[#59acf9]  text-base sm:text-2xl p-1 font-extrabold'
                       style={{ textShadow: '1px 1px 2px black' }}>
            <span className='absolute left-4 rotate-180 text-base md:text-3xl  ' 
             style={{ textShadow: '-1px -1px 2px black' }}></span>
 Our Photos
            </button>
          </div>
          {isOpen &&
            <><div className='flex justify-center content-center '>
            <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[.25rem] block'>
              <img src={TwoGuysSmallScreen} alt="Two Guys" className=' rounded-[18px] z-1' />
            </div>
          </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={MoverPerson} alt="Mover Person" className=' rounded-[18px] z-1' />
              </div>
            </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={PianoSmallScreen} alt="Piano Small Screen" className=' rounded-[18px] z-1' />
              </div>
            </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={WarehouseWorkerSmallScreen} alt="Wharehouse Worker SmallScreen" className=' rounded-[18px] z-1' />
              </div>
            </div><div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={StorageSmallScreen} alt="Storage Small Screen" className=' rounded-[18px] z-1' />
              </div>
            </div></>
   
            
            
            
            }
        </div>
      </div>
      </>
      </div>
  );
};

export default Accordian01

