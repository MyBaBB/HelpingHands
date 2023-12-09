// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Accordion02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion02About = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >
        <> 
      <div onClick={toggleAccordion02About} 
      className={`openMenu relative flex justify-center 
      items-center w-full h-full  mb-2
      }`}
    >
        <div className='AboutUsParagraphAccordion2 md:hidden bg-[#41301b]   rounded-3xl w-[80%] p-2 m-2 shadow-lg shadow-black  mt-2
        cursor-pointer hover:scale-105 ease-in-out duration-300'>
        
          <div className=' flex justify-center '>
            <button  className='text-amber-100  text-base sm:text-2xl  font-extrabold'
                       style={{ textShadow: '1px 1px 2px black' }}>
            <span className='absolute   text-base md:text-3xl  ' 
             style={{ textShadow: '-1px -1px 2px black' }}></span>
 About us
            </button>
          </div>
          {isOpen &&
            <>
          <article >
<div className='AboutUsParagraphWrapper  p-1  -mb-[9px] text-center block md:hidden  
  '>
  <h2  className='AboutUsh2 text-[.75rem]  xxs:text-[.95rem]  xs:text-[1.25rem] sm:text-[1.55rem]   md:text-[1.75rem]   ' >Welcome to Helping Hands Community Services!</h2>
  <hr className='my-2 w-[70%] min-w-[240px] mx-auto'/>
   <p >
   
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

export default Accordion02

