"use client";
import React, { createContext, useState, useContext } from "react";
import { usePlayer } from "./PlayerContext";
const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const { loadTrack } = usePlayer();
  const [currentTrack, setCurrentTrack] = useState(null);
  const [cover, setCover] = useState(null);
  const [artist, setArtist] = useState(null);
  const [name, setName] = useState(null);

  const changeTrack = (track) => {
    setCurrentTrack(track);
    loadTrack(track); 

    // Fetch the cover image
    fetch(`/api/getCoverImage?songName=${encodeURIComponent(track)}`)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Failed to fetch cover image:", response.statusText);
      })
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        setCover(objectURL);
      })
      .catch((error) => {
        console.error("Error fetching cover image:", error);
      });

    // Fetch the metadata
    fetch(`/api/getMetadata?songName=${encodeURIComponent(track)}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch metadata:", response.statusText);
      })
      .then((metadata) => {
        setArtist(metadata.artist);
        setName(metadata.trackName);
      })
      .catch((error) => {
        console.error("Error fetching metadata:", error);
      });
  };

  return (
    <AudioContext.Provider
      value={{ currentTrack, changeTrack, cover, artist, name }}
    >
      {children}
    </AudioContext.Provider>
  );
};
