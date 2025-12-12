import { StaticImageData } from "next/image"
import photo1 from '@/app/assets/images/photo1.png'
import photo2 from '@/app/assets/images/photo2.png'
import photo3 from '@/app/assets/images/photo3.png'
import photo4 from '@/app/assets/images/children.png'
import photo5 from '@/app/assets/images/childrenglobe.png'
export type GalleryProps ={
    id?:number,
    image:StaticImageData,
}


export const  galleryData:GalleryProps[]=[
    {id:1, image: photo1},
    {id:2, image:photo2},
    {id:3, image:photo3},
    {id:4, image:photo4},  
      {id:5, image:photo5},
      {id:6, image:photo1}



    
]