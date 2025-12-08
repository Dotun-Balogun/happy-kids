import kid1 from '@/app/assets/images/kid1.png'
import kid2 from '@/app/assets/images/kid2.png'
import kid3 from '@/app/assets/images/kid3.png'
import { StaticImageData } from 'next/image'

export interface Service {
  id: number
  title: string
  highlightText: string
  image: string | StaticImageData
  description: string
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Kidar",
    highlightText: "garten",
    image: kid1 ,
    description: "Happy Kids offers a wide range of premium services designed to nurture and educate children in a fun and engaging environment. Our services include interactive learning sessions, creative arts and crafts, physical activities, and personalized care plans to ensure each child's unique needs are met."
  },
  {
    id: 2,
    title: "Day",
    highlightText: "Care",
    image:kid2,
    description: "Our daycare program provides a safe, loving environment where children can explore, play, and grow. With experienced caregivers and age-appropriate activities, we ensure your child receives the attention and care they deserve while you're at work."
  },
  {
    id: 3,
    title: "Pre",
    highlightText: "School",
    image: kid3,
    description: "Our preschool curriculum is designed to prepare children for their educational journey. Through play-based learning, social interaction, and creative exploration, we build foundational skills in literacy, numeracy, and critical thinking."
  },
 
]
