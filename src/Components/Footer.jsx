import React from 'react'
import { assets } from '../assets/admin/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quaerat et eaque est illo distinctio ea itaque. Voluptates corporis maiores ut, iste reprehenderit omnis officiis itaque saepe error at 
        </p>
      </div>
    </div>
  )
}

export default Footer
