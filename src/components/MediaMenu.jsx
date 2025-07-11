import React from 'react';
import '@styles/media-menu.css';

const services = [
  { name: 'Торренты(Plowlarr)', link: '192.168.1.45:9696' },
  { name: 'Скачать фильмы(Radarr)', link: '192.168.1.45:7878' },
  { name: 'Скачать сериалы(Sonarr)', link: '192.168.1.45:8989' },
  { name: 'Просмотреть медиатеку(Jellyfin)', link: '192.168.1.45:8096' },
  { name: 'Настройки', link: '#' },
];

const MediaMenu = () => {
  return (
    <nav className="media-menu">
      <ul>
        {services.map((service) => (
          <li key={service.name}>
            <a href={service.link}>{service.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MediaMenu;
