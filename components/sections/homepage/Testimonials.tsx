// pages/Testimonials.tsx
'use client'

import HeadingWithFaintText from '@/components/HeadingWithFaintText'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from '@/components/ui/cards/TestimonialCard'
import { testimonials } from '@/app/data/testimonial'

const Testimonials = () => {
  return (
    <section className='w-full py-16 lg:py-24 bg-linear-to-b from-white to-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HeadingWithFaintText
            faintText='Testimonials'
            faintTextClassName='top-2 left-1/2 -translate-x-1/2 text-primary text-[48px] font-bold opacity-10 lg:opacity-20'
          >
            <h2 className='text-[32px] md:text-4xl lg:text-[50px] font-concert-one font-bold text-center'>
              What Our Happy Kids Are Saying
            </h2>
          </HeadingWithFaintText>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className='text-center text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear from parents, teachers, and children about their wonderful experiences
        </motion.p>

        {/* Carousel */}
        <motion.div
          className='mt-12 lg:mt-16 relative'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className='pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4'
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className='hidden lg:block'>
              <CarouselPrevious className='absolute -left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white border-2 border-primary transition-all duration-300' />
              <CarouselNext className='absolute -right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white border-2 border-primary transition-all duration-300' />
            </div>
          </Carousel>
        </motion.div>

        {/* Dots Indicator (Optional) */}
        <motion.div
          className='flex justify-center gap-2 mt-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, index) => (
            <motion.div
              key={index}
              className='w-2 h-2 rounded-full bg-primary/30'
              whileHover={{ scale: 1.5, backgroundColor: 'var(--primary)' }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials