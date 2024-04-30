import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";
import LastPlayed from "./LastPlayed";
import JumpBackIn from "./JumpBackIn";
import { ScrollArea } from "@/components/ui/scroll-area";
import {getRandomInteger} from "@/lib/utils"

const res = await fetch('http://localhost:3000/api/getTrackList', {cache: 'force-cache'})
const tracks = await res.json()
const trackList = []

const randInt = getRandomInteger(0, tracks.length - 10)

const fetchMetadata = async (track) => {
  return fetch(`http://localhost:3000/api/getMetadata?songName=${encodeURIComponent(track)}`, {cache: 'force-cache'})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .catch((error) => {
    console.error("Error fetching metadata:", error);
  });
}

const fetchCoverImage = async (track) => {
  return fetch(`http://localhost:3000/api/getCoverImage?songName=${encodeURIComponent(track)}`, {cache: 'force-cache'})
  .then((response) => {
    if (response.ok) {
      return response.blob();
    }
  })
  .catch((error) => {
    console.error("Error fetching cover image:", error);
  });
}

tracks.slice(randInt, randInt + 10).forEach((track) => {
   let cover;
    // Fetch the cover image
    fetchCoverImage(track)
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      cover = objectURL;
    })
    .catch((error) => {
      console.error("Error fetching cover image:", error);
    });
    
    // Fetch the metadata
    fetchMetadata(track)
    .then((metadata) => {
        trackList.push({
          artist: metadata.artist,
          title: metadata.trackName,
          cover: cover,
          type: "track",
          trackName: track
        })

      })
    .catch((error) => {
      console.error("Error fetching metadata:", error);
    });
})


export default function MainPanel() {
  return (
    <ScrollArea className="gradient-main px-5 py-4 flex flex-col items-start justify-start rounded-lg w-full h-full">
      <div className="flex items-center justify-between w-full mb-4">
        <NavigationButtons />
        <InfoMenu />
      </div>
      <LastPlayed />
      <JumpBackIn trackList={trackList}/>
    </ScrollArea>
  );
}

function NavigationButtons() {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <NavigationButton>
        <BsChevronLeft className="text-xl" />
      </NavigationButton>
      <NavigationButton className="bg-bg/40 cursor-not-allowed">
        <BsChevronRight className="text-xl" />
      </NavigationButton>
    </div>
  );
}

function NavigationButton({ children, className = "" }) {
  return (
    <button
      className={`flex items-center justify-center w-8 h-8 bg-bg rounded-full text-text  transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}

function InfoMenu() {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <Notifications />
      <Profile />
    </div>
  );
}

function Notifications() {
  return (
    <ButtonFrame>
      <GoBell className="text-xl" />
    </ButtonFrame>
  );
}

function Profile() {
  return (
    <ButtonFrame>
      <FaUserCircle className="text-xl" />
    </ButtonFrame>
  );
}

function ButtonFrame({ children }) {
  return (
    <div className="rounded-full bg-[#111417] w-8 h-8 flex items-center justify-center text-secondary">
      {children}
    </div>
  );
}
