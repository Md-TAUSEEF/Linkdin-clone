import React from "react";
import "./Youtube.css";
import bell from './img/bell.PNG';
import explore from './img/explore.PNG';
import grid from './img/grid.PNG';
import history from './img/history.PNG';
import home from './img/home.PNG';
import library from './img/library.PNG';
import liked  from './img/liked video.PNG';
import logo from './img/logo.PNG';
import profile from './img/profile-pic.png'
import search from './img/search.PNG';
import subscription from './img/subscription.PNG'
import show from './img/show more.PNG';
import video from './img/video.PNG';
import watch from './img/watch-later.PNG';
import your from './img/your-video.PNG';
import { useState } from "react";
import { useEffect } from "react";
const Youtube = () => {

  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_key = "AIzaSyBBP30RYmmMbVYHCc-uxrbImPWynaeC12Q";
        const video_http = "https://www.googleapis.com/youtube/v3/videos?";
        const channel_http = "https://www.googleapis.com/youtube/v3/channels?";

        const videoResponse = await fetch(
          video_http +
            new URLSearchParams({
              key: api_key,
              part: "snippet",
              chart: "mostPopular",
              maxResults: 50,
              regionCode: "IN",
            })
        );
        const videoData = await videoResponse.json();

        const videosWithChannelData = await Promise.all(

          videoData.items.map(async (video) => {
            const channelResponse = await fetch(
              channel_http +
                new URLSearchParams({
                  key: api_key,
                  part: "snippet",
                  id: video.snippet.channelId,
                })
            );
            const channelData = await channelResponse.json();
            video.channelThumbnail =
              channelData.items[0].snippet.thumbnails.default.url;
            return video;
          })
        );

        setVideos(videosWithChannelData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        searchInput
      )}`;
    }
  };


  return (

    
    <>
      <nav class="navbar">
        <div class="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={logo} class="logo" alt="this is my logo image" />
        <div class="search-box">
          <input type="text" class="search-bar" placeholder="search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
          <button class="search-btn" onClick={handleSearch}>
            <img src={search} alt="this is my search image"  />
          </button>
        </div>
        <div class="user-options">
          <img src={video} class="icon" alt="this is my video icon" />
          <img src={grid} class="icon" alt="this is my grid icon" />
          <img src={bell} class="icon" alt="" />
          <div class="user-dp">
            <img src={profile} alt="this is y profile logo" />
          </div>
        </div>
      </nav>

      {/* <!-- sidebar --> */}
      <div class="side-bar">
        <a href="#" class="links active">
          <img src={home} alt="this is my home logo" />
          home
        </a>
        <a href="#" class="links">
          <img src={explore} alt="this is my explore logo" />
          explore
        </a>
        <a href="#" class="links">
          <img src={subscription} alt="this is my subscription icon" />
          subscription
        </a>
        <hr class="seperator" />
        <a href="#" class="links">
          <img src={library} alt="this is my library icon" />
          library
        </a>
        <a href="#" class="links">
          <img src={history} alt="this is my history icon" />
          history
        </a>
        <a href="#" class="links">
          <img src={your} alt=" this is my video icon" />
          your video
        </a>
        <a href="#" class="links">
          <img src={watch} alt="this is my watch later icon" />
          watch leater
        </a>
        <a href="#" class="links">
          <img src={liked} alt="this is my liked icon" />
          like video
        </a>
        <a href="#" class="links">
          <img src={show} alt="this is my show more icon" />
          show more
        </a>
      </div>

      {/* <!-- filters --> */}
      <div class="filters">
        <button class="filter-options active">all</button>
        <button class="filter-options">CSS</button>
        <button class="filter-options">web development</button>
        <button class="filter-options">python</button>
        <button class="filter-options">entertainment</button>
        <button class="filter-options">marvel</button>
        <button class="filter-options">javascript</button>
        <button class="filter-options">artificial intelligence</button>
        <button class="filter-options">machine learning</button>
        <button class="filter-options">trending</button>
      </div>

      {/* <!-- videos --> */}
      <div className="video-container">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video"
            onClick={() => {
              window.location.href = `https://youtube.com/watch?v=${video.id}`;
            }}
          >
            <img
              src={video.snippet.thumbnails.high.url}
              className="thumbnail"
              alt=""
            />
            <div className="content">
              <img
                src={video.channelThumbnail}
                className="channel-icon"
                alt=""
              />
              <div className="info">
                <h4 className="title">{video.snippet.title}</h4>
                <p className="channel-name">{video.snippet.channelTitle}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </>
  );
};

export default Youtube;
