"use client";
import React, { useEffect, useState } from "react";
import { useAudio } from "@/hooks/AudioContext";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import VolumeBar from "./VolumeBar";
import { usePlayer } from "@/hooks/PlayerContext";

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "00:00";
};

export default function AudioPlayer() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-4 transition duration-300 ease-in-out">
          <PlayerControls />
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <CurrentTime />
          <ProgressBar />
          <TotalTime />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4 px-4">
        <VolumeBar />
      </div>
    </div>
  );
}

export function CurrentTime() {
  const { time } = usePlayer();
  return <span className="time current">{formatTime(time)}</span>;
}

export function TotalTime() {
  const { duration } = usePlayer();
  return <span>{formatTime(duration)}</span>;
}
