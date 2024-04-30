import { FaVolumeHigh, FaVolumeLow, FaVolumeOff } from "react-icons/fa6";
import { usePlayer } from "@/hooks/PlayerContext";
export default function VolumeBar({ player }) {
  const { volume, changeVolume } = usePlayer();

  const handleVolumeChange = (e) => {
    const element = document.querySelector("#volume");
    const rect = element.getBoundingClientRect();

    const mouseX = e.clientX;

    let percentage = (mouseX - rect.x) / rect.width;
    if (percentage <= 0) {
      percentage = 0;
    }

    changeVolume(percentage);
  };

  if (!player) return null;

  return (
    <div className="group grid grid-cols-[2rem_1fr] items-center gap-x-1 transition duration-300 ease-in-out">
      {player.volume === 0 ? (
        <FaVolumeOff className="!w-8" onClick={() => changeVolume(0.2)} />
      ) : player.volume <= 0.5 ? (
        <FaVolumeLow className="w-8" onClick={() => changeVolume(0)} />
      ) : (
        <FaVolumeHigh className="w-8" onClick={() => changeVolume(0)} />
      )}
      <div
        onDrag={(e) => handleVolumeChange(e)}
        onClick={(e) => handleVolumeChange(e)}
        id="volume"
        className="relative flex items-center justify-start w-24 h-1 bg-muted cursor-pointer transition duration-300 ease-in-out rounded-sm"
      >
        <div
          style={{
            width: `calc(${volume * 100}% - 3px)`,
            height: "100%",
          }}
          className="bg-text group-hover:bg-primary"
        />
        <div
          className="hidden group-hover:block absolute w-3 h-3 bg-text rounded-full"
          style={{
            left: `calc(${volume * 100}% - 6px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
