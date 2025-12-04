// styles/animation.ts

import { Variants } from "framer-motion"

export const slideTop:Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export const fadeIn:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: "easeOut",
    },
  },
}

export const zoomIn:Variants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
}

export const staggerContainer:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}
