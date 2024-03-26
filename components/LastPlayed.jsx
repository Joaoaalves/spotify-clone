"use client";
import { useEffect, useState } from 'react';
import { IoPlaySharp } from "react-icons/io5";

const items = [
  {title: '1'},
  {title: '2'},
  {title: '3'},
  {title: '4'},
  {title: '5'},
  {title: '6'},
  {title: '7'},
]

export default function LastPlayed(){
  const [columns, setColumns] = useState(3);
  const rows = 2;
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {

    if(window.innerWidth < 768) setColumns(1)
    if(window.innerWidth >= 768 && window.innerWidth < 1280) setColumns(2)
    if(window.innerWidth >= 1280) setColumns(3)
    if(window.innerWidth >= 1600) setColumns(4)
    
    let itemsToDisplay = items.slice(0, columns * rows - 1);
    let songsLiked = {title: 'Liked Songs'};
    let auxItem = itemsToDisplay[columns - 1];
    itemsToDisplay[columns - 1] = songsLiked;
    itemsToDisplay.push(auxItem);
    setDisplayedItems(itemsToDisplay);

    window.addEventListener('resize', () => {
      if(window.innerWidth < 768) setColumns(1)
      if(window.innerWidth >= 768 && window.innerWidth < 1024) setColumns(2)
      if(window.innerWidth >= 1024) setColumns(3)
      if(window.innerWidth >= 1280) setColumns(4)
    })

    return () => {
      window.removeEventListener('resize', () => {
        if(window.innerWidth < 768) setColumns(1)
        if(window.innerWidth >= 768 && window.innerWidth < 1024) setColumns(2)
        if(window.innerWidth >= 1024) setColumns(3)
        if(window.innerWidth >= 1280) setColumns(4)
      })
    }

  }, [columns]);

  return (
    <div className="w-full my-2 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-2 gap-4 overflow-hidden">
      {displayedItems.map((item, index) => (
        <LastPlayedItem key={index} title={item.title}/>
      ))}
    </div>
  )
}

function LastPlayedItem({title}){
  return (
    <div className="group flex items-center justify-start gap-x-4 rounded-md bg-text/5 cursor-pointer col-span-1">
      <div className="w-16 h-16 bg-primary rounded-l-md" />
      <span className="text-text/95">{title}</span>
      <button className="hidden group-hover:flex items-center justify-center rounded-full w-12 h-12 bg-primary ms-auto me-2 shadow-[0px_2px_6px_4px_rgba(0,0,0,0.2)] hover:scale-110 transition duration-150 ease-in-out">
        <IoPlaySharp className="text-2xl text-bg ms-1"/>
      </button>
    </div>
  )
}