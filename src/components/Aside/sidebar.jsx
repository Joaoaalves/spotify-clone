import React from 'react'
import {MdHomeFilled} from 'react-icons/md'
import {BiSearch, BiLibrary, BiPlus, BiRightArrowAlt} from 'react-icons/bi'
import {AiFillCaretDown} from 'react-icons/ai'
import Playlist from './playlist'

const Sidebar = () => {

  return (
    <aside className='flex flex-col h-full gap-2 p-2 w-72 text-gray-400'>
        <nav className='space-y-4 w-full py-4 bg-zinc-900 rounded-lg' >

            <a className='flex items-center px-4 gap-4 w-full font-medium text-white hover:text-white' href="#">
                <MdHomeFilled className='w-8 h-8' />
                Home
            </a>
            <a className='flex items-center px-4 gap-4 w-full font-medium hover:text-white' href="#">
                <BiSearch className='w-8 h-8' />
                Search
            </a>
        </nav>
        <nav className='flex flex-col gap-4 w-full h-full py-4 bg-zinc-900 rounded-lg'>
            <div className='flex items-center px-4'>
                <a className='flex items-center gap-2 w-full font-medium hover:text-white' href="#">
                    <BiLibrary className='w-8 h-8' />
                    Your Library
                </a>

                <a className='font-light hover:text-white' href="#">
                    <BiPlus className='w-6 h-6' />
                </a>

                <a className='font-light hover:text-white' href="#">
                    <BiRightArrowAlt className='w-6 h-6' />
                </a>

            </div>

            <div className='flex justify-items-start gap-2 w-full p-4'>
                <a className='bg-neutral-600 p-2 rounded-full w-24 text-center text-white text-sm hover:bg-neutral-500' href="#">
                    Playlists
                </a>
                <a className='bg-neutral-600 p-2 rounded-full w-24 text-center text-white text-sm hover:bg-neutral-500' href="#">
                    Artists
                </a>
                <a className='bg-neutral-600 p-2 rounded-full w-24 text-center text-white text-sm hover:bg-neutral-500' href="#">
                    Albums
                </a>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex px-4'>
                    <a className='flex items-center gap-2 w-full text-sm' href="#">
                        <BiSearch className='w-6 h-6' />
                    </a>

                    <a className='flex items-center gap-2 text-sm text-white' href="#">
                        Recents
                        <AiFillCaretDown className='w-4 h-4' />
                    </a>
                </div>

                <div className='flex flex-col gap-2 w-full px-2'>
                    <Playlist name="Liked Songs" type="Playlist" info="100 Songs" img="liked-song.png" />
                    <Playlist name="Playlist" type="Playlist" info="João Alves" img="playlist-cover.jpg" />
                    <Playlist name="Playlist" type="Playlist" info="João Alves" img="playlist-cover.jpg" />
                    <Playlist name="Playlist" type="Playlist" info="João Alves" img="playlist-cover.jpg" />
                    <Playlist name="Playlist" type="Playlist" info="João Alves" img="playlist-cover.jpg" />
                    <Playlist name="Playlist" type="Playlist" info="João Alves" img="playlist-cover.jpg" />
                    <Playlist name="Playlist" type="Playlist" info="João Alves" img="playlist-cover.jpg" />
                </div>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar