import Hero from '@/components/sections/homepage/Hero'
import React from 'react'
import AboutSection from '@/components/sections/homepage/AboutSection'  
import OurPremiumServices from '@/components/sections/homepage/OurPremiumServices'
import JoinNow from '@/components/sections/homepage/JoinNow'
const page = () => {
  return (
    <div> 
      <Hero/>
      <AboutSection/>
      <OurPremiumServices/>
      <JoinNow/>
    </div>
  )
}

export default page