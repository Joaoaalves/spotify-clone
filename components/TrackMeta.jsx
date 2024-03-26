import { useAudio } from "@/hooks/AudioContext";

export default function TrackMeta() {
  const { cover, artist, name } = useAudio();

  return (
    <div className="flex items-center justify-start gap-x-4">
      {cover ? <img src={cover} alt="cover" className="w-20 h-20 rounded-lg" /> 
      : <div className="w-20 h-20 bg-primary rounded-lg"></div>}
      <div className='flex flex-col items-start justify-start gap-y-0'>
        <h2 className="text-lg font-semibold">{artist}</h2>
        <h3 className="text-sm font-light">{name}</h3>
      </div>
    </div>
  );
}
