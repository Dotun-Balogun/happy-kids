import { galleryData } from '@/app/data/galleryData'
import HeadingWithFaintText from '@/components/HeadingWithFaintText'
import GalleryCard from '@/components/ui/cards/GalleryCard'
import React from 'react'

const GalleryPage = () => {
  return (
    <div className='container px-4 y-10 md:py-20 mx-auto space-y-10'>
         <HeadingWithFaintText
            faintText='Gallery'
            headingClassName='top-ful'
            faintTextClassName='top-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 text-primary text-[48px] text-center lg:text-left font-bold opacity-10 lg:opacity-20'
          >
            <h2 className='text-[32px] md:text-4xl lg:text-[50px] font-concert-one font-bold text-center lg:text-left'>
              Kids Gallery children  {" "} <span className='text-primary'>Resale Store</span>{" "} 
            </h2>
                          <span className="text-[20px] text-[#666666] mt-5 "> Kids Gallery is an Independently Operated children's art organisation</span>

          </HeadingWithFaintText>


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
            {
              galleryData.map((gallery)=>(
                <GalleryCard key={gallery.id} gallery={gallery}/>
              ))
            }


          </div>
    </div>
  )
}

export default GalleryPage