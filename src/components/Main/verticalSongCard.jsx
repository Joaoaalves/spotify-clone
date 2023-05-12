import React from 'react'
import {GrPlayFill} from 'react-icons/gr'

const VerticalSongCard = ({img, title, artists}) => {
  return (
    <div className='h-64 w-[173px] p-4 flex flex-col bg-[#181818] rounded-md group relative hover:bg-slate-200/20 cursor-pointer'>
        <img src={img} className='w-full rounded' alt={title} />
        <h2 className='text-white text-md font-bold mt-4 mb-2'>{title}</h2>
        <h3 className='text-zinc-400 text-sm font-normal'>{artists}</h3>
        <div className='bg-[#1FDF64] rounded-full p-4 group-hover:inline hidden ml-auto mr-4 absolute right-2 top-[40%] shadow-lg shadow-black'>
            <GrPlayFill className='w-4 h-4 text-black' />        
        </div>
    </div>
  )
}

export default VerticalSongCard