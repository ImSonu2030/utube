import React, { useEffect, useState } from "react";

import "./PlayVideo.css";
import { API_KEY } from "../env.js";
import * as assets from "../assets/assets.jsx";
import { convertViewCount } from "../Data/helper.jsx";
import moment from "moment";

export const PlayVideo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const fetchVideoData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideoData(data.items[0]);
      });
  };

  const fetchChannelData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${API_KEY}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setChannelData(data.items[0]);
      });
  };

  const fetchCommentThreads = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&order=relevance&videoId=${videoId}&key=${API_KEY}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const commentdata = data.items.map(
          (item) => item.snippet.topLevelComment
        );
        setCommentData(commentdata);
      });
  };

  useEffect(() => {
    fetchVideoData();
    fetchCommentThreads();
  }, []);

  useEffect(() => {
    if (videoData) {
      fetchChannelData();
    }
  }, [videoData]);

  const copyLinktoClipboard = () => {
    const videourl = window.location.href;
    navigator.clipboard
      .writeText(videourl)
      .then(() => alert("Link Copied successfully!"))
      .catch((err) => console.error("Failed to copy URL.", err));
  };

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
        // frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>

      <h3>{videoData ? videoData.snippet.title : "..."}</h3>
      {videoData && (
        <>
          <div className="play-video-info">
            <p>
              {convertViewCount(videoData.statistics.viewCount)} Views &bull;{" "}
              {moment(videoData.snippet.publishedAt).fromNow()}
            </p>
            <div>
              <span>
                <img src={assets.like} alt="" />
                {convertViewCount(videoData.statistics.likeCount)}
              </span>
              <span>
                <img src={assets.dislike} alt="" />
              </span>
              <span onClick={copyLinktoClipboard}>
                <img src={assets.share} alt="" />
                Share
              </span>
              <span>
                <img src={assets.save} alt="" />
                Save
              </span>
            </div>
          </div>
          <hr />
          {channelData ? (
            <div className="publisher">
              <img src={channelData.snippet.thumbnails.medium.url} alt="" />
              <div>
                <p>{videoData.snippet.channelTitle}</p>
                <span>
                  {convertViewCount(channelData.statistics.subscriberCount)}{" "}
                  Subscribers
                </span>
              </div>
              <button>
                <a
                  href={`https://youtube.com/${channelData.snippet.customUrl}`}
                >
                  Subscribe
                </a>
              </button>
            </div>
          ) : (
            "Loading..."
          )}
          <div className="video-description">
            <p>{videoData.snippet.description}</p>
            <p>
              Subscribe GreatStack to watch more tutorial on web development
            </p>
            <hr />
            <h4>
              {videoData.statistics.commentCount} comments
            </h4>
            {commentData
              ? commentData.map((comment, indx) => {
                  return (
                    <div key={indx} className="comments">
                      <img src={comment.snippet.authorProfileImageUrl} alt="" />
                      <div>
                        <h3>
                          <a href={`https://www.youtube.com/${comment.snippet.authorDisplayName}`}>
                            {comment.snippet.authorDisplayName}
                          </a>
                          <span>
                            {moment(comment.snippet.publishedAt).fromNow()}
                          </span>
                        </h3>
                        <p>{comment.snippet.textDisplay}</p>
                        <div className="comment-action">
                          <span>
                            <img src={assets.like} alt="" />
                            {convertViewCount(comment.snippet.likeCount)}
                          </span>
                          <span>
                            <img src={assets.dislike} alt="" />
                          </span>
                          <span>
                            <img src={assets.reply} alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "Loading..."}
          </div>
        </>
      )}
    </div>
  );
};
