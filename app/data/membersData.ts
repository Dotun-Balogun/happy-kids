import { StaticImageData } from 'next/image'
import member1 from '@/app/assets/images/t2.jpg'
import member2 from '@/app/assets/images/t4.jpg'
import member3 from '@/app/assets/images/t5.jpg'
import member4 from '@/app/assets/images/t2.jpg'

export type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'pinterest' | 'youtube'

export interface MemberData {
  id: number
  firstName: string
  lastName: string
  role: string
  image: StaticImageData | string
  socials: Array<{
    platform: SocialPlatform
    url: string
  }>
}

export const membersData: MemberData[] = [
  {
    id: 1,
    firstName: 'Mike',
    lastName: 'King Man',
    role: 'Co founder, Manager',
    image: member1,
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'twitter', url: 'https://twitter.com' }
    ]
  },
  {
    id: 2,
    firstName: 'Rose',
    lastName: 'Niagara',
    role: 'Children Manager',
    image: member2,
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' }
    ]
  },
  {
    id: 3,
    firstName: 'Anna',
    lastName: 'Kidman',
    role: 'Preschool Manager',
    image: member3,
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'pinterest', url: 'https://pinterest.com' },
      { platform: 'instagram', url: 'https://instagram.com' }
    ]
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'Jackson',
    role: 'Support Manager',
    image: member4,
    socials: [
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'youtube', url: 'https://youtube.com' }
    ]
  }
]
