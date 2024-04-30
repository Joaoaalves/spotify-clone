"use client";
import { useAudio } from "@/hooks/AudioContext";
import { useEffect, useState, useRef } from "react";


export default function JumpBackIn({trackList}) {
  const [columns, setColumns] = useState(0);
  const [displayedItems, setDisplayedItems] = useState([]);
  const containerRef = useRef(null);
  const { changeTrack } = useAudio();

  useEffect(() => {
    if(!trackList)
      return
    
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const containerWidth =
          containerRef.current.getBoundingClientRect().width;
        const numberOfColumns = Math.floor(containerWidth / 180);
        setColumns(numberOfColumns);
        setDisplayedItems(trackList.slice(0, numberOfColumns));
      }
    };
    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth, {passive: true});

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  return (
    <div className="w-full my-4 overflow-hidden" ref={containerRef}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl hover:underline font-black cursor-pointer">
          Jump back in
        </h2>

        <a className="text-secondary font-bold text-sm cursor-pointer hover:underline">
          Show all
        </a>
      </div>

      <div className="flex items-center justify-between gap-x-4 overflow-x-hidden">
        {displayedItems.map((item, index) => (
          <Track
            key={index}
            style={{
              width: `${100 / columns}%`,
            }}
            onClick={() => changeTrack(item.trackName)}
          >
            {item.type === "track" ? <Cover src={item.cover} /> : <Artist />}
            <TrackDetails artist={item.artist} title={item.title} />
          </Track>
        ))}
      </div>
    </div>
  );
}

function Track({ children, style, ...rest }) {
  return (
    <div
      className="group flex flex-col items-center justify-center gap-y-2 h-72 hover:bg-muted/40 rounded-lg cursor-pointer trasition duration-300 ease-in-out"
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}

function Cover({ src }) {
  return (
    <div
      className="rounded-md w-40 h-40 self-center transition duration-300 ease-in-out group-hover:shadow-[0px_6px_8px_4px_rgba(0,0,0,0.2)]"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

function Artist() {
  return (
    <div className="w-40 h-40 bg-primary rounded-full self-center transition duration-300 ease-in-out group-hover:shadow-[0px_6px_8px_4px_rgba(0,0,0,0.2)]"></div>
  );
}

function TrackDetails({ artist, title }) {
  return (
    <div className="gap-y-2 flex flex-col items-start justify-start text-start w-40">
      <span className="text-text/95 truncate w-36">{title}</span>
      <p className="text-secondary text-sm w-36 line-clamp-2">{artist}</p>
    </div>
  );
}
