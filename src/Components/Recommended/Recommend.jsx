import { React, useEffect, useState } from "react";

import "./Recommend.css";
import moment from "moment";
import { API_KEY } from "../../env.js";
import { Link } from "react-router-dom";
import { convertViewCount } from "../../Data/helper.jsx";

export const Recommend = ({ categoryId }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const endpointUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
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
                <Link key={indx} className="side-video-list" to={`/video/${item.snippet.categoryId}/${item.id}`}>
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
                </Link>
            );
          })
        : "Loading..."}
    </div>
  );
};
