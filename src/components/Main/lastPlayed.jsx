import React from 'react'
import PlayedCard from './playedCard'
const LastPlayed = () => {
    const lastPlayed = [
        {
            img: 'liked-song.png',
            title: 'Liked Songs',
        },
        {
            img: 'played-song-cover.jpg',
            title: 'The Weeknd',
        },
        {
            img: 'played-song-cover.jpg',
            title: 'The Weeknd',
        },
        {
            img: 'played-song-cover.jpg',
            title: 'The Weeknd',
        },
        {
            img: 'played-song-cover.jpg',
            title: 'The Weeknd',
        },
        {
            img: 'played-song-cover.jpg',
            title: 'The Weeknd',
        },]
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-6'>
        {lastPlayed.map((item, index) => (
            <PlayedCard key={index} img={item.img} title={item.title} />
        ))}
    </div>
  )
}

export default LastPlayed