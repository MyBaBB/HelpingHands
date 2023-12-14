// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Accordion03 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion03Reviews = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >
        <> 
        <div className=' relative flex justify-center content-center mx-auto     w-[87%]' >
        <div onClick={toggleAccordion03Reviews} 
        className={`openMenu  relative flex justify-center items-center w-full  h-full   mx-auto 
      }`} 
    >
        <div className='Accordion03ReviewsWrapper  relative bg-[#41301b]  rounded-3xl w-full xs:w-[97%] sm:w-[95%] mt-2 h-full cursor-pointer '>
        
          <div  className='flex justify-center mx-auto content-center 
          pb-[6px] pt-[4px]'>
            <button  className='text-amber-100  text-base sm:text-2xl font-extrabold '
                       style={{ textShadow: '1px 1px 2px black' }}>
             <div className='absolute left-[3px] top-[4px] sm:top-[9px] w-8  h-8  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown shadow-sm  shadow-black  rounded-full pt-[7px] text-4xl ' 
             style={{ textShadow: '0px -1px 2px black' }}> <span className='triangle'></span></div>
               Reviews
            </button>
          </div>
          {isOpen &&
            <>
            <div   className=' flex-col justify-start content-center  '>
              
               

  
<span className='ReviewsPersonName'>Kelly B.</span> <br/> 
<span className='ReviewsPersonDate'>May 6, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp; I would absolutely recommend working with 
Michael. I hired Michael for a local loading job. I&apos;m 
so OCD when it comes to my personal items and 
I was so focused on finding the right movers who 
would take good care of my stuff and who could 
also do the loading within my budget. Michael 
and Roy were awesome! They packed the truck so 
well and Michael continued to follow up with me 
after the move. I wish I had taken a before and 
after photo. But trust me, they&apos;re great!!</p> 
<hr className="ReviewsPersonHorizontalRule
"/>


<span className='ReviewsPersonName'>Stan R.</span> <br/>
<span className='ReviewsPersonDate'>May 2, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Excellent service!</p> 
<hr className="ReviewsPersonHorizontalRule
"/>

 
<span  className='ReviewsPersonName'>Sonia R.</span> <br/>
<span className='ReviewsPersonDate'>Jun 12, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;I&apos;ve hired them numerous times in the past 6 
months. And I&apos;ve never been disappointed</p>
<hr className="ReviewsPersonHorizontalRule
"/> 


<span className='ReviewsPersonName'>Denise N.</span> <br/> 
<span className='ReviewsPersonDate'>Jun 12, 2022</span> <br/>
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Great experience Michael was quick very 
professional . Blessing in the middle of my move I 
was blessed to find a great moving company</p>
<hr className="ReviewsPersonHorizontalRule
"/> 


<span className='ReviewsPersonName'>Ron L.</span> <br/> 
<span className='ReviewsPersonDate'>Jun 12, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Michael and Roy are the best! Moved my whole 
house within hours and took care of my furniture 
like their own. Thank you guys and definitely will 
recommend!</p>
<hr className="ReviewsPersonHorizontalRule
"/> 

<span className='ReviewsPersonName'>Robert Q.</span> <br/> 
<span className='ReviewsPersonDate'>May 27, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Excellent customer service and very attentive to 
the needs needed.</p>
<hr className="ReviewsPersonHorizontalRule
"/>



<span className='ReviewsPersonName'>Nicole D.</span> <br/> 
<span className='ReviewsPersonDate'>Jun 13, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Both workers arrived on time. They had all the 
material for moving: blankets, ropes etc. I just 
told them what to load and they worked 
efficiently and as quick as they could. The job took 
a little bit over an hour. Not only did I like their 
work ethic, from being punctual, work fast and 
efficient but they were kind also. I asked them to 
reorganize everything once they unloaded it all in 
the storage unit. They put my boxes in the back 
and brought my suitcases in the front so I 
would not be searching for anything when I&apos;m 
alone. That took another 15 min of extra work but 
they did not hesitate on asking me what else I 
would like them to help me with. Very kind and 
hard working guys. I will only call them from now 
on! They also do long distance moves in so Cal. 
Like San Diego, LA, etc. hit them up guys! You will 
not regret it.</p>
<hr className="ReviewsPersonHorizontalRule
"/> 

<span className='ReviewsPersonName'>Shelley N.</span> <br/> 
<span className='ReviewsPersonDate'>Jun 13, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;I&apos;ve been very happy with everything he have 
done and been very helpful! Very quick and would 
recommend for everyone</p>
<hr className="ReviewsPersonHorizontalRule
"/> 



<span className='ReviewsPersonName'>Sharon C.</span> <br/> 
<span className='ReviewsPersonDate'>May 2, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Helping Hands was great to work with. They 
helped me with my move with ease. Michael the 
foreman was so helpful and gave me a good price. 
Thank you Helping Hands. I will be referring 
friends and family if they ever need your services.</p>
<hr className="ReviewsPersonHorizontalRule
"/>
 
<span className='ReviewsPersonName'>Tom G.</span> <br/> 
<span className='ReviewsPersonDate'>Apr 12, 2022</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;We have used Helping Hand Movers 2 times now.</p>
 
           
           
            </div>
  
            </>
            }
        </div>
      </div>
      </div>
      </>
      </div>
  );
};

export default Accordion03

