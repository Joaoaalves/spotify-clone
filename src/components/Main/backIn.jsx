import React from 'react'
import VerticalSongCard from './verticalSongCard'
const BackIn = () => {
    const missingSongs = [
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
        {
            img: 'missing-song-cover.jpg',
            title: 'The Weeknd',
            artists: 'The Weeknd',
        },
    ]
        
  return (
    <div className='flex flex-col items-start mt-6 gap-4'>
        <div className='flex items-center w-full place-content-between'>
            <h1 className='text-xl font-bold text-white cursor-pointer hover:underline'>Jump Back in</h1>
            <a className='text-md font-bold text-zinc-400 cursor-pointer hover:text-white'>Show All</a>
        </div>
        <div className='flex items-center justify-center gap-6'>
            {missingSongs.map((item, index) => (
                <VerticalSongCard key={index} img={item.img} title={item.title} artists={item.artists} />
            ))}
        </div>
    </div>
  )
}

export default BackIn