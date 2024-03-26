"use client"
import { FaPlay, FaPause, FaVolumeOff, FaVolumeLow, FaVolumeHigh } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useAudio } from "@/hooks/AudioContext";

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes =
      minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds =
      seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};

export default function AudioPlayer(){
  const player = useGlobalAudioPlayer()
  const [time, setTime] = useState(0)
  const {currentTrack} = useAudio()

  useEffect(() => {
    if(!currentTrack) return
    player.load("/api/audio?path=" + currentTrack, {
      html5: true,
      format: "mp3",
      autoplay: true
    })

    const interval = setInterval(() => {
      setTime(player.getPosition())
    }, 1000)

    return () => clearInterval(interval)
      
  }, [currentTrack])


  return (
      <div className="h-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-x-4 transition duration-300 ease-in-out">
            <CurrentTime time={time}/>
            <ProgressBar player={player} time={time}/>
            <TotalTime player={player}/>
            <PlayerControls player={player}/>
            <VolumeBar player={player}/>
          </div>
      </div>
  )
}

export function CurrentTime({time}){
  return <span className="time current">{formatTime(time)}</span>
}

export function TotalTime({player}){
  return <span>{formatTime(player.duration)}</span>
}

export function ProgressBar({player, time}){
  const handleProgressChange = (e) => {
    const element = document.querySelector('#progress-bar')
    const rect = element.getBoundingClientRect()
    
    const mouseX = e.clientX

    const percentage = (mouseX - rect.x) / rect.width
    
    player.seek(percentage * player.duration )
  }

  return <div id="progress-bar" onMouseDown={(e) => handleProgressChange(e)} onDrag={() => player.pause()}  onDragEnd={(e) => {
    handleProgressChange(e)
    player.play()
  }}  className="min-w-[450px] h-1 bg-muted flex items-center justify-start cursor-pointer rounded">
      <div
          style={{
              width: `calc(${time * 100 / player.duration}% - 6px)`,
              background: "#1DD35E",
              height: "100%",
              borderRadius: "inherit"
          }}
      />
      <div className="w-3 h-3 bg-text rounded-full"></div>
  </div>
}

export function VolumeBar({player}){
  const handleVolumeChange = (e) => {
    const element = document.querySelector('#volume')
    const rect = element.getBoundingClientRect()
    
    const mouseX = e.clientX

    let percentage = (mouseX - rect.x) / rect.width
    if(percentage <= 0){
      percentage = 0
    }
    setVolume(percentage)
  }

  const setVolume = (value) => {
    player.setVolume(value)
  }
  return  <div className="group grid grid-cols-[2rem_1fr] items-center gap-x-1 transition duration-300 ease-in-out">
  {player.volume === 0 ? <FaVolumeOff className="!w-8" onClick={() => setVolume(0.2)}/> : player.volume <= 0.5 ? <FaVolumeLow className="w-8" onClick={() => setVolume(0)}/> : <FaVolumeHigh className="w-8" onClick={() => setVolume(0)}/>}
  <div onDrag={(e) => handleVolumeChange(e)} onClick={(e) => handleVolumeChange(e)} id="volume" className="w-0 flex items-center justify-start group-hover:w-full h-1 bg-black cursor-pointer transition duration-300 ease-in-out">
        <div style={{
          width: `calc(${player.volume * 100}% - 3px)`,
          background: "var(--primary)",
          height: "100%",
        }}/>
        <div className="w-0 group-hover:w-3 h-3 bg-black rounded-full"></div>
  </div>
</div>
}

export function PlayerControls({player}){
  return <button onClick={() => player.togglePlayPause()}>
    {player.playing ? <FaPause /> : <FaPlay />}
  </button>
}