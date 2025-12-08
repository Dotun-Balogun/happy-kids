import { StaticImageData } from 'next/image'
import classIcon1 from '@/app/assets/images/brush.png'
import classIcon2 from '@/app/assets/images/piano.png'
import classIcon3 from '@/app/assets/images/puzzle.png'
import classIcon4 from '@/app/assets/images/riding.png'

export interface ClassItem {
  id: number
  icon: StaticImageData
  title: string
  highlightText: string
  description: string
  bgColor: 'yellow' | 'pink' | 'white' | 'purple'
}

export const classesData: ClassItem[] = [
  {
    id: 1,
    icon: classIcon1,
    title: 'Art',
    highlightText: 'Academy',
    description: 'Is your child ready for focused instruction?',
    bgColor: 'yellow'
  },
  {
    id: 2,
    icon: classIcon4,
    title: 'Summer',
    highlightText: 'Camp',
    description: "We'll be taking weekly trips and painting on site",
    bgColor: 'pink'
  },
  {
    id: 3,
    icon: classIcon2,
    title: 'Manga',
    highlightText: 'Drawing',
    description: 'Students learn the drawing of Japanese',
    bgColor: 'white'
  },
  {
    id: 4,
    icon: classIcon3,
    title: 'Gold',
    highlightText: 'Latin',
    description: 'Level depends on talent, not age',
    bgColor: 'purple'
  }
]




export interface ListItem {
  id: number
  text: string
  icon: string
}

export const classList: ListItem[] = [
  {
    id: 1,
    text: 'Kid Reporter Camp',
    icon: '✓'
  },
  {
    id: 2,
    text: "Kids' Silks (8-12)",
    icon: '✓'
  },
  {
    id: 3,
    text: 'Kids Cooking Class',
    icon: '✓'
  },
  {
    id: 4,
    text: 'Intermediate Fencing',
    icon: '✓'
  }
]
