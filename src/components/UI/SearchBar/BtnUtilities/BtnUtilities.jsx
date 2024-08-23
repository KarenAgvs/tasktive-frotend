import React from 'react'

export const BtnUtilities = ({icon, onClick, }) => {
  return (
    <div onClick={onClick} className='bg-secondary_background flex items-center justify-center rounded-full cursor-pointer w-10 h-10 text-gray-500 '>
        {icon}
    </div>
  )
}
