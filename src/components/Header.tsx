import React from 'react';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import YouTubeIcon from './YouTubeIcon';

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">KASHNA</div>
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
        </div>
      </header>
    </div>
  );
};

export default Header;
