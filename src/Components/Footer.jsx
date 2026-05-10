import React from 'react'
import { assets } from '../assets/admin/assets'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      
    
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
        <p className='text-gray-600 leading-6'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quaerat et eaque est illo distinctio ea itaque.
        </p>
      </div>

      
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>017***23423</li>
            <li>contact@dummy.com</li>
        </ul>
      </div>
      
      
      <div className='col-span-full'>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024 @ dummy.com - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
