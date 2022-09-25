import React from 'react';
import { videos } from '../videos';
import Video from './Video';

const Videos = () => {
  return (
    <div id="videos">
      <h1>KASHNA MUSIC</h1>
      {videos.map((video) => (
        <Video key={video.id} src={video.src} title={video.title} />
      ))}
    </div>
  );
};

export default Videos;
