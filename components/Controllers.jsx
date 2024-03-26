import AudioPlayer from "./AudioPlayer";
import TrackMeta from "./TrackMeta";
export default function Controllers() {
  return (
    <footer className="w-full h-[15vh] 2xl:h-[10vh] grid grid-cols-3 grid-rows-1 items-center bg-bg">
      <TrackMeta/>
      <AudioPlayer/> 
    </footer>
  );
}