"use client";
import { usePlayer } from "@/hooks/PlayerContext";
export default function ProgressBar() {
  const { time, seek, play, duration } = usePlayer();
  const handleProgressChange = (e) => {
    const element = document.querySelector("#progress-bar");
    const rect = element.getBoundingClientRect();

    const mouseX = e.clientX;

    const percentage = (mouseX - rect.x) / rect.width;
    seek(percentage * duration);
  };

  return (
    <div
      id="progress-bar"
      onMouseDown={(e) => handleProgressChange(e)}
      onDrag={() => pause()}
      onDragEnd={(e) => {
        handleProgressChange(e);
        play();
      }}
      className="group min-w-[450px] h-1 bg-muted flex items-center justify-start cursor-pointer rounded relative"
    >
      <div
        style={{
          width: `${(time * 100) / duration}%`,
          height: "100%",
        }}
        className="bg-text group-hover:bg-primary transition duration-300 ease-in-out rounded-sm"
      />
      <div
        className="hidden group-hover:block absolute w-3 h-3 bg-text rounded-full"
        style={{
          left: `calc(${(time * 100) / duration}% - 6px) `,
        }}
      ></div>
    </div>
  );
}
