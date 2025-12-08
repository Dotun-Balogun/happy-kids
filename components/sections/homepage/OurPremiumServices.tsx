import SectionContainer from '@/components/SectionContainer'
import React from 'react'
import Image from 'next/image'
import { Dot } from 'lucide-react'
import ServiceCard from '@/components/ui/cards/ServiceCard'
import { servicesData } from '@/app/data/Service'
const OurPremiumServices = () => {
  return (
      <SectionContainer bgColor='#ffff94' waveColor='#ffff94' topWave={true} bottomWave={true} className='  relative overflow-hidden '>


        <div className='container mx-auto px-4 h-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 '>
          <h1 className="flex items-center justify-center gap-1 text-3xl font-bold text-center md:text-4xl lg:justify-start lg:text-left lg:text-5xl">
            <Dot size={90} className=" text-primary" />

            <span>
              Our <span className="text-primary">Premium</span> Services
            </span>
          </h1>


          
        </div>
        <section className=''>


            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center
                        gap-8 md:gap-10 lg:gap-12 '>
              {servicesData.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
          </div>
        </section>
      </SectionContainer>
  )
}

export default OurPremiumServices