import React from 'react'
import Navbar from './Navbar/page'
import WelcomePage from './WelcomePage/page'
import AddWindow from './AddWindow/page'

const page = () => {
  return (
     <div className='bg-gray-100'>
    <div className='min-h-screen w-full max-w-md mx-auto bg-white shadow-xl/20'>
    <AddWindow/>
    </div>
    </div>
  )
}

export default page

