import SectionContainer from '@/components/SectionContainer'
import React from 'react'
import Image from 'next/image'
import { Dot } from 'lucide-react'
import ServiceCard from '@/components/ui/cards/ServiceCard'
import { servicesData } from '@/app/data/Service'
const OurPremiumServices = () => {
  
  const servicesDataSlice = servicesData.slice(0,3)
  return (
      <SectionContainer bgColor='#ffff94' waveColor='#ffff94' topWave={true} bottomWave={true} className='  relative overflow-hidden '>


        <div className='container mx-auto px-4 flex flex-col text-center '>
          <h1 className="flex items-center justify-center  text-3xl font-bold text-center md:text-4xl  lg:text-5xl">
            <Dot size={90} className=" text-primary" />

            <span>
              Our <span className="text-primary">Premium</span> Services
            </span>
          </h1>

            <span className="text-[20px] text-[#666666]  px-4">What we are Providing for Our Children</span>

          
        </div>
        <section className=''>


            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center
                        gap-8 md:gap-10 lg:gap-12 '>
              {servicesDataSlice.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
          </div>
        </section>
      </SectionContainer>
  )
}

export default OurPremiumServices