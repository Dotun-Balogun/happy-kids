'use client'
import React, { useState } from 'react'
import { ArrowRight, Mail, Check } from 'lucide-react'

// AboutSection Component
export default function FooterAbout(){
  return (
    <div className="space-y-6">
      <div className="inline-block">
        <h3 className="text-lg sm:text-xl font-bold text-[#FFE500] bg-white px-6 py-3 rounded-full">
          About Our Company
        </h3>
      </div>
      
      <p className="text-white text-sm sm:text-base leading-relaxed max-w-xs">
        Happy Kids Kindergarten is a nurturing and engaging preschool environment where children learn, grow, and explore through play-based education and creative activities.
      </p>

      <div className="space-y-3 text-white">
        <div className="flex items-center justify-between py-2 border-b border-white/20">
          <span className="text-sm sm:text-base">Mon – Fri</span>
          <span className="text-sm sm:text-base font-semibold">8AM – 7PM</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-white/20">
          <span className="text-sm sm:text-base">Saturday</span>
          <span className="text-sm sm:text-base font-semibold">8AM – 1PM</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-white/20">
          <span className="text-sm sm:text-base">Sunday</span>
          <span className="text-sm sm:text-base font-semibold">Email Support</span>
        </div>
      </div>
    </div>
  )
}
