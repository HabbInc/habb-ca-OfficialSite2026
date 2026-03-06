import React from 'react'
import { motion } from 'motion/react'

export default function CanadaBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-dark_black/80 backdrop-blur-sm rounded-full border border-dark_black/20 dark:border-white/20 shadow-sm'
    >
      <svg
        width='20'
        height='12'
        viewBox='0 0 60 30'
        className='rounded-sm'
      >
        <rect width='60' height='30' fill='#ff0000' />
        <rect x='20' y='0' width='20' height='30' fill='#fff' />
        <path d='M30 6 L33 12 L39 13 L34 17 L36 24 L30 20 L24 24 L26 17 L21 13 L27 12 Z' fill='#ff0000' />
      </svg>
      <span className='text-sm font-semibold text-dark_black dark:text-white'>
        CANADA ENGINEERED
      </span>
    </motion.div>
  )
}
