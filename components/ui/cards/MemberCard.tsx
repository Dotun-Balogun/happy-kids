'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { MemberData } from '@/app/data/membersData'
import SocialIcon from '../SocialIcon'

interface MemberCardProps {
  member: MemberData
  index?: number
}

const MemberCard = ({ member, index = 0 }: MemberCardProps) => {
  return (
    <motion.article 
      className='relative w-full max-w-[300px] mx-auto'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className='relative border-2 border-primary border-dashed rounded-[30px] p-2 mb-12 '
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.3 }}
      >
        <div className='relative w-full h-[350px] rounded-2xl overflow-hidden bg-gray-100'>
          <Image
            src={member.image}
            alt={`${member.firstName} ${member.lastName} - ${member.role}`}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 335px'
          />
        </div>

        <motion.div 
          className='absolute -bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] z-20'
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        >
          <div className='bg-[#FFEF16] h-12 border-2 border-primary border-dashed rounded-full flex items-center justify-center gap-2 px-4 shadow-xl'>
            {member.socials.map((social, idx) => (
              <SocialIcon 
                key={`${member.id}-${social.platform}-${idx}`}
                platform={social.platform}
                url={social.url}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Member Info */}
      <motion.div 
        className='flex flex-col items-center justify-center text-center px-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      >
        <h3 className='text-[28px] md:text-[32px] font-bold font-concert-one leading-tight'>
          <span className='text-primary'>{member.firstName}</span>{' '}
          <span className='text-gray-800'>{member.lastName}</span>
        </h3>
        <p className='text-[16px] md:text-[18px] text-gray-600 mt-1 font-medium'>
          {member.role}
        </p>
      </motion.div>
    </motion.article>
  )
}

export default MemberCard

