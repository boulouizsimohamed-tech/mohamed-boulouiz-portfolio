import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, Music, Volume2, 
  DownloadCloud, Download, Check, Sparkles, Smartphone, Layers, 
  ShoppingBag, ArrowRight, RefreshCw, Eye, Bell, 
  Sliders, ShieldCheck, Database, HardDrive, CheckCircle2
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function InteractiveDemos({ activeLab = 'audio-player' }) {
  const [selectedLab, setSelectedLab] = useState(activeLab);

  // Sync prop changes
  useEffect(() => {
    if (activeLab) setSelectedLab(activeLab);
  }, [activeLab]);

  // BO Music State
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTheme, setActiveTheme] = useState('gold'); // 'gold', 'emerald', 'dark', 'light'
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [notificationToast, setNotificationToast] = useState(null);

  // BO Downloader State
  const [downloadUrl, setDownloadUrl] = useState('https://video.source/watch?v=boulouiz-hd');
  const [downloadFormat, setDownloadFormat] = useState('1080p');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState('18.2 MB/s');

  // BOULOUIZ SHOP State
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Obsidian');
  const [cartCount, setCartCount] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [showDbSchema, setShowDbSchema] = useState(false);

  // Design Gallery State
  const [assetMode, setAssetMode] = useState('mockup'); // 'mockup' or 'png'

  // Trigger Notification Simulation
  const triggerNotification = () => {
    setNotificationToast("Daily Notification: 'Time for your evening chill playlist! 🎵'");
    setTimeout(() => {
      setNotificationToast(null);
    }, 4000);
  };

  // Download simulation timer
  const handleStartDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadProgress(5);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  // Add to cart simulation
  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  // Theme palettes for BO Music
  const themeStyles = {
    gold: {
      bg: 'bg-zinc-950',
      border: 'border-amber-500/40',
      accent: 'text-amber-400',
      btn: 'bg-amber-400 text-zinc-950',
      wave: 'bg-amber-400',
      label: 'Amber Gold'
    },
    emerald: {
      bg: 'bg-zinc-950',
      border: 'border-emerald-500/40',
      accent: 'text-emerald-400',
      btn: 'bg-emerald-400 text-zinc-950',
      wave: 'bg-emerald-400',
      label: 'Neon Emerald'
    },
    dark: {
      bg: 'bg-black',
      border: 'border-zinc-700',
      accent: 'text-white',
      btn: 'bg-white text-zinc-950',
      wave: 'bg-white',
      label: 'Pure Obsidian'
    },
    light: {
      bg: 'bg-zinc-100',
      border: 'border-zinc-300',
      accent: 'text-zinc-900',
      btn: 'bg-zinc-900 text-white',
      wave: 'bg-zinc-900',
      label: 'Porcelain White'
    }
  };

  const currentTheme = themeStyles[activeTheme];

  return (
    <section id="demos" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#070709] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-start max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono-accent text-zinc-600 dark:text-zinc-400 mb-3">
              <span>04 // INTERACTIVE LABS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 dark:text-white">
              Live Component & Architecture Labs.
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base">
              Test real simulated widgets: switch dynamic Flutter themes, trigger background media downloads, inspect normalized database schemas, and examine digital merchandise.
            </p>
          </div>
        </ScrollReveal>

        {/* Lab Switcher Navigation */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: 'audio-player', label: 'BO Music Player', icon: Music },
              { id: 'downloader', label: 'BO Media Downloader', icon: DownloadCloud },
              { id: 'ecommerce', label: 'BOULOUIZ E-Commerce', icon: ShoppingBag },
              { id: 'design-gallery', label: 'Merchandise Assets', icon: Sparkles }
            ].map((lab) => {
              const Icon = lab.icon;
              const isSelected = selectedLab === lab.id;
              return (
                <button
                  key={lab.id}
                  type="button"
                  onClick={() => setSelectedLab(lab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-md'
                      : 'bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{lab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Notification Toast Simulator */}
        {notificationToast && (
          <div className="mb-6 p-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-mono-accent flex items-center justify-between shadow-xl border border-zinc-700 animate-bounce">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400 dark:text-amber-600" />
              <span>{notificationToast}</span>
            </div>
            <span className="text-[10px] opacity-75">Simulated Push</span>
          </div>
        )}

        {/* ACTIVE LAB CONTAINER */}
        <ScrollReveal direction="up" delay={250}>
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 sm:p-10 shadow-2xl backdrop-blur-xs premium-card">
          
          {/* ================= LAB 1: BO MUSIC ================= */}
          {selectedLab === 'audio-player' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl text-zinc-950 dark:text-white flex items-center gap-2">
                    <Music className="w-6 h-6 text-amber-500" />
                    <span>BO Music // Flutter Audio & Video Engine</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Simulate the floating theme selector, mini-player collapse, and earphone controls.
                  </p>
                </div>

                {/* Floating Theme Selector Buttons */}
                <div className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <span className="text-[10px] font-mono-accent text-zinc-500 dark:text-zinc-400 px-2 uppercase">
                    Theme:
                  </span>
                  {[
                    { id: 'gold', color: 'bg-amber-400', title: 'Amber Gold' },
                    { id: 'emerald', color: 'bg-emerald-400', title: 'Neon Emerald' },
                    { id: 'dark', color: 'bg-zinc-900 border border-zinc-600', title: 'Obsidian' },
                    { id: 'light', color: 'bg-white border border-zinc-300', title: 'Light' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      title={t.title}
                      onClick={() => setActiveTheme(t.id)}
                      className={`w-6 h-6 rounded-full ${t.color} transition-all duration-200 ${
                        activeTheme === t.id ? 'ring-2 ring-offset-2 ring-zinc-900 dark:ring-white scale-110' : 'opacity-70 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Simulated Device Screen */}
              <div className={`rounded-2xl border ${currentTheme.border} ${currentTheme.bg} p-6 sm:p-8 transition-colors duration-500 shadow-2xl relative overflow-hidden`}>
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono-accent uppercase tracking-widest text-zinc-400">
                    BO Music v2.4 • Offline Engine
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://github.com/boulouizsimohamed-tech/BO-Music-Releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono-accent bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 flex items-center gap-1 transition-all shadow-xs"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download APK</span>
                    </a>
                    <button
                      type="button"
                      onClick={triggerNotification}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono-accent bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-700 flex items-center gap-1"
                    >
                      <Bell className="w-3 h-3 text-amber-400" />
                      <span>Test Push</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMiniPlayer(!isMiniPlayer)}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono-accent bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-700"
                    >
                      {isMiniPlayer ? 'Expand Player' : 'Collapse Mini'}
                    </button>
                  </div>
                </div>

                {/* Player Body: Full view or Mini-player */}
                {!isMiniPlayer ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Vinyl / Cover Art */}
                    <div className="md:col-span-5 flex justify-center">
                      <div className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-700 shadow-2xl border border-zinc-700/80 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
                        <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                          <Music className={`w-8 h-8 ${currentTheme.accent}`} />
                        </div>
                      </div>
                    </div>

                    {/* Controls & Wave */}
                    <div className="md:col-span-7 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono-accent bg-zinc-800 text-zinc-300">
                            Local File // just_audio
                          </span>
                          <span className={`text-xs font-mono-accent ${currentTheme.accent}`}>
                            96kHz Lossless
                          </span>
                        </div>
                        <h4 className="font-display font-extrabold text-2xl text-zinc-100">
                          Atlas of Sound (Acoustic Mix)
                        </h4>
                        <p className="text-xs text-zinc-400 font-mono-accent mt-0.5">
                          Mohamed Boulouiz • Audiophile Master
                        </p>
                      </div>

                      {/* Equalizer Visualizer */}
                      <div className="flex items-end gap-1.5 h-10 py-1">
                        {[40, 80, 50, 95, 70, 30, 85, 60, 90, 45, 100, 75, 55, 65, 80, 40].map((h, idx) => (
                          <div
                            key={idx}
                            style={{ height: isPlaying ? `${h}%` : '15%' }}
                            className={`flex-1 rounded-full ${currentTheme.wave} transition-all duration-150 opacity-90`}
                          />
                        ))}
                      </div>

                      {/* Timeline Scrubber */}
                      <div className="space-y-1">
                        <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden cursor-pointer">
                          <div className={`h-full ${currentTheme.wave} w-[42%] rounded-full`} />
                        </div>
                        <div className="flex justify-between text-[11px] font-mono-accent text-zinc-400">
                          <span>01:48</span>
                          <span>04:12</span>
                        </div>
                      </div>

                      {/* Main Playback Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            className="p-2.5 rounded-full text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
                            title="Previous (Earphone double-click seek)"
                          >
                            <SkipBack className="w-4 h-4" />
                          </button>

                          <button
                            type="button"
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`p-4 rounded-full ${currentTheme.btn} shadow-lg hover:scale-105 transition-transform`}
                            title={isPlaying ? 'Pause' : 'Play'}
                          >
                            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                          </button>

                          <button
                            type="button"
                            className="p-2.5 rounded-full text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
                            title="Next track"
                          >
                            <SkipForward className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Aspect Ratio Video Overlay switch */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono-accent text-zinc-400">VIDEO OVERLAY:</span>
                          {['16:9', '4:3', 'Fill'].map((ratio) => (
                            <button
                              key={ratio}
                              type="button"
                              onClick={() => setAspectRatio(ratio)}
                              className={`px-2 py-1 rounded text-[10px] font-mono-accent ${
                                aspectRatio === ratio
                                  ? 'bg-zinc-800 text-white border border-zinc-600'
                                  : 'text-zinc-500 hover:text-zinc-300'
                              }`}
                            >
                              {ratio}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                ) : (
                  /* Mini-player Bar Mode */
                  <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                        <Music className={`w-5 h-5 ${currentTheme.accent}`} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-100">Atlas of Sound (Collapsible Mini)</div>
                        <div className="text-[10px] text-zinc-400 font-mono-accent">Earphone Controls Active</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`p-2 rounded-full ${currentTheme.btn}`}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMiniPlayer(false)}
                        className="text-xs text-zinc-400 hover:text-white underline ml-2"
                      >
                        Expand
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* ================= LAB 2: BO DOWNLOADER ================= */}
          {selectedLab === 'downloader' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl text-zinc-950 dark:text-white flex items-center gap-2">
                    <DownloadCloud className="w-6 h-6 text-emerald-500" />
                    <span>BO Downloader // FastAPI + yt-dlp Simulator</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Simulate the asynchronous URL resolver and background worker pipeline.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono-accent border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>FastAPI Async Daemon Active</span>
                </div>
              </div>

              {/* URL Input & Format Controls */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-white space-y-6">
                <div>
                  <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-400 mb-2">
                    Input Media URL (Simulated Parser)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={downloadUrl}
                      onChange={(e) => setDownloadUrl(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-xs font-mono-accent text-zinc-200 focus:outline-hidden focus:border-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={() => setDownloadUrl('https://video.source/watch?v=4k-sample-stream')}
                      className="px-3 py-2 rounded-xl bg-zinc-800 text-[11px] font-mono-accent text-zinc-300 hover:text-white border border-zinc-700 shrink-0"
                    >
                      Paste Sample 4K
                    </button>
                  </div>
                </div>

                {/* Target Format Options */}
                <div>
                  <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-400 mb-2">
                    Select Stream Format & Extraction Profile
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: '1080p', label: '1080p 60fps MP4', size: '102 MB', note: 'Video + Audio' },
                      { id: '4k', label: '4K Ultra 2160p', size: '480 MB', note: 'Highest Bitrate' },
                      { id: 'mp3-320', label: 'MP3 Audio 320k', size: '9.4 MB', note: 'ID3 Tagged' },
                      { id: '720p', label: '720p Mobile MP4', size: '45 MB', note: 'Data Saver' }
                    ].map((fmt) => (
                      <button
                        key={fmt.id}
                        type="button"
                        onClick={() => setDownloadFormat(fmt.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          downloadFormat === fmt.id
                            ? 'border-emerald-500 bg-emerald-500/10 text-white'
                            : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <div className="font-display font-bold text-xs text-zinc-100">{fmt.label}</div>
                        <div className="text-[10px] font-mono-accent text-emerald-400 mt-1">{fmt.size}</div>
                        <div className="text-[9px] text-zinc-500">{fmt.note}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Progress bar & Download Button */}
                <div className="pt-4 border-t border-zinc-800 space-y-4">
                  {downloadProgress > 0 && (
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono-accent text-zinc-300">
                        <span>background_downloader progress</span>
                        <span className="text-emerald-400 font-bold">{downloadProgress}% ({downloadSpeed})</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                        <div
                          style={{ width: `${downloadProgress}%` }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400 font-mono-accent">
                      Status: {downloadProgress === 100 ? (
                        <span className="text-emerald-400 font-bold">✓ Download Complete (Saved to Gallery)</span>
                      ) : isDownloading ? (
                        <span className="text-amber-400">Extracting stream chunks via yt-dlp...</span>
                      ) : (
                        'Ready for background worker dispatch'
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleStartDownload}
                      disabled={isDownloading}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 disabled:opacity-50 transition-all shadow-md"
                    >
                      {isDownloading ? 'Downloading...' : downloadProgress === 100 ? 'Download Again' : 'Start Download'}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= LAB 3: BOULOUIZ SHOP ================= */}
          {selectedLab === 'ecommerce' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl text-zinc-950 dark:text-white flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-blue-500" />
                    <span>BOULOUIZ SHOP // Luxury Fashion & 3NF Database</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Inspect product SKU variant architecture and test client-side cart synchronization.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowDbSchema(!showDbSchema)}
                    className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-xs font-mono-accent text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5"
                  >
                    <Database className="w-3.5 h-3.5 text-blue-500" />
                    <span>{showDbSchema ? 'Hide 3NF Schema' : 'View 3NF Schema'}</span>
                  </button>

                  <div className="relative p-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {cartCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3NF Relational Schema Visualization Drawer */}
              {showDbSchema && (
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-mono-accent text-xs space-y-3">
                  <div className="flex items-center justify-between text-blue-400 font-bold border-b border-zinc-800 pb-2">
                    <span>MySQL 3NF Normalization Blueprint</span>
                    <span className="text-[10px] text-zinc-400">Zero Redundancy • Foreign Key Integrity</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800">
                      <div className="font-bold text-zinc-200">Table: products</div>
                      <div className="text-zinc-400 mt-1">id (PK)<br />slug, name<br />base_price, category_id (FK)</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800">
                      <div className="font-bold text-zinc-200">Table: product_skus</div>
                      <div className="text-zinc-400 mt-1">id (PK)<br />product_id (FK)<br />size, color, stock_qty</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800">
                      <div className="font-bold text-zinc-200">Table: order_items</div>
                      <div className="text-zinc-400 mt-1">id (PK)<br />order_id (FK)<br />sku_id (FK), quantity, price</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product Storefront Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-56 h-64 rounded-2xl bg-gradient-to-tr from-zinc-900 to-zinc-800 p-4 flex flex-col justify-between text-white border border-zinc-700 shadow-xl relative">
                    <div className="flex justify-between items-start text-xs font-mono-accent text-zinc-400">
                      <span>BOULOUIZ ATELIER</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-500 text-zinc-950 font-bold text-[9px]">LUXURY</span>
                    </div>
                    <div className="my-auto text-center">
                      <span className="font-display font-black text-5xl text-zinc-300 tracking-tighter">BZ</span>
                      <div className="text-[10px] font-mono-accent uppercase tracking-widest text-zinc-400 mt-2">
                        Boxy Cut • 450 GSM
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono-accent text-zinc-400">
                      <span>{selectedColor}</span>
                      <span>Size: {selectedSize}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-mono-accent uppercase tracking-wider text-blue-500 font-bold">
                      Winter Collection 2026
                    </span>
                    <h4 className="font-display font-extrabold text-2xl text-zinc-950 dark:text-white mt-1">
                      Mohamed Boulouiz Signature Heavyweight Hoodie
                    </h4>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xl font-bold font-mono-accent text-zinc-900 dark:text-white">$89.00 USD</span>
                      <span className="text-xs text-zinc-400 line-through">$120.00</span>
                      <span className="text-xs font-semibold text-emerald-500">In Stock (SKU-094-M)</span>
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div>
                    <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Choose Size:
                    </label>
                    <div className="flex items-center gap-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`w-9 h-9 rounded-lg font-mono-accent text-xs font-bold transition-all ${
                            selectedSize === size
                              ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md'
                              : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selector */}
                  <div>
                    <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Color Palette:
                    </label>
                    <div className="flex items-center gap-2">
                      {['Obsidian', 'Bone White', 'Charcoal'].map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono-accent font-medium border ${
                            selectedColor === color
                              ? 'border-blue-500 bg-blue-500/10 text-blue-500 font-bold'
                              : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="flex-1 py-3 px-6 rounded-full text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{addedAnimation ? 'Added to Bag ✓' : 'Add to Bag ($89.00)'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= LAB 4: MERCHANDISE & DESIGN ================= */}
          {selectedLab === 'design-gallery' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl text-zinc-950 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-purple-500" />
                    <span>Digital Merchandising // Commercial Asset Showcase</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Explore transparent PNG assets, vector graphics, and 3D photorealistic mockups designed for Creative Market and Ballwool.
                  </p>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <button
                    type="button"
                    onClick={() => setAssetMode('mockup')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      assetMode === 'mockup'
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    3D Apparel Mockup
                  </button>
                  <button
                    type="button"
                    onClick={() => setAssetMode('png')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      assetMode === 'png'
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    Transparent PNG Asset
                  </button>
                </div>
              </div>

              {/* Asset Showcase Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    title: "Seasonal Floral Vector",
                    format: "300 DPI Transparent PNG",
                    platform: "Ballwool & Creative Market",
                    badge: "Best Seller"
                  },
                  {
                    title: "Kinetic Streetwear Typography",
                    format: "Scalable Vector & Mockup",
                    platform: "Commercial License",
                    badge: "Print Ready"
                  },
                  {
                    title: "Minimalist Geometry Emblem",
                    format: "Asset Pack (SVG / PNG)",
                    platform: "Digital Merchandising",
                    badge: "Vector Master"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 flex flex-col justify-between"
                  >
                    <div className="w-full h-40 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-zinc-700 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden mb-4">
                      {assetMode === 'mockup' ? (
                        <div className="flex flex-col items-center">
                          <ShoppingBag className="w-10 h-10 text-purple-400 mb-2" />
                          <span className="text-[10px] font-mono-accent text-zinc-300">Photorealistic 3D Mockup</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Sparkles className="w-10 h-10 text-pink-400 mb-2" />
                          <span className="text-[10px] font-mono-accent text-zinc-300">300 DPI Transparent PNG</span>
                        </div>
                      )}
                      <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.format}
                      </p>
                      <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono-accent text-zinc-400">
                        <span>{item.platform}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </ScrollReveal>

      </div>
    </section>
  );
}
