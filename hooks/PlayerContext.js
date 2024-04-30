"use client";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import React, { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const player = useGlobalAudioPlayer();
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loop, setLoop] = useState(false);

  const loadTrack = (track) => {
    player.load(`/songs/${track}`, {
      html5: true,
      format: "mp3",
      autoplay: true,
      onend: () => {
        clearInterval(interval);
      },
    });

    const interval = setInterval(() => {
      setTime(player.getPosition());
      setProgress((player.getPosition() / player.duration) * 100);
    }, 50);
  };

  const toggleLoop = () => {
    player.looping = !player.looping;
    setLoop(player.looping);
  };

  const seek = (value) => {
    player.seek(value);
  };

  const changeVolume = (value) => {
    player.setVolume(value);
    setVolume(value);
  };

  const isPlaying = () => {
    return player.playing;
  };

  const togglePlayPause = () => {
    player.togglePlayPause();
  };

  const play = () => {
    player.play();
  };

  const pause = () => {
    player.pause();
  };
  const duration = player.duration;
  return (
    <PlayerContext.Provider
      value={{
        time,
        seek,
        volume,
        changeVolume,
        duration,
        isPlaying,
        togglePlayPause,
        loop,
        toggleLoop,
        progress,
        loadTrack,
        play,
        pause,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
