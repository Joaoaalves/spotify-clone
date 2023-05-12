import React, {useState} from 'react'
import {TbMicrophone2} from 'react-icons/tb'
import {TiThMenuOutline} from 'react-icons/ti'
import {AiOutlineDesktop} from 'react-icons/ai'	
import {BsVolumeUp, BsVolumeDown, BsVolumeOff} from 'react-icons/bs'
import {IoIosResize} from 'react-icons/io'
const MusicUtils = () => {
    const [volume, setVolume] = useState(50)
  return (
    <div className='flex items-center justify-end gap-2 w-full px-2'>
        <TbMicrophone2 className='text-zinc-400 text-xl cursor-pointer hover:text-white' />
        <TiThMenuOutline className='text-zinc-400 text-xl cursor-pointer hover:text-white' />
        <AiOutlineDesktop className='text-zinc-400 text-xl cursor-pointer hover:text-white' />
        <div className='flex items-center justify-center'>
            {volume == 0 ? 
                <BsVolumeOff className='text-zinc-400 text-2xl cursor-pointer hover:text-white' />  :
            volume <= 50 ?
                <BsVolumeDown className='h-7 w-7 text-zinc-400 text-2xl cursor-pointer hover:text-white' /> :
                <BsVolumeUp className='text-zinc-400 text-2xl cursor-pointer hover:text-white' />
            }

            <div className='flex items-center bg-zinc-700 w-16 h-1 rounded group cursor-pointer'>
                <div className='bg-white w-[50%] h-1 rounded group-hover:bg-green-600 group-hover:rounded-none relative flex items-center'>
                  <div className='rounded-full w-2 bg-green-600 h-2 group-hover:inline hidden absolute right-0'></div>
                </div>
            </div>
        </div>
        <IoIosResize className='text-zinc-400 text-2xl cursor-pointer hover:text-white' />
    </div>
  )
}

export default MusicUtils