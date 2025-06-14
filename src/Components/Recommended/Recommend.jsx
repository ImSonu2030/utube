import { React, useEffect, useState } from "react";

import "./Recommend.css";
import { API_KEY } from "../../env.js";
import * as assets from "../../assets/assets.jsx";
import { convertViewCount } from "../../Data/helper.jsx";
import { Link } from "react-router-dom";
import moment from "moment";

export const Recommend = ({ categoryId }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const endpointUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const response = await fetch(endpointUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.items);
      });
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);
  return (
    <div className="recommended">
      {data
        ? data.map((item, indx) => {
            return (
              <Link key={indx} to={`/video/${item.snippet.categoryId}/${item.id}`}>
                <div className="side-video-list">
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                  />
                  <div className="video-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <span>
                      <p>{convertViewCount(item.statistics.viewCount)} Views</p>
                      &bull;
                      <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })
        : "Loading..."}
    </div>
  );
};
