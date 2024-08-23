import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'


 
const SearchBar = ({ placeholder, onChange}) => {
    
  return (
    <div className='flex items-center rounded-full bg-secondary_background pr-5 w-2/5 box-border '>
      <input
      className='w-full pl-5 px-4 py-2 bg-transparent text-gray-700 focus:outline-none '
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      />

      <MagnifyingGlassIcon className='size-6 text-gray-500'/>

    </div>
  )
}

export default SearchBar