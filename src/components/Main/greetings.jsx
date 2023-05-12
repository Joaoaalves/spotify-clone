import { useState, useEffect } from "react"
import React from 'react'

const Greetings = () => {
    const [hours, setHours] = useState(new Date().getHours())

  return (
    <div>
        {hours < 12 && <h1 className='text-3xl font-bold text-white'>Good Morning</h1>}
        {hours >= 12 && hours < 18 && <h1 className='text-3xl font-bold text-white'>Good Afternoon</h1>}
        {hours >= 18 && <h1 className='text-3xl font-bold text-white'>Good Evening</h1>}
    </div>
  )
}

export default Greetings