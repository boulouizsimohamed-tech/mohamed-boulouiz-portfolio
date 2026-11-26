import React from 'react';
import BannerCarousel from './BannerCarousel';

export const BO_MUSIC_BANNERS = [
  {
    id: 'offline-playback',
    src: '/images/bo-music/banner-1-offline.jpg',
    title: 'Offline Playback Showcase',
    subtitle: 'No Internet. No Ads. Just pure sound.',
    badge: 'Lossless Audio Engine',
    alt: "BO Music Android app offline playback showcase featuring the 3D player UI, album artwork for 'Snowman - Sia', and a vinyl record graphic against a high-contrast dark teal glowing soundwave background."
  },
  {
    id: 'customizable-themes',
    src: '/images/bo-music/banner-2-themes.jpg',
    title: 'Customizable Themes',
    subtitle: 'Shape your sound, choose your vibe.',
    badge: 'Light & Dark Cyber UI',
    alt: "BO Music app interface personalization displaying Settings, dark/light toggle collection, and fluid 3D accent swirls representing customization and dynamic visual styles."
  },
  {
    id: 'in-app-updates',
    src: '/images/bo-music/banner-3-updates.jpg',
    title: 'In-App Auto-Updates',
    subtitle: 'Stay updated directly through GitHub Releases.',
    badge: 'v1.1.0+ GitHub OTA',
    alt: "BO Music app In-App Auto-Update feature showcasing the Version 1.1.0 update interface, a glowing cyber download icon, and Mohamed Boulouiz credit against a dark grid pattern."
  }
];

export default function BoMusicCarousel() {
  return (
    <BannerCarousel
      banners={BO_MUSIC_BANNERS}
      brandLabel="BO Music"
      accent="cyan"
      actionUrl="https://github.com/boulouizsimohamed-tech/BO-Music-Releases"
      actionLabel="Download APK"
    />
  );
}
