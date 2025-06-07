import React from 'react'
import "./Video.css"
import { PlayVideo } from '../../PlayVideo/PlayVideo'
import { Recommend } from '../../Components/Recommended/Recommend'

export const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommend/>
    </div>
  )
}
