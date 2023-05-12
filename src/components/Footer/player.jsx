import React from 'react'
import {FaRandom} from 'react-icons/fa'
import {BiSkipPrevious, BiPlay, BiSkipNext} from 'react-icons/bi'
import {BsRepeat} from 'react-icons/bs'

const Player = () => {
  return (
    <div className='flex flex-col h-full w-full'>
        <div className='flex  gap-4 items-center justify-center px-4'>
            <FaRandom className='w-4 h-4 text-gray-400 hover:text-gray-100 cursor-pointer' />
            <BiSkipPrevious className='w-8 h-8 text-gray-200 hover:text-gray-100 cursor-pointer' />
            <button className="w-8 h-8 flex jutisfy-items-center pl-1 bg-white rounded-full hover:text-gray-100 cursor-pointer" href="#">
            <BiPlay className='w-8 h-8 text-black' />
            </button>
            <BiSkipNext className='w-8 h-8 text-gray-200 hover:text-gray-100 cursor-pointer' />
            <BsRepeat className='w-4 h-4 text-gray-400 hover:text-gray-100 cursor-pointer' />
        </div>
        <div className='w-full flex justify-center items-center mt-auto mb-2 gap-2 h-max'>
            <span className='text-gray-400 text-xs'>4:03</span>

            <div className='bg-zinc-700 w-full h-1 rounded group cursor-pointer'>
                <div className='bg-white w-[50%] h-1 rounded group-hover:bg-green-600 group-hover:rounded-none relative flex items-center'>
                  <div className='rounded-full w-2 bg-green-600 h-2 group-hover:inline hidden absolute right-0'></div>
                </div>
            </div>
            <span className='text-gray-400 text-xs'>7:46</span>
        </div>
    </div>
  )
}

export default Player