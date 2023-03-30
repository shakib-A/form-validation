import React from 'react'
import { motion } from 'framer-motion'

const Thanks = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center mt-24 gap-4 md:mt-0 md:p-4'
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: .5}}
    >
      <img src="/assets/icon-complete.svg" alt="" />
      <h1 className='w-full text-center tracking-widest uppercase font-normal text-[40px]'>thank you!</h1>
      <h1 className='text-[20px] text-center text-Darkgrayishviolet'>We've added your card details</h1>
      <button className='bg-Verydarkviolet text-white w-full py-2 mb-4 rounded-lg'>continue</button>
    </motion.div>
  )
}

export default Thanks