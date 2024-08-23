import React from 'react'
import image from '../../../assets/hand.png'

export const SideBar = () => {
  return (
    <div>
        <h2 className='font-medium text-primary_text text-2xl'>Stay on Top of Your Activities</h2>
        <img src={image} alt='image' className='w-8'/>
    </div>
  )
}
