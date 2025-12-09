import Hero from '@/components/sections/homepage/Hero'
import React from 'react'
import AboutSection from '@/components/sections/homepage/AboutSection'  
import OurPremiumServices from '@/components/sections/homepage/OurPremiumServices'
import JoinNow from '@/components/sections/homepage/JoinNow'
import Testimonials from '@/components/sections/homepage/Testimonials'
import WatchNow from '@/components/sections/homepage/WatchNow'
import Partners from '@/components/sections/homepage/Partners'
const page = () => {
  return (
    <div> 
      <Hero/>
      <AboutSection/>
      <OurPremiumServices/>
      <JoinNow/>
      <Testimonials/>
      <WatchNow/>
      <Partners/>
    </div>
  )
}

export default page