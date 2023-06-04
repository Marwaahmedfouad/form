import React, { useEffect, useState } from 'react'
export default function Cilld1({ parFunc }) {
  const [child1, setChild1] = useState('za3booot')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isNameHasValue, setIsNameHasValue] = useState(false)
  const [isEmailHasValue, setIsEmailHasValue] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)



  const handleClick = (e) => {
    e.preventDefault()
    parFunc(name, email)
  }

  useEffect(() => {
    if (name !==  '' && email !== '') {
      setIsDisabled(false)
    }

  }, [name,email])

  return (
    <div className=' text-danger text-center my-5 py-5'>
      <form className='w-50 mx-auto'>
        <div className='from-group w-75 mx-auto'>
          Name  <input className='py-2 bg-danger' type="text" placeholder='Enter your Name' onChange={(e) => e.target.value !== '' ? setName(e.target.value) : setIsNameHasValue(true)} className='form-control'  />
          Email  <input type="text" placeholder='Enter your Email' onChange={(e) => e.target.value !== '' ? setEmail(e.target.value) : setIsEmailHasValue(true)} className='form-control' />
        </div>
        <div className='text-center'>
          <button className='btn btn-primary btn-outline'  onClick={handleClick}> ADD </button>

        </div>
      </form>
    </div>
  )
}
