'use client'
import { classesData, classList } from '@/app/data/classes'
import HeadingWithFaintText from '@/components/HeadingWithFaintText'
import SectionContainer from '@/components/SectionContainer'
import ClassCard from '@/components/ui/cards/ClassCard'
import React from 'react'
import {motion} from 'framer-motion'
const JoinNow = () => {
  return (
    <SectionContainer bgColor='#00a9e2' topWave={true} bottomWave={true} waveColor='#00a9e2'>
      <section className='container mx-auto px-4 py-16 '>
        <div className='flex flex-col lg:flex-row items-center  gap-8 lg:gap-16 '>
          <div className='max-w-2xl'>
            <HeadingWithFaintText faintText='Join Now' faintTextClassName=' top-2 text-white text-[48px] font-bold opacity-10 lg:opacity-20 '>
              <h2 className='text-[32px] md:text-4xl lg:text-[50px] font-concert-one font-bold text-white text-center lg:text-left'>
                Ready to <span className='text-yellow-300'>Join</span> Us?
              </h2>
              <span className="text-[20px] text-white mt-20 px-4">Let's be happy and smiling together</span>

            </HeadingWithFaintText>
            <div>
               <motion.p
              className='text-white/80 text-base lg:text-lg leading-relaxed max-w-xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're searching for the next generation of Happy Kids kid reporters! 
              IndyKids is the nation's first social justice oriented free newspaper 
              and online teaching tool written by and for kids ages 9-14. In the 
              Happy Kids Kid Reporter Program Summer Camp, students are guided an 
              in-depth exploration of media literacy and learn how to become critical...
            </motion.p>



            </div>
             <motion.div 
              className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {classList.map((item, index) => (
                  <motion.div
                  key={index}
      className='flex items-center gap-3'
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className='w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center flex-shrink-0'
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <span className='text-white text-xl font-bold'>✓</span>
      </motion.div>

      <p className='text-white text-base lg:text-lg font-medium'>
        {item.text}
      </p>
    </motion.div>
              ))}
            </motion.div>
          
          </div>

          <div className='py-20 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
            {classesData.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: 'easeOut' 
                }}
              >
                <ClassCard classItem={classItem} />
              </motion.div>
            ))}
          </div>

          </div>
        </div>
      </section>
    </SectionContainer>
  )
}

export default JoinNow