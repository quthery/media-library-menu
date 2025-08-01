

import React, { useState } from 'react';
import '@styles/media-menu.css';

const services = [
  { name: 'Торренты(Plowlarr)', link: '192.168.1.45:9696' },
  { name: 'Скачать фильмы(Radarr)', link: '192.168.1.45:7878' },
  { name: 'Скачать сериалы(Sonarr)', link: '192.168.1.45:8989' },
  { name: 'Просмотреть медиатеку(Jellyfin)', link: '192.168.1.45:8096' },
  { name: 'Настройки', link: '#' },
];

const MediaMenu = () => {
  const [showVideo, setShowVideo] = useState(false);
  const onClick = (service) => (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowVideo(true);
      if (service.link && service.link !== '#') {
        window.location.href = `http://${service.link}`;
      }
    }, 1000);
  };
  return (
    <>
      {showVideo && (
        <video
          src="/animation.mp4"
          autoPlay
          muted
          loop
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1,
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />
      )}
      <nav className="media-menu">
        <ul>
          {services.map((service) => (
            <li key={service.name}>
              <a
                href={service.link === '#' ? '#' : `http://${service.link}`}
                onClick={onClick(service)}
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MediaMenu;
