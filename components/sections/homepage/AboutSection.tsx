import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'
import React from 'react'
import KidsImage from '@/app/assets/images/kids.jpg'
import HeadingWithFaintText from '@/components/HeadingWithFaintText'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const AboutSection = () => {
  return (
    <div className='w-full container mx-auto px-4'>
      <SectionContainer topWave={false} bottomWave={false} className='  flex flex-col md:flex-row items-cente  justify-center py-12 md:py-20 gap-8 md:gap-16'>
      <div className='max-w-md h-[317px] w-[317px] md:w-[500px] md:h-[500px]'>
         <Image
          src={KidsImage}
          alt='kids image reading'
         />
      </div>
      <div className='max-w-xl '>
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
            <span className="text-[20px] text-[#666666] mt-[20px] px-4">Let's be happy and smiling together</span>
            </HeadingWithFaintText>
            <div>
              <p className="text-[18px] px-2 text-[#666666] text-center md:text-left">
                <strong>Happy Kids</strong> continuous diagnostic gathers
                 as much information as possible about students' knowledge
                  in order to recommend the skills that will challenge them at
                   just the right level and help them grow the most.</p>
               


              <div className='flex flex-col gap-4 md:flex-row items-center'>
                <Button  className="mt-6 w-[192px] h-[42px] bg-primary text-white font-semibold rounded-full shadow-md hover:bg-secondary hover:border-2  hover:border-dotted border-primary hover:text-primary">
                    
                <ArrowRight />More About Us
                </Button>


 <Button  className="mt-6 w-[192px] h-[42px] hover:bg-primary hover:text-secondary font-semibold rounded-full shadow-md bg-white border-2 border-dotted border-primary text-primary">
                    
                <ArrowRight />More About Us
                </Button>
                
              </div>
            </div>
      </div>
      </SectionContainer>
    </div>
  )
}

export default AboutSection