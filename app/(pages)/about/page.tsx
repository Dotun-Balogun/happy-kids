import Image from 'next/image'
import React from 'react'
import children from '@/app/assets/images/children.png'

const Aboutpage = () => {
  return (
    <div className='container mx-auto px-4   min-h-screen py-20'>
      <div className='relative max-h-md'>
            <Image
    src={children}
    alt="About Page Background"
    objectFit="cover"
    quality={100} 
    />
      </div>
   <div className='flex flex-col flex-column md:flex-row items-center mt-10 gap-10 '>
 <div>
  
 </div>
   </div>
    
    </div>
  )
}

export default Aboutpage