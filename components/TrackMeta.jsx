import { useAudio } from "@/hooks/AudioContext";

export default function TrackMeta() {
  const { cover, artist, name } = useAudio();
  if (!name) return <div></div>;
  return (
    <div className="flex items-center justify-start gap-x-4 px-2">
      {cover ? (
        <img src={cover} alt="cover" className="w-14 h-14 rounded-sm" />
      ) : (
        <div className="w-12 h-12 bg-primary rounded-lg"></div>
      )}
      <div className="flex flex-col items-start justify-start gap-y-0">
        <h2 className="text-sm">{name}</h2>
        <h3 className="text-sm font-light text-secondary">{artist}</h3>
      </div>
    </div>
  );
}
