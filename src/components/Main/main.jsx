import React from 'react'
import TopBar from './topbar'
import Greetings from './greetings'
import LastPlayed from './lastPlayed'
import BackIn from './backIn'
const Main = () => {
  return (
    <main className='w-full py-2 pl-0 pr-4'>
        <div className='flex flex-col h-full bg-gradient-to-b from-[#1D0E46] from-30% to-[#121212] to-40% rounded-lg py-4 px-6 gap-6 overflow-auto'>
          <TopBar />
          <Greetings />
          <LastPlayed />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
          <BackIn />
        </div>
    </main>
  )
}

export default Main