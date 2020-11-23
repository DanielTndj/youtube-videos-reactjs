import React from "react";

const VideoDetail = ({ videoDetail }) => {
  if (!videoDetail) {
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${videoDetail.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title='video player' src={videoSrc} frameborder="0"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoDetail.snippet.title}</h4>
        <p>{videoDetail.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
