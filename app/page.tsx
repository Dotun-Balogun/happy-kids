import Hero from '@/components/sections/homepage/Hero'
import React from 'react'
import AboutSection from '@/components/sections/homepage/AboutSection'  
import OurPremiumServices from '@/components/sections/homepage/OurPremiumServices'
import JoinNow from '@/components/sections/homepage/JoinNow'
import Testimonials from '@/components/sections/homepage/Testimonials'
const page = () => {
  return (
    <div> 
      <Hero/>
      <AboutSection/>
      <OurPremiumServices/>
      <JoinNow/>
      <Testimonials/>
    </div>
  )
}

export default page