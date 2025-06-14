import "./Feed.css";
import React, { useEffect, useState } from "react";
import * as assets from "../../assets/assets.jsx";
import { Link } from "react-router-dom";
import { API_KEY } from "../../env.js";
import { convertViewCount } from "../../Data/helper.jsx";
import moment from "moment";

export const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const endpointUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const response = await fetch(endpointUrl)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);



  return (
    <div className="feed">
      {data.map((item, indx) => {
        return (
          <Link key={indx} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.standard.url} alt="" />
            <h2>
              {item.snippet.title}
            </h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{convertViewCount(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};
