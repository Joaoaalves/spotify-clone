import React from 'react'
import {GrPlayFill} from 'react-icons/gr'

const PlayedCard = ({img, title}) => {
  return (
    <div className='group flex justify-start items-center gap-x-4 gap-y-2 bg-slate-200/10 rounded w-full h-20 cursor-pointer hover:bg-slate-100/20'>
        <img src={img} alt={title} className='h-20 rounded-tl rounded-bl'/>
        <h1 className='text-white text-lg font-bold'>{title}</h1>
        <div className='bg-[#1FDF64] rounded-full p-4 group-hover:inline hidden ml-auto mr-4  shadow-lg shadow-black'>
            <GrPlayFill className='w-4 h-4 text-black' />        
        </div>
    </div>
  )
}

export default PlayedCard