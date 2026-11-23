import React from 'react';
import { 
  Play, Pause, Music, DownloadCloud, Check, 
  ShoppingBag, Sparkles, Smartphone, Terminal,
  Sliders, Bell, Layers, ShieldCheck, Heart,
  Cpu, ArrowUpRight
} from 'lucide-react';
import BoMusicCarousel from './BoMusicCarousel';
import BoDownloaderVisual from './BoDownloaderVisual';

export default function ProjectCardVisual({ demoType, accentColor, title }) {
  if (demoType === 'audio-player') {
    return <BoMusicCarousel />;
  }

  if (demoType === 'downloader') {
    return <BoDownloaderVisual />;
  }

  if (demoType === 'ecommerce') {
    return (
      <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900 p-4 flex flex-col justify-between border border-zinc-800 text-white select-none">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top: BOULOUIZ SHOP Header */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <span className="font-mono-accent text-[11px] uppercase tracking-wider text-zinc-300">BOULOUIZ SHOP // Next.js</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono-accent">
            MySQL 3NF Normalized
          </span>
        </div>

        {/* Middle: Luxury Apparel Lookbook Preview */}
        <div className="my-auto flex items-center gap-4">
          <div className="w-20 h-24 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-2 relative overflow-hidden group">
            <div className="text-2xl font-black font-display text-zinc-700 tracking-tighter">BZ</div>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 mt-1">Hoodie</span>
            <div className="absolute bottom-1 bg-blue-500 text-zinc-950 font-bold text-[8px] px-1 rounded">
              SKU-094
            </div>
          </div>

          <div className="flex flex-col space-y-1.5 flex-1">
            <span className="text-xs font-mono-accent text-zinc-400 uppercase tracking-widest">Minimalist Collection</span>
            <span className="font-display font-bold text-sm sm:text-base text-zinc-100">
              Heavyweight Boxy Hoodie
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono-accent font-bold text-blue-400 text-sm">$89.00</span>
              <span className="text-[10px] text-zinc-500 line-through">$120.00</span>
            </div>

            {/* Size pills */}
            <div className="flex items-center gap-1.5 pt-1">
              {['S', 'M', 'L', 'XL'].map((size, idx) => (
                <span
                  key={size}
                  className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono-accent font-semibold ${
                    idx === 1 
                      ? 'bg-blue-500 text-zinc-950 font-bold' 
                      : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] font-mono-accent text-zinc-400">
          <span>Cart Status: 2 items in Bag</span>
          <span className="text-blue-400 font-semibold">ACID Transaction Verified</span>
        </div>
      </div>
    );
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
