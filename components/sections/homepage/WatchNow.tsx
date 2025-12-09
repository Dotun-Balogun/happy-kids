'use client'
import SectionContainer from '@/components/SectionContainer'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import HeadingWithFaintText from '@/components/HeadingWithFaintText'
import Image from 'next/image'
import videoImage from '@/app/assets/images/sddefault-600x450.jpg'
import { Play, X } from 'lucide-react'

const WatchNow = () => {
  const [open, setOpen] = useState(false)

  return (
    <SectionContainer
      waveColor='#66ff9b'
      topWave={true}
      bottomWave={true}
      bgColor='#66ff9b'
      className='bg-[#66ff9b] py-16 lg:py-24'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HeadingWithFaintText
            faintText='Watch Now'
            faintTextClassName='top-2 left-1/2 -translate-x-1/2 text-primary text-[48px] font-bold opacity-10 lg:opacity-20'
          >
            <h2 className='text-[32px] md:text-4xl lg:text-[50px] font-concert-one font-bold text-center'>
              Children <span className='text-primary'>Meuseum</span> Video
            </h2>
            <p className='text-[20px] text-white text-center'>
              Children Meuseum Educational learning videos for Kids
            </p>
          </HeadingWithFaintText>
        </motion.div>

        {/* RESPONSIVE WRAPPER – DOESN’T CHANGE YOUR DESIGN */}
        <div className="w-full flex justify-center">
          <div
            onClick={() => setOpen(true)}
            className='relative max-w-[800px] max-h-[600px] w-[335px] h-[271px] lg:w-[792px] lg:h-[594px] mx-auto rounded-[40px] p-4 border border-dotted border-primary cursor-pointer group'
          >
            <div className='relative w-full h-full rounded-[40px] overflow-hidden group-hover:scale-[1.03] transition-transform duration-300'>
              <Image
                src={videoImage}
                alt='video image'
                className='h-full w-full object-cover'
              />
            </div>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-16 h-16 rounded-full border border-white flex items-center justify-center'>
              <Play size={38} className='text-white' />
            </div>
          </div>
        </div>

        {/* Modal */}
        {open && (
          <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-4'>
            <div className='relative bg-black rounded-xl w-full max-w-3xl aspect-video'>
              <iframe
                src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                className='w-full h-full rounded-xl'
                allow='autoplay; encrypted-media'
              ></iframe>

              <button
                onClick={() => setOpen(false)}
                className='absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg'
              >
                <X size={26} />
              </button>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  )
}

export default WatchNow
