import Controllers from "@/components/Controllers";
import MainPanel from "@/components/MainPanel";
import Sidepanel from "@/components/Sidepanel";
export default function Home() {
  return (
    <main
      className={`grid grid-cols-[24rem_1fr] grid-rows-[1fr_5rem] gap-2 p-2 h-screen overflow-hidden bg-bg text-text`}
    >
      <Sidepanel />
      <MainPanel />
      <Controllers />
    </main>
  );
}
