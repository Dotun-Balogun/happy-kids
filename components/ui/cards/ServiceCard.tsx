import Image from 'next/image'
import React from 'react'
import kid1 from '@/app/assets/images/kid1.png'

const ServiceCard = () => {
  return (
   <div className='w-[400px] h-[600px] flex flex-col gap-4 px-4'>
<div className='relative w-[332px] h-[332px] rounded-full p-2 border border-dotted border-primary'>
        
        <Image src={kid1} alt='service image' width={332} height={332} className='rounded-full'/>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-[30px] text-center w-[80%]'>
            <h2 className='text-2xl font-semibold '>Kidar<span className='text-primary'>garte</span></h2>            
        </div>
        </div>

        <div className='p-[30px]'>
            <p className='text-center text-[18px] '> 
                Happy Kids offers a wide range of premium services designed to nurture and educate children in a fun and engaging environment. Our services include interactive learning sessions, creative arts and crafts, physical activities, and personalized care plans to ensure each child's unique needs are met. With experienced staff and a safe, welcoming atmosphere, we strive to provide the best possible experience for both children and their parents.  
                </p>
        </div>
   </div>
    
  )
}

export default ServiceCard