import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Form = ({ handleName,handleNumber, handleExpMounth, handleExpYear, handleCvc, handleSubmit, errors }) => {

  
  return (
    <div>
      <motion.form onSubmit={handleSubmit} className='flex flex-col justify-center items-start mt-24 px-12 md:max-w-[700px] md:ml-20 md:mt-0'
        initial={{y: 200}}
        animate={{y: 0}}
        transition={{duration: .5}}
      >
        <label htmlFor="cardholdername" className='uppercase'>cardholder name</label>
        <input  onChange={handleName} type="text" name="cardholdername" id="cardholdername" placeholder='e.g. Jane Appleseed' className={`${errors.userName ? `border-error` : ``} border-2 border-Lightgrayishviolet rounded-md w-full p-2 focus:border-Verydarkviolet outline-none capitalize`} />
        <span className='mb-4 text-error text-[14px] leading-none mt-1'>{errors.userName}</span>

        <label htmlFor="cardnumber" className='uppercase'>card Nmber</label>
        <input onChange={handleNumber} maxLength={19}  type="text" name="cardnumber" id="cardnumber"  placeholder='e.g. 1234 5678 9123 0000' className={`${errors.cardNumber ? `border-error` : ``} border-2 border-Lightgrayishviolet rounded-md w-full p-2 focus:border-Verydarkviolet outline-none`} />
        <span className='mb-4 text-error text-[14px] leading-none mt-1'>{errors.cardNumber}</span>

        <div className='flex gap-2'>
          <div className='flex flex-col'>
            <label htmlFor="exp" className='uppercase'>exp. date mm/yy</label>
            <div className='flex gap-2'>
              <input maxLength={2} onChange={handleExpMounth} type="text" name="exp" id="exp" placeholder='e.g. MM' className={`${errors.expDate ? `border-error` : ``} border-2 border-Lightgrayishviolet rounded-md  w-full p-2 focus:border-Verydarkviolet outline-none`} />
              <input maxLength={2} onChange={handleExpYear} type="text" name="" id="" placeholder='e.g. YY' className={`${errors.expDate ? `border-error` : ``} border-2 border-Lightgrayishviolet rounded-md  w-full p-2`} />
            </div>
            <span className='text-error text-[14px] leading-none mt-1'>{errors.expDate}</span>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cvc" className='uppercase'>cvc</label>
            <input maxLength={3} onChange={handleCvc} type="text" name="cvc" id="cvc" placeholder='e.g. 123' className={`${errors.cvc ? `border-error` : ``} border-2 border-Lightgrayishviolet rounded-md w-full p-2 focus:border-Verydarkviolet outline-none`} />
            <span className='mb-4 text-error text-[14px] leading-none mt-1'>{errors.cvc}</span>
          </div>
        </div>
        <button type="submit" className='w-full mt-2 bg-Verydarkviolet text-white py-4 rounded-lg'>Confirm</button>
      </motion.form>
    </div>
  )
}

export default Form