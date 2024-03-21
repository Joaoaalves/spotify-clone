import { PiHouse } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

import { LuLibrary,LuPlus  } from "react-icons/lu";
import { FaArrowRight,FaListUl  } from "react-icons/fa6";



export default function Sidepanel() {
  return (
    <aside className="grid grid-rows-[7rem_1fr] grid-cols-[1fr] pb-2">
      <Nav />

      <Library />
    </aside>
  );
}

function Nav(){
  return <nav className="bg-container rounded-lg w-full">
    <ul className="w-full flex flex-col items-center justify-center py-1">
      <li className="flex items-center justify-start gap-x-4 py-3 px-5 w-full text-secondary hover:text-text transition duration-300 ease-in-out">
        <PiHouse className="text-3xl"/>
        <a href="/">Home</a>
      </li>
      <li className="flex items-center justify-start gap-x-4 py-3 px-5 w-full text-secondary hover:text-text transition duration-300 ease-in-out">
        <IoIosSearch className="text-3xl"/>
        <a href="/search">Search</a>
      </li>
    </ul>
  </nav>
}

function Library(){
  return <div className="bg-container rounded-lg h-full my-2">
    <LibraryHeader />
    <LibraryTags />
    <LibrarySearch />
    <LibraryLists />
  </div>
}

function LibraryHeader(){
  return <div className="flex items-center justify-between w-full py-1">
    <div className="flex items-center gap-x-2 px-5 w-full text-secondary hover:text-text transition duration-300 ease-in-out cursor-pointer">
      <LuLibrary className="text-3xl"/>
      <h2 className="mt-1">Library</h2>
    </div>

    <div className="flex items-center justify-center gap-x-5 py-3 px-7 text-secondary">
      <LuPlus className="text-3xl hover:bg-muted rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"/>
      <FaArrowRight className="text-3xl hover:bg-muted rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"/>
    </div>
  </div>
}

function LibraryTags(){
  return <ul className="w-full flex items-center justify-start gap-x-2 px-4 mt-3">
    <LibraryTag text="Playlists"/>
    <LibraryTag text="Songs"/>
    <LibraryTag text="Albums"/>
  </ul>
}

function LibraryTag({text}){
  return <li className="py-1.5 px-3 text-text bg-muted rounded-full text-sm flex flex-col font-normal hover:bg-hover cursor-pointer transition duration-300 ease-in-out">
    {text}
  </li>
}

function LibrarySearch(){
  return <div className="flex items-center justify-between gap-x-2 py-5 px-5 w-full text-secondary">
    <SearchInput />

    <button className="text-secondary flex items-start justify-center gap-x-2 hover:scale-110 hover:text-text transition duration-150 ease-in-out">
      Recent
      <FaListUl className="text-xl"/>
    </button>
  </div>
}

function SearchInput(){
  return (
    <div className="group hover:bg-hover w-3/4 flex items-center justify-start transition duration-300 ease-in-out rounded p-0.5">
      <IoIosSearch className="text-2xl"/>
      <input
        type="text"
        placeholder="Search"
        className="w-0 group-hover:w-full bg-[#00000000] group-hover:bg-hover border-none outline-none text-secondary text-xs transition duration-300 ease-in-out"
      />
    </div>
  )
}

function LibraryLists(){
  return <ul className="w-full flex flex-col items-center justify-center py-1">
    <LibraryListItem icon={<LuLibrary className="text-3xl"/>} title="Made For You" link="/made-for-you"/>
    <LibraryListItem icon={<LuLibrary className="text-3xl"/>} title="Recently Played" link="/recently-played"/>
    <LibraryListItem icon={<LuLibrary className="text-3xl"/>} title="Liked Songs" link="/liked-songs"/>
    <LibraryListItem icon={<LuLibrary className="text-3xl"/>} title="Albums" link="/albums"/>
    <LibraryListItem icon={<LuLibrary className="text-3xl"/>} title="Artists" link="/artists"/>
    <LibraryListItem icon={<LuLibrary className="text-3xl"/>} title="Podcasts" link="/podcasts"/>
</ul>
}

function LibraryListItem({icon, title, link}){
  return <li className="flex items-center justify-start gap-x-4 py-3 px-5 w-full text-secondary">
    <div className="rounded-lg w-12 h-12 bg-primary"/>
    <a href={link}>{title}</a>
  </li>
}