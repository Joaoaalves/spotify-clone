import Controllers from "@/components/Controllers";
import MainPanel from "@/components/MainPanel";
import Sidepanel from "@/components/Sidepanel";
import { AudioProvider } from "@/hooks/AudioContext";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PlayerProvider } from "@/hooks/PlayerContext";
export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center overflow-hidden bg-bg text-text p-2`}
    >
      <PlayerProvider>
        <AudioProvider>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[85vh] max-h-[85vh] 2xl:min-h-[90vh] 2xl:max-h-[90vh]"
          >
            <ResizablePanel minSize={20} maxSize={30}>
              <Sidepanel />
            </ResizablePanel>
            <ResizableHandle
              className={
                "hover:bg-muted mx-1 transition duration-300 ease-in-out !cursor-grab"
              }
            />
            <ResizablePanel>
              <MainPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
          <Controllers />
        </AudioProvider>
      </PlayerProvider>
    </main>
  );
}
