import React from 'react';
import { videos } from '../videos';
import Video from './Video';

const Videos = () => {
  return (
    <div className="videos-container">
      {videos.map((video) => (
        <Video key={video.id} src={video.src} title={video.title} />
      ))}
    </div>
  );
};

export default Videos;
