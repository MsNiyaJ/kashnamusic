import React from 'react';

interface IVideo {
  src: string;
  title: string;
}

const Video = ({ src, title }: IVideo) => {
  return (
    <div className="video-container">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
      <h2>{title}</h2>
    </div>
  );
};

export default Video;
