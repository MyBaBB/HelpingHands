// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Accordian02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion02 = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >
        <> 
      <div onClick={toggleAccordion02} 
      className={`openMenu relative flex justify-center 
      items-center w-full h-full my-[4rem]  mb-2
      }`}
    >
        <div className=' md:hidden bg-[#41301b]   rounded-3xl w-full p-1 m-1  text-left shadow-lg shadow-black mt-2 xs:mt-5 sm:mt-10

        cursor-pointer hover:scale-105 ease-in-out duration-300'>
        
          <div className='flex justify-center'>
            <button  className='text-amber-100  text-base sm:text-2xl p-1 font-extrabold'
                       style={{ textShadow: '1px 1px 2px black' }}>
            <span className='absolute left-4 rotate-180 text-base md:text-3xl  ' 
             style={{ textShadow: '-1px -1px 2px black' }}></span>
 About us
            </button>
          </div>
          {isOpen &&
            <>
          <article >
<div className='AboutUsParagraphWrapper p-1 -mx-2 -mb-[9px] text-center block md:hidden 
 text-[.75rem]  xxs:text-[.95rem]  xs:text-[1.25rem] sm:text-[1.55rem]   md:text-[1.75rem] '>
  
   <p className='AboutUsParagraphAccordian2 '>
   <h2  className='AboutUsh2    ' >Welcome to Helping Hands Community Services!</h2>
  “ We specialize in moving and offer two trucks, a 16ft and a 26ft, both fully insured.🔸Our busiest seasons for Moving are during Summer and Christmas, but we are here to help you all year round.🔸We have a talented crew, which includes a Licensed Electrician.🔸We also offer Property Management Services that include Painting, Custom Woodworking, General Construction and Hauling.🔸We take pride in our work and enjoy helping the folks in our community.”
   </p>
 </div>
 



 </article>
            </>
            }
        </div>
      </div>
      </>
      </div>
  );
};

export default Accordian02

