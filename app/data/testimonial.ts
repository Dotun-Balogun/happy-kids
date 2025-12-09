import client1 from '@/app/assets/images/t2.jpg'
import client2 from '@/app/assets/images/t4.jpg'
import client3 from '@/app/assets/images/t5.jpg'
import { StaticImageData } from 'next/image';

export type Testimonial = {
  id: number;
  message: string;
  name: string;
  role: string;
  image: string | StaticImageData;
  rating: number;
  bgColor: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    message:
      'The food is G-R-E-A-T and the house my child live in is awesome!, He is much better :)',
    name: 'Rose Blue',
    role: 'Teacher',
    image: client1,
    rating: 5,
    bgColor: '#FF8649',
  },
  {
    id: 2,
    message:
      'The staff at St. Happy Kids and the therapists have helped me and now I’m a better person.',
    name: 'Ana Smith',
    role: 'Mother',
    image: client2,
    rating: 5,
    bgColor: '#FFF9A8',
  },
  {
    id: 3,
    message:
      'This is what I have learned; I have learned how to do division so that it is not hard anymore.',
    name: 'Nicole Kidman',
    role: 'Doctor',
    image: client3,
    rating: 5,
    bgColor: '#FF6F78',
  },

  {
    id: 4,
    message:
      'My child has improved so much since joining. The environment is warm, caring and supportive.',
    name: 'Laura James',
    role: 'Nurse',
    image: client1,
    rating: 5,
    bgColor: '#FFB267',
  },
  {
    id: 5,
    message:
      'Amazing staff! They truly understand children and know how to help them grow confidently.',
    name: 'Peter Collins',
    role: 'Engineer',
    image: client2,
    rating: 5,
    bgColor: '#FFECA6',
  },
  {
    id: 6,
    message:
      'My daughter comes home smiling every day. I love how attentive and patient the staff are.',
    name: 'Michelle Turner',
    role: 'Entrepreneur',
    image: client3,
    rating: 5,
    bgColor: '#FF8DA1',
  },
  {
    id: 7,
    message:
      'This place has helped my son improve his reading and social skills. Highly recommended!',
    name: 'Samuel Grant',
    role: 'Accountant',
    image: client1,
    rating: 5,
    bgColor: '#FFA55A',
  },
  {
    id: 8,
    message:
      'The teachers really care about each child. My son is now more confident and expressive.',
    name: 'Chloe Harris',
    role: 'Artist',
    image: client2,
    rating: 5,
    bgColor: '#FFF4C2',
  },
  {
    id: 9,
    message:
      'The best decision I made for my child. The love and support here is unmatched.',
    name: 'Daniel Brooks',
    role: 'Chef',
    image: client3,
    rating: 5,
    bgColor: '#FF7F8C',
  },
  {
    id: 10,
    message:
      'I appreciate the communication from the staff — always clear, patient, and helpful.',
    name: 'Sophia Reed',
    role: 'Writer',
    image: client1,
    rating: 5,
    bgColor: '#FF9860',
  },
  {
    id: 11,
    message:
      'My daughter’s confidence has grown tremendously. I’m so grateful for this school.',
    name: 'Henry Adams',
    role: 'Photographer',
    image: client2,
    rating: 5,
    bgColor: '#FFF1A1',
  },
  {
    id: 12,
    message:
      'The learning experience is fun, engaging, and effective. My son loves coming here.',
    name: 'Grace Morgan',
    role: 'Designer',
    image: client3,
    rating: 5,
    bgColor: '#FF6F78',
  },
];
