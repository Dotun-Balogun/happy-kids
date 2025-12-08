import SectionContainer from '@/components/SectionContainer'
import React from 'react'
import Image from 'next/image'
import background from '@/app/assets/images/toybg2.png'
const OurPremiumServices = () => {
  return (
    <section>
        <SectionContainer bgColor='#ffff94' waveColor='#ffff94'  topWave={true} bottomWave={true} className='  relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden '>
                  <Image
                  src={background}
                  alt='bakground with toys'
                  fill
                  className='bg-cover w-full h-full '


                  />
             <div className='relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center'>
        jjjjj
             </div>
        </SectionContainer>
    </section>
  )
}

export default OurPremiumServices