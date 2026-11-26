import React from 'react';
import { 
  Play, Pause, Music, DownloadCloud, Check, 
  ShoppingBag, Sparkles, Smartphone, Terminal,
  Sliders, Bell, Layers, ShieldCheck, Heart,
  Cpu, ArrowUpRight
} from 'lucide-react';
import BoMusicCarousel from './BoMusicCarousel';
import BoDownloaderVisual from './BoDownloaderVisual';
import BoulouizShopCarousel from './BoulouizShopCarousel';

export default function ProjectCardVisual({ demoType, accentColor, title }) {
  if (demoType === 'audio-player') {
    return <BoMusicCarousel />;
  }

  if (demoType === 'downloader') {
    return <BoDownloaderVisual />;
  }

  if (demoType === 'ecommerce') {
    return <BoulouizShopCarousel />;
  }

  // Fallback: Design Storefront
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900 p-4 flex flex-col justify-between border border-zinc-800 text-white select-none">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
          <span className="font-mono-accent text-[11px] uppercase tracking-wider text-zinc-300">Design Storefront // Assets</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-mono-accent">
          Ballwool & Creative Market
        </span>
      </div>

      {/* Middle: Asset Showcase & Mockup Badges */}
      <div className="my-auto grid grid-cols-3 gap-2">
        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-1">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-zinc-200">Vector PNG</span>
          <span className="text-[8px] text-zinc-400 font-mono-accent">300 DPI Transparent</span>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mb-1">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-zinc-200">Apparel Mockup</span>
          <span className="text-[8px] text-zinc-400 font-mono-accent">3D Realistic</span>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-1">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-zinc-200">Video Reels</span>
          <span className="text-[8px] text-zinc-400 font-mono-accent">Kinetic Motion Ads</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] font-mono-accent text-zinc-400">
        <span>Commercial Assets</span>
        <span className="text-purple-400 font-semibold">100% Original Vector Art</span>
      </div>
    </div>
  );
}
