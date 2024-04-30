"use client";
import NotImplementedButton from "./NotImplementedButton";
import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
  FaShuffle,
  FaRepeat,
} from "react-icons/fa6";
import { usePlayer } from "@/hooks/PlayerContext";
export default function PlayerControls() {
  const { togglePlayPause, isPlaying } = usePlayer();
  return (
    <div className="flex items-center justify-center gap-x-4">
      <NotImplementedButton text="Shuffle">
        <button className="text-xl text-secondary hover:text-text">
          <FaShuffle />
        </button>
      </NotImplementedButton>
      <NotImplementedButton text="Previous Track">
        <button className="text-xl text-secondary hover:text-text">
          <FaBackwardStep />
        </button>
      </NotImplementedButton>
      <button
        className="relative min-w-9 min-h-9 bg-text text-lg text-bg hover:scale-110 transition duration-300 ease-in-out rounded-full p-1"
        onClick={() => togglePlayPause()}
      >
        {isPlaying() ? (
          <FaPause className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
        ) : (
          <FaPlay className="absolute top-1/2 -translate-y-1/2 left-2.5" />
        )}
      </button>
      <NotImplementedButton text="Next Track">
        <button className="text-xl text-secondary hover:text-text">
          <FaForwardStep />
        </button>
      </NotImplementedButton>

      <NotImplementedButton text="Repeat">
        <button className="text-xl text-secondary hover:text-text">
          <FaRepeat />
        </button>
      </NotImplementedButton>
    </div>
  );
}
