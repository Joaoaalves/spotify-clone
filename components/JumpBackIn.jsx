'use client';
import { useAudio } from "@/hooks/AudioContext";
import { useEffect, useState, useRef } from "react";

const items = [
  {
    title: "Anyma",
    description: "Artist",
    type: "artist",
  },
  {
    title: "Só Deus",
    description: "Grego",
    type: "track",
    trackName: 'Grego - Só Deus.mp3'
  },
  {
    title: "Kevin de Vries",
    description: "Artist",
    type: "artist",
  },
  {
    title: "Vibrate / On The Ground",
    description: "James Hype, Tita Lau",
    type: "track",
  },
  {
    title: "Aran",
    description: "Cassian",
    type: "track",
  },
  {
    title: "Eletronic Music",
    description: "The success and the big news of the electronic music.",
    type: "track",
  },
  {
    title: "Martin Garrix",
    description: "Artist",
    type: "artist",
  },
  {
    title: "Night Rain",
    description: "Sleep with sounds of pouring rain and occasional rolling thunder.",
    type: "track",
  },
];

export default function JumpBackIn(){
  const [columns, setColumns] = useState(0);
  const [displayedItems, setDisplayedItems] = useState([]);
  const containerRef = useRef(null);
  const { changeTrack } = useAudio();

  useEffect(() => {
    // Função para obter a largura do contêiner
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.getBoundingClientRect().width;
        // Defina o número de colunas com base na largura do contêiner e na largura de cada item
        const numberOfColumns = Math.floor(containerWidth / 180); // 250 é a largura de cada       
        setColumns(numberOfColumns);
        setDisplayedItems(items.slice(0, numberOfColumns));
      }
    };

    // Chame a função para atualizar a largura do contêiner quando o tamanho da janela for alterado
    window.addEventListener("resize", updateContainerWidth);
    
    // Chame a função inicialmente para definir o número de colunas
    updateContainerWidth();

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  return (
    <div className="w-full my-2 overflow-hidden" ref={containerRef}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl hover:underline font-black cursor-pointer">Jump back in</h2>

        <a className="text-secondary font-bold text-sm cursor-pointer hover:underline">Show all</a>
      </div>  

      <div className="flex items-center justify-between overflow-x-hidden">
        {displayedItems.map((item, index) => (
          <Cover key={index} style={
            {
              width: `${100 / columns}%`
            }
          }
            onClick={() => changeTrack(item.trackName)}
          >
            {item.type === 'track' ? <Track/> : <Artist/>}
            <TrackDetails title={item.title} description={item.description}/>
          </Cover>
        ))}
      </div>
    </div>
  )
}

function Cover({children, style, ...rest}){
  return (
    <div className="group flex flex-col items-center lg:items-start justify-start gap-y-2 p-6 min-w-[160px] h-72 hover:bg-muted/40 rounded-lg cursor-pointer trasition duration-300 ease-in-out"
      style={style}
      {...rest}
    >
      {children}
    </div>
  )
}

function Track(){
    return (
      <div className="rounded-md bg-bg w-40 h-40 self-center transition duration-300 ease-in-out group-hover:shadow-[0px_6px_8px_4px_rgba(0,0,0,0.2)]">

      </div>
    )
}

function Artist(){
  return (
    <div className="w-40 h-40 bg-primary rounded-full self-center transition duration-300 ease-in-out group-hover:shadow-[0px_6px_8px_4px_rgba(0,0,0,0.2)]">

   </div>
  )
}

function TrackDetails({title, description}){
  return (
    <div className="gap-y-2 flex flex-col items-start justify-center text-center lg:text-start">
      <span className="text-text/95 truncate w-36">{title}</span>
      <p className="text-secondary text-sm w-36 line-clamp-2">{description}</p>
    </div>
  )
}