import Image from 'next/image'
import React from 'react'
import children from '@/app/assets/images/children.png'
import HeadingWithFaintText from '@/components/HeadingWithFaintText'
import { statsData } from '@/app/data/stats'
import StatCard from '@/components/ui/cards/StatsCard'

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
 <div className='max-w-2xl h-[317px] w-[317px] md:w-[500px] md:h-[500px]  '>
  <HeadingWithFaintText
              faintText={'Hello'}
              containerClassName="mb-6 text-center md:text-left "
              faintTextClassName='text-7xl top-2 text-primary/20 font-bold left-3 '
            >
              
                <h1 className="text-[32px] md:text-[50px] font-black leading-tight">
                  <span className="flex items-start">
                    <span className="text-primary text-2xl md:text-4xl mt-2">
                      •
                    </span>
                    <span>
                      Welcome to{" "}
                      <span className="text-primary">Happy Kids</span>{" "}
                      Official Website
                    </span>
                  </span>
                </h1>
            <span className="text-[20px] text-[#666666] mt-5 px-4">Let's be happy and smiling together</span>
            </HeadingWithFaintText>

            <div>
              <p className="text-[18px] px-2 text-[#666666] text-center md:text-left">
                <strong>Happy Kids</strong> continuous diagnostic gathers
                 as much information as possible about students' knowledge
                  in order to recommend the skills that will challenge them at
                   just the right level and help them grow the most.</p>
               


             
            </div>
 </div>
 <div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          borderColor={stat.borderColor}
          tagColor={stat.tagColor}
        />
      ))}
    </div>
 </div>
   </div>
    
    </div>
  )
}

export default Aboutpage