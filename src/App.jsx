import React, { useEffect, useState } from 'react'
import { Card, Form, Thanks } from './components/pages'

const App = () => {

  const [isSubmit, setIsSubmit] = useState(false)

  const [cardInfo, setCardInfo] = useState({
    holderName: '',
    number: '',
    expMounth: '',
    expYear: '',
    cvc: ''
  })

  const [formErros, setFormErrors] = useState({userName: ""})

  useEffect(() => {
    if(Object.keys(formErros).length === 0) {
      setIsSubmit(true)
    }
  },[formErros])


  const time = new Date()
  const currentYear = time.getFullYear()
  const currentMouth = time.getMonth()

  const handleName = (e) => {
    setCardInfo(prevInfo => {
      return {...prevInfo, holderName: e.target.value}
    })
  }

  const handleNumber = (e) => {
    setCardInfo(prevInfo => {
      return {...prevInfo, number: e.target.value}
    })
    if(e.target.value.length === 4) {
      e.target.value += ' '
    } else if (e.target.value.length === 9) {
      e.target.value += ' '
    } else if (e.target.value.length === 14) {
      e.target.value += ' '
    }
  }

  const handleExpMounth = (e) => {
    setCardInfo(pervInfo => {
      return {...pervInfo, expMounth: e.target.value}
    })
  }

  const handleExpYear = (e) => {
    setCardInfo(pervInfo => {
      return {...pervInfo, expYear: e.target.value}
    })
  }

  const handleCvc = (e) => {
    setCardInfo(prevInfo => {
      return {...prevInfo, cvc: e.target.value}
    })
  }

  //form validation on form submition
  const handleSubmit = (e) => {
    e.preventDefault()
    //validateForm(cardInfo) returns the error object 
      setFormErrors(validateForm(cardInfo))
  }

  const validateForm = (value) => {
    const errors = {}
    var hasNumber = /\d/
    var hasLetter = /[a-zA-Z]/

    //Card Holder name
    if(!value.holderName) {
      errors.userName = 'Cardholder name is required'
    } else if (hasNumber.test(value.holderName)) {
      errors.userName = "Wrong Format! name shouldn't contain numbers"
    }

    //Card number
    if(!value.number) {
      errors.cardNumber = 'Card number is required'
    } else if (hasLetter.test(value.number)) {
      errors.cardNumber = "Wrong Format! Numbers only"
    } else if (value.number.length < 19) {
      errors.cardNumber = "Complete the numbers"
    }

    //Expire Date
    if(!value.expMounth || !value.expYear) {
      errors.expDate = "Can't be blank"
    } else if (value.expMounth > 12) {
      errors.expDate = "Only 12 mounth in each yaer!!!"
    } else if (value.expMounth.length <=1 || value.expYear.length <= 1) {
      errors.expDate = "Each field should contain two digits e.g. January = 01"
    } else if (hasLetter.test(value.expMounth) || hasLetter.test(value.expYear)) {
      errors.expDate = "Only numbers"
    } else if (parseInt(value.expYear) < currentYear%100) {
      errors.expDate = "Your card has been expired!"
    } else if (parseInt(value.expMounth) <= currentMouth && parseInt(value.expYear) <= currentYear%100) {
      errors.expDate = "Your card has been expired!"
    }

    //CVC number
    if(!value.cvc) {
      errors.cvc = "Can't be blank"
    } else if(value.cvc.length <=2) {
      errors.cvc = "CVC should be 3 digits"
    } else if (hasLetter.test(value.cvc)) {
      errors.cvc = "Only digits!"
    }
    return errors
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='relative h-[90vh] w-[90vw] shadow-2xl rounded-xl md:flex md:max-w-[1140px] md:justify-evenly'>
        <div>
          <Card 
            cardInfo={cardInfo}
            />
        </div>
        <div className='flex items-center justify-center'>
         {!isSubmit ? <Form 
            handleName={handleName}
            handleNumber={handleNumber}
            handleExpMounth={handleExpMounth}
            handleExpYear={handleExpYear}
            handleCvc={handleCvc}
            handleSubmit={handleSubmit}
            errors={formErros}
          /> : <></>}
          {isSubmit ? <Thanks /> : <></>}
        </div>
      </div>
    </div>
    )
}

export default App