'use client'
import { GalleryProps } from '@/app/data/galleryData'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from 'framer-motion'

type GalleryCardProps ={
  gallery:GalleryProps
}

const GalleryCard = ({gallery}:GalleryCardProps) => {
  const [isHovered , setIsHovered] = useState(false)
  return (
    <motion.div className='relative group w-[290px] h-[380px] p-2.5 border-2 border-dotted rounded-2xl border-primary lg:w-[370px] lg:h-[470px]' 
    onHoverStart={()=>setIsHovered(!isHovered)}
    onHoverEnd={()=>{setIsHovered(isHovered)}}
    >
      <Image
      src={gallery.image}
      alt='photo image'
      className='h-full w-full object-cove rounded-[30px]'
      />
        
{
  isHovered &&( 

  <div className='absolute inset-0 w-full h-full  flex items-center justify-center text-2xl text-white bg-white/30 '><Search size={40} className='bg-primary p-2 rounded'/></div>
  )
}

    </motion.div>
  )
}

export default GalleryCard