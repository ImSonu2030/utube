import React from 'react'
import "./Video.css"
import { PlayVideo } from '../../PlayVideo/PlayVideo'
import { Recommend } from '../../Components/Recommended/Recommend'
import { useParams } from 'react-router-dom'

export const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommend categoryId={categoryId}/>
    </div>
  )
}
