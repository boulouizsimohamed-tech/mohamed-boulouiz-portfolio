import React from 'react';
import BannerCarousel from './BannerCarousel';

export const BOULOUIZ_SHOP_BANNERS = [
  {
    id: 'editorial-hero',
    src: '/images/boulouiz-shop/banner-1-hero.jpg',
    title: 'Editorial Luxury Storefront',
    subtitle: 'Dress like you mean it — Spring/Summer Atelier Edition.',
    badge: 'Atelier Hero',
    alt: "BOULOUIZ SHOP editorial hero section displaying the 'Dress like you mean it' headline, signature quality rating badge, and luxury gold-accented dark UI."
  },
  {
    id: 'atelier-catalog',
    src: '/images/boulouiz-shop/banner-2-catalog.jpg',
    title: 'Dynamic Catalog & Filtering',
    subtitle: 'Filter by category, size, color, price range, and brand.',
    badge: 'Smart Filtering',
    alt: "BOULOUIZ SHOP product catalog featuring sidebar filters for category, size, color, price range, and brand alongside product cards like Monogram Leather Bag and Gold Line Sneaker."
  },
  {
    id: 'command-center',
    src: '/images/boulouiz-shop/banner-3-admin.jpg',
    title: 'Atelier Command Center',
    subtitle: 'Real-time orders, inventory alerts, bonus codes, and seasonal themes.',
    badge: 'Admin Dashboard',
    alt: "BOULOUIZ SHOP Admin Command Center displaying live revenue, order counts, low stock alerts, and a Winter Couture Edition snowfall toggle."
  },
  {
    id: 'client-space',
    src: '/images/boulouiz-shop/banner-4-auth.jpg',
    title: 'Client Space & Authentication',
    subtitle: 'Bespoke curation, Google OAuth sign-in, and interactive mascot UI.',
    badge: 'Client Portal',
    alt: "BOULOUIZ SHOP client sign-in portal with gold accents, Google authentication, and an interactive bear mascot peeking over the login form."
  }
];

export default function BoulouizShopCarousel() {
  return (
    <BannerCarousel
      banners={BOULOUIZ_SHOP_BANNERS}
      brandLabel="BOULOUIZ SHOP"
      accent="amber"
    />
  );
}
