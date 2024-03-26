import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";
import LastPlayed from "./LastPlayed";
import JumpBackIn from "./JumpBackIn";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function MainPanel() {
  return (
    <ScrollArea className="gradient-main px-5 py-4 flex flex-col items-start justify-start rounded-lg gap-y-5 w-full h-full">
      <div className="flex items-center justify-between w-full">
        <NavigationButtons />
        <InfoMenu />
      </div>
      <LastPlayed />
      <JumpBackIn />
    </ScrollArea>
  );
}

function NavigationButtons(){
  return (
    <div className="flex items-center justify-center gap-x-2">
      <NavigationButton>
        <BsChevronLeft className="text-xl"/>
      </NavigationButton>
      <NavigationButton className="bg-bg/40 cursor-not-allowed">
        <BsChevronRight className="text-xl"/>
      </NavigationButton>
    </div>
  )
}

function NavigationButton({children, className = ""}){
  return (
    <button className={`flex items-center justify-center w-8 h-8 bg-bg rounded-full text-text  transition duration-300 ease-in-out ${className}`}>
      {children}
    </button>
  )
}

function InfoMenu(){
  return (
    <div className="flex items-center justify-center gap-x-2">
      <Notifications />
      <Profile />
    </div>
  )
}

function Notifications(){
  return (
    <ButtonFrame>
      <GoBell className="text-xl"/>
    </ButtonFrame>
  )
}

function Profile(){
  return (
  <ButtonFrame>
    <FaUserCircle className="text-xl"/>
  </ButtonFrame>
  )
}

function ButtonFrame({children}){
  return(
    <div className="rounded-full bg-[#111417] w-8 h-8 flex items-center justify-center text-secondary">
      {children}
    </div>
  )
}