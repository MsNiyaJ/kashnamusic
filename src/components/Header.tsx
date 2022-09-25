import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import TwitterIcon from './icons/TwitterIcon';
import YouTubeIcon from './YouTubeIcon';

const Header = () => {
  return (
    <header className="header">
      <div className="social-links">
        {/* All icons retrieved from https://icons8.com/icons */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/kashnamusic/"
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCMKKsbjrQZ9yOpmtfI5TdwQ"
        >
          <YouTubeIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Kashnamusic"
        >
          <TwitterIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://open.spotify.com/artist/5PqPTQXIYueKjSq2GULsHO?si=OoKYfPdzRI2XbiHj6tKruA"
        >
          <SpotifyIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
