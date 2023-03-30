import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ cardInfo }) => {
  return (
  <>
    {/* mobile design */}
    <div className='md:hidden'>
      <img src="/assets/bg-main-mobile.png" alt="bgimg" className='w-full rounded-t-2xl'/>
      <motion.div className='w-[350px] h-[220px] absolute top-8 right-4 bg-bgcardback bg-contain bg-no-repeat'
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{duration: .5}}
      >
        <p className='absolute right-9 top-[82px] text-white'>{cardInfo.cvc ? cardInfo.cvc : 123}</p>
      </motion.div>
      <motion.div className='w-[400px] h-[250px] absolute left-4 top-36 bg-bgcardfront bg-contain bg-no-repeat flex flex-col justify-center items-start p-6 text-white'
         initial={{x: -200}}
         animate={{x: 0}}
         transition={{duration: .5}}
      >
        <img src="/assets/card-logo.svg" alt="card logo" className='w-12 mb-16' />
        <p className='tracking-widest pb-4 font-medium text-[25px] leading-0'>{`${cardInfo.number ? cardInfo.number : `000 0000 0000 0000`}`}</p>
        <div className='flex justify-between w-full mb-4'>
          <p className='uppercase'>{cardInfo.holderName ? cardInfo.holderName : `jane doe`}</p>
          <p className=''>{`${cardInfo.expMounth ? cardInfo.expMounth : '00'} / ${cardInfo.expYear ? cardInfo.expYear : '00'}`}</p>
        </div>
      </motion.div>
    </div>
    
    {/* desktop design */}
    <div className='hidden md:block h-full relative'>
      <img src="/assets/bg-main-desktop.png" className='h-full rounded-l-xl' />
      <motion.div className='bg-bgcardfront lg:w-[20rem] h-[12rem] bg-contain bg-no-repeat bg-center absolute top-[8rem] lg:left-[2rem] md:left-[1rem] md:w-[18rem]'
         initial={{x: -200}}
         animate={{x: 0}}
         transition={{duration: .5}}
      >
        <div className='text-white p-4 flex flex-col justify-between gap-4'>
          <img src="/assets/card-logo.svg" className='w-[5rem] mt-4' />
          <p className='tracking-widest text-normal text-[20px]'>{`${cardInfo.number ? cardInfo.number : `000 0000 0000 0000`}`}</p>
          <div className='flex justify-between'>
            <h1 className='uppercase'>{cardInfo.holderName ? cardInfo.holderName : `jane doe`}</h1>
            <h1>{`${cardInfo.expMounth ? cardInfo.expMounth : '00'} / ${cardInfo.expYear ? cardInfo.expYear : '00'}`}</h1>
          </div>
        </div>
      </motion.div>
      <motion.div className='bg-bgcardback lg:w-[20rem] h-[12rem] bg-contain bg-no-repeat bg-center absolute top-[20rem] lg:left-[6rem] md:left-[1rem] md:w-[18rem]'
         initial={{x: 200}}
         animate={{x: 0}}
         transition={{duration: .5}}
      >
        <p className='text-white absolute right-8 top-[92px]'>{cardInfo.cvc ? cardInfo.cvc : 123}</p>
      </motion.div>
    </div>
  </>
  )
}

export default Card

