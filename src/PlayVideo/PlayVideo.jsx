import React from 'react'
import './PlayVideo.css'
import * as assets from '../assets/assets.jsx'

export const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={assets.video} controls autoPlay muted></video>
        <h3>Best YouTube Channel to learn web Development</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={assets.like} alt="" />12k</span>
                <span><img src={assets.dislike} alt="" />2</span>
                <span><img src={assets.share} alt="" />Share</span>
                <span><img src={assets.save} alt="" />Save</span> 
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={assets.jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="video-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe GreatStack to watch more tutorial on web development</p>
            <hr />
            <h4>130 comments</h4>
            <div className='comments'>
                <img src={assets.userProfile} alt="" />
                <div>
                    <h3>
                        Jack Nicolson <span>1 day ago</span>
                    </h3>
                    <p>A global computer network providing a variety of information and communication of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={assets.like} alt="" />
                        <span>244</span>
                        <img src={assets.dislike} alt="" />
                    </div>
                </div>
            </div>

            <div className='comments'>
                <img src={assets.userProfile} alt="" />
                <div>
                    <h3>
                        Jack Nicolson <span>1 day ago</span>
                    </h3>
                    <p>A global computer network providing a variety of information and communication of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={assets.like} alt="" />
                        <span>244</span>
                        <img src={assets.dislike} alt="" />
                    </div>
                </div>
            </div>

            <div className='comments'>
                <img src={assets.userProfile} alt="" />
                <div>
                    <h3>
                        Jack Nicolson <span>1 day ago</span>
                    </h3>
                    <p>A global computer network providing a variety of information and communication of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={assets.like} alt="" />
                        <span>244</span>
                        <img src={assets.dislike} alt="" />
                    </div>
                </div>
            </div>

            <div className='comments'>
                <img src={assets.userProfile} alt="" />
                <div>
                    <h3>
                        Jack Nicolson <span>1 day ago</span>
                    </h3>
                    <p>A global computer network providing a variety of information and communication of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={assets.like} alt="" />
                        <span>244</span>
                        <img src={assets.dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
