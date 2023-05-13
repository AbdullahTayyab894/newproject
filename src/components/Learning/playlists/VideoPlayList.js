
import React, { useState, useRef } from "react";
import { VideoData } from '../VideoApi';
import './VideoPlayList.css'

import replay from '../../../images/video/replay.png'
import link from '../../../images/video/link.png'
import reverse from '../../../images/video/reverse.png'
import forward from '../../../images/video/forward.png'
import volum from '../../../images/video/volume.png'
import fullscreen from '../../../images/video/fullscreen.png'
import play from '../../../images/video/paly.png'
import CategoryButton from '../category button/CategoryButton'
import SuggestedCategory from "../suggested category/SuggestedCategory";

const VideoPlayList = () => {
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const [selectedVideoName, setSelectedVideoName] = useState(VideoData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeOptions, setShowVolumeOptions] = useState(false);
  const [category, setCategory] = useState('');

  const videoRef = useRef(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setSelectedVideoName(video)
    setCategory(video.category)
    setIsPlaying(false);
    setCurrentTime(0);
  };


  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const handleReplay = () => {
    setCurrentTime(0);
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  const handleBackward = () => {
    const newTime = currentTime - 10;
    setCurrentTime(newTime < 0 ? 0 : newTime);
    videoRef.current.currentTime = newTime < 0 ? 0 : newTime;
  };

  const handleForward = () => {
    const newTime = currentTime + 10;
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleVolumeButtonClick = () => {
    setShowVolumeOptions(!showVolumeOptions);
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
    videoRef.current.volume = parseFloat(event.target.value);
  };

  return (
    <>
      <div>
        <CategoryButton />
      </div>
      <div className="main">
        <div className="sidebar">
          <div>
            <video className="sidebar-video"
              src={selectedVideo.video}
              muted
              autoPlay={false}
              loop
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sidebar-button">
            <button className="sidebar-btn1">Module</button>
            <button className="sidebar-btn2">Notes</button>
            <button className="sidebar-btn3">Quiz/Assessment</button>
          </div>
          <h3 style={{
            textAlign: "center",
            paddingTop: "20px"
          }}>Module 1</h3>
          <div className="sidebar-course">
            <ul>
              {VideoData.map((video) => (
                <div key={video.id} onClick={() => handleVideoSelect(video)}>
                  <li>
                    {video.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <button className="sidebar-btn4">See More</button>
        </div>

        <div className="main-section">
          <h2 className="video-name">{selectedVideoName.name}</h2>
          <video className="play-video"
            ref={videoRef}
            src={selectedVideo.video}
            controls={false}
            onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
          />
          <div className="video-controls">
            <div className="video-controls-first-child">
              <img src={replay} onClick={handleReplay} width="32px" height="32px" />
            </div>
            <div className="video-controls-second-child">
              <img src={link} width="17px" height="16px" />
              <img src={reverse} onClick={handleBackward} width="28px" height="20px" />
              <img className="pasue-button" src={play} onClick={isPlaying ? handlePause : handlePlay} width="87px" height="86px" />
              <img src={forward} onClick={handleForward} width="28px" height="20px" />
              <div className="volume-control">
                <img src={volum} onClick={handleVolumeButtonClick} width="20px" height="16px" />
                {showVolumeOptions && (
                  <div className="volume-options">
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.1}
                      value={volume}

                      onChange={handleVolumeChange}
                    />
                  </div>
                )}
              </div>
              <div className="video-controls-third-child">
                <img src={fullscreen} onClick={handleFullscreen} width="36px" height="36px" />
              </div>
            </div>
          </div>
          <div className="course-detail">
            <h5>Don’t give up! Here is your journey so far:</h5>
            <div>
              <h5>Total Modules: 6</h5>
              <h5>Completed Modules: 3</h5>
              <h5>In-progress Modules: 3</h5>
            </div>
            <h4>Total  Course Time: 14hrs : 30mins</h4>
            <h4>Time Remaining:  7hrs : 20mins</h4>
          </div>
        </div>
      </div>
      <div>
        <SuggestedCategory category={category} />
      </div>
    </>
  );
};

export default VideoPlayList;
