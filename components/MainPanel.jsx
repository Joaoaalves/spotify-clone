import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";
import { LuClock,LuPlus,LuStar } from "react-icons/lu";
import { IoPlaySharp } from "react-icons/io5";

export default function MainPanel() {
  return (
    <div className="gradient-main px-5 py-4 flex flex-col items-start justify-start rounded-lg gap-y-5">
      <div className="flex items-center justify-between w-full">
        <NavigationButtons />
        <InfoMenu />
      </div>
      <LastPlayed />
      <JumpBackIn />
    </div>
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

function LastPlayed(){
  return (
    <div className="w-full my-2 grid grid-cols-4 grid-rows-2 gap-4">
      <LastPlayedItem title={'Anyma'}/>
      <LastPlayedItem title={'Anyma'}/>
      <LastPlayedItem title={'Anyma'}/>
      <LastPlayedItem title={'Songs Liked'}/>
      <LastPlayedItem title={'Anyma'}/>
      <LastPlayedItem title={'Anyma'}/>
      <LastPlayedItem title={'Anyma'}/>
      <LastPlayedItem title={'Anyma'}/>
    </div>
  )
}

function LastPlayedItem({title}){
  return (
    <div className="group flex items-center justify-start gap-x-4 rounded-md bg-text/5 cursor-pointer">
      <div className="w-16 h-16 bg-primary rounded-l-md" />
      <span className="text-text/95">{title}</span>
      <button className="hidden group-hover:flex items-center justify-center rounded-full w-12 h-12 bg-primary ms-auto me-2 shadow-[0px_4px_4px_2px_rgba(0,0,0,0.2)] hover:scale-110 transition duration-150 ease-in-out">
        <IoPlaySharp className="text-2xl text-bg ms-1"/>
      </button>
    </div>
  )
}


function JumpBackIn(){
  return (
    <div className="w-full my-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl hover:underline font-black cursor-pointer">Jump back in</h2>

        <a className="text-secondary font-bold text-sm cursor-pointer hover:underline">Show all</a>
      </div>  

      <div className="flex items-center justify-center">
        <Cover>
          <Artist />
          <TrackDetails title="Anyma" description="Artist"/>
        </Cover>
        <Cover>
          <Track />
          <TrackDetails title="Running" description="Anyma"/>
        </Cover>
        <Cover>
          <Artist />
          <TrackDetails title="Kevin de Vries" description="Artist"/>
        </Cover>
        <Cover>
          <Track />
          <TrackDetails title="Vibrate / On The Ground" description="James Hype, Tita Lau"/>
        </Cover>
        <Cover>
          <Track />
          <TrackDetails title="Aran" description="Cassian"/>
        </Cover>
        <Cover>
          <Track />
          <TrackDetails title="Eletronic Music" description="The success and the big news of the electronic music."/>
        </Cover>
        <Cover>
          <Track />
          <TrackDetails title="Martin Garrix" description="Artist"/>
        </Cover>
        <Cover>
          <Track />
          <TrackDetails title="Night Rain" description="Sleep with sounds of pouring rain and occasional rolling thunder.
"/>
        </Cover>
      </div>
    </div>
  )
}

function Cover({children}){
  return (
    <div className="group flex flex-col items-start justify-start gap-y-2 p-3 min-w-[12.5%] h-72 hover:bg-muted/40 rounded-lg cursor-pointer trasition duration-300 ease-in-out">
      {children}
    </div>
  )
}

function Track(){
    return (
      <div className="rounded-md bg-bg w-40 h-40 self-center transition duration-300 ease-in-out group-hover:shadow-[0px_6px_8px_4px_rgba(0,0,0,0.2)]">

      </div>
    )
}

function Artist(){
  return (
    <div className="w-40 h-40 bg-primary rounded-full self-center transition duration-300 ease-in-out group-hover:shadow-[0px_6px_8px_4px_rgba(0,0,0,0.2)]">

   </div>
  )
}

function TrackDetails({title, description}){
  return (
    <div className="flex flex-col items-start justify-start gap-y-2">
      <span className="text-text/95 truncate w-36">{title}</span>
      <p className="text-secondary text-sm w-36 line-clamp-2">{description}</p>
    </div>
  )
}