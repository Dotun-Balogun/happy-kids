import Hero from '@/components/sections/homepage/Hero'
import React from 'react'
import AboutSection from '@/components/sections/homepage/AboutSection'  
import OurPremiumServices from '@/components/sections/homepage/OurPremiumServices'
const page = () => {
  return (
    <div> 
      <Hero/>
      <AboutSection/>
      <OurPremiumServices/>
    </div>
  )
}

export default page