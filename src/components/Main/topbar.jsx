import React from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
const TopBar = () => {
  return (
    <div className='flex items-center place-content-between'>
        <div className='flex gap-2'>

            <BsChevronLeft className='h-8 w-8 text-white text-3xl rounded-full bg-black p-1.5 cursor-pointer' />

            <BsChevronRight className='h-8 w-8 text-white text-3xl rounded-full bg-black p-1.5 cursor-pointer' />

        </div>

        <div className='w-8 h-8 rounded-full bg-black'>

        </div>
    </div>
  )
}

export default TopBar