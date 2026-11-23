export const projectsData = [
  {
    id: "bo-music",
    title: "BO Music",
    category: "mobile",
    categoryLabel: "Mobile App",
    badge: "Offline Media Player",
    subtitle: "Offline Local Music & Video Player for Android & iOS",
    tagline: "Engineered with Flutter, high-fidelity audio decoding, custom dynamic theming, and lock-screen hardware integration.",
    summary: "BO Music is an offline multimedia mobile app tailored for audio and video enthusiasts. It bypasses network reliance by providing a gapless, low-latency local media player equipped with a floating theme selector, collapsible mini-player, earphone media button controls, custom video sizing overlays, and scheduled daily notifications.",
    coverAccent: "from-cyan-500/20 via-teal-500/10 to-zinc-900/40",
    borderAccent: "hover:border-cyan-500/50",
    accentColor: "#06b6d4",
    tags: ["Flutter", "Dart", "just_audio", "Custom Theming", "Media Controls", "Local Notifications", "Android/iOS"],
    metrics: [
      { label: "Audio Latency", value: "<15ms" },
      { label: "Local Formats", value: "MP3, FLAC, MP4, MKV" },
      { label: "Theme Styles", value: "6 Dynamic Palettes" },
      { label: "Notification Cycle", value: "Daily Scheduled" }
    ],
    features: [
      {
        title: "Audiophile-Grade Offline Playback Engine",
        desc: "Integrated with just_audio for flawless gapless playback, custom equalizer support, hardware audio focus handling, and seamless background execution."
      },
      {
        title: "Floating Dynamic Theme Selector",
        desc: "An intuitive floating control allowing users to switch color schemes on the fly between high-contrast obsidian dark, luxury gold, neon emerald, and pure light modes."
      },
      {
        title: "Gesture-Driven Collapsible Mini-Player",
        desc: "A floating bottom bar mini-player that expands with smooth physics into a full-screen view featuring rotating vinyl artwork, lyrics display, and scrub controls."
      },
      {
        title: "Earphone & Bluetooth Media Interceptor",
        desc: "Hardware-level listener capturing wired earphone click sequences (single-click play/pause, double-click skip, triple-click previous) and Bluetooth AVRCP commands."
      },
      {
        title: "Adaptive Video Sizing Overlays",
        desc: "Dynamic aspect ratio controls (16:9, 4:3, Fill, Fit, Crop) alongside gesture swipes for brightness, volume, and playback seek."
      },
      {
        title: "Scheduled Daily Engagement Notifications",
        desc: "Native local notifications engine dispatching gentle daily musical reminders and personalized track suggestions without consuming battery or requiring internet."
      }
    ],
    architecture: {
      overview: "Clean Architecture adhering to BLoC state management and strict separation of concerns.",
      layers: [
        "Presentation: Flutter widgets with reactive ValueNotifiers and animated builders.",
        "Audio Controller: AudioPlayer abstraction wrapper around just_audio and audio_service.",
        "Hardware Interceptor: MethodChannel bridge for physical headset buttons and notification center.",
        "Storage & Cache: Hive local database for playlist caching, playback positions, and theme preferences."
      ]
    },
    demoType: "audio-player",
    downloadUrl: "https://github.com/boulouizsimohamed-tech/BO-Music-Releases",
    downloadLabel: "Download Latest Release (APK)"
  },
  {
    id: "bo-downloader",
    title: "BO Downloader",
    category: "mobile",
    categoryLabel: "Mobile & Backend",
    badge: "Media Engine & FastAPI",
    subtitle: "High-Performance Multi-Source Media Extraction & Downloader",
    tagline: "Ultra-fast media extraction powered by a sleek Flutter client and a high-throughput Python FastAPI backend utilizing yt-dlp.",
    summary: "BO Downloader provides a clean, zero-clutter solution for downloading videos and audio streams from diverse web platforms. By offloading heavy media stream resolution and demuxing to an asynchronous FastAPI backend running yt-dlp, the Flutter app guarantees instant link analysis, selectable resolutions (up to 4K and 320kbps MP3), and resumable background downloads.",
    coverAccent: "from-amber-500/20 via-yellow-500/10 to-zinc-900/40",
    borderAccent: "hover:border-amber-500/50",
    accentColor: "#f59e0b",
    tags: ["Flutter", "Dart", "Python", "FastAPI", "yt-dlp", "background_downloader", "Async Queues"],
    metrics: [
      { label: "Resolution Support", value: "Up to 4K & 60fps" },
      { label: "Audio Extraction", value: "320kbps MP3" },
      { label: "Backend Response", value: "<120ms metadata" },
      { label: "Download Engine", value: "Multi-threaded" }
    ],
    features: [
      {
        title: "Multi-Platform Media Parser",
        desc: "Seamlessly parses direct video links, short-form clips, and playlists from all major web platforms with zero client-side overhead."
      },
      {
        title: "Asynchronous FastAPI Core",
        desc: "High-throughput asynchronous Python microservice utilizing yt-dlp to inspect stream manifests, extract clean MP4/M4A/MP3 links, and deliver structured JSON responses."
      },
      {
        title: "Resumable Background Downloader",
        desc: "Employs background_downloader with native Android WorkManager and iOS BackgroundTasks to preserve download progress across app restarts and network interruptions."
      },
      {
        title: "Automatic MP3 Conversion & Metadata Tagging",
        desc: "Fast server-side audio demuxing and ID3 metadata injection, providing embedded album covers, track titles, and artist credits."
      },
      {
        title: "Smart Clipboard Listener",
        desc: "Detects copied media URLs automatically upon app opening, offering immediate one-tap resolution without manual pasting."
      }
    ],
    architecture: {
      overview: "Decoupled asynchronous client-server architecture built for maximum extraction speed and zero device throttling.",
      layers: [
        "Flutter Client: Material 3 high-contrast UI with reactive download progress bars.",
        "FastAPI Service: Python 3.11+ async endpoints with Pydantic request models.",
        "Stream Engine: yt-dlp backend worker with ffmpeg post-processing pipeline.",
        "Background Daemon: Native background downloader keeping persistent notification bars."
      ]
    },
    demoType: "downloader",
    downloadUrl: "https://github.com/boulouizsimohamed-tech/BO-Downloader-Releases",
    downloadLabel: "Download Latest Release (APK)"
  },
  {
    id: "boulouiz-shop",
    title: "BOULOUIZ SHOP",
    category: "web",
    categoryLabel: "Full-Stack Web",
    badge: "E-Commerce Platform",
    subtitle: "Full-Stack Luxury Clothing E-Commerce & Brand Platform",
    tagline: "End-to-end luxury fashion shopping experience featuring a normalized MySQL relational architecture, Next.js, PHP, and custom visual identity.",
    summary: "BOULOUIZ SHOP is an e-commerce platform built for high-end fashion and streetwear merchandising. It unites a minimalist, editorial-grade Next.js frontend with robust PHP backend controllers and a strictly normalized MySQL relational database (3NF), ensuring ACID-compliant transaction safety, accurate inventory tracking across multiple sizes, and an effortless checkout experience.",
    coverAccent: "from-blue-500/20 via-indigo-500/10 to-zinc-900/40",
    borderAccent: "hover:border-blue-500/50",
    accentColor: "#3b82f6",
    tags: ["Next.js", "PHP", "MySQL", "JavaScript (ES6+)", "Bootstrap", "jQuery", "Brand Identity"],
    metrics: [
      { label: "Database Normalization", value: "Strict 3NF" },
      { label: "Frontend", value: "Next.js & Bootstrap" },
      { label: "Checkout Flow", value: "Multi-Step" },
      { label: "Brand Identity", value: "Custom Typography & Packaging" }
    ],
    features: [
      {
        title: "Strict 3NF Normalized Relational Schema",
        desc: "Engineered with normalized entities (Categories, Products, SKU Variants, Sizes, Inventories, Orders, LineItems) to eliminate data redundancy and prevent stock anomalies."
      },
      {
        title: "Editorial Luxury Visual Experience",
        desc: "High-contrast minimalist layout inspired by luxury fashion lookbooks, featuring smooth micro-interactions, responsive grids, and crisp typography."
      },
      {
        title: "Dynamic Filter & Instant Catalog Search",
        desc: "Client-side and server-assisted filtering by collection, garment category, size availability, color, and price range with instant state synchronisation."
      },
      {
        title: "Persistent Cart & Order Management",
        desc: "Session-managed shopping bag with coupon code logic, automatic tax/shipping calculations, and order confirmation receipt generation."
      },
      {
        title: "Bespoke Brand Identity & Packaging",
        desc: "Complete visual branding including vector logo, garment hangtags, packaging mockups, and cohesive digital design language."
      }
    ],
    architecture: {
      overview: "Scalable MVC architecture separating responsive presentation from PHP business services and normalized relational data layers.",
      layers: [
        "Presentation: Next.js components complemented by custom CSS and optimized JavaScript.",
        "API Controller: PHP REST endpoints handling cart validation, order creation, and inventory locks.",
        "Database Layer: MySQL engine configured with foreign key cascades, unique indexing, and transactions."
      ]
    },
    demoType: "ecommerce"
  },
  {
    id: "design-storefront",
    title: "Digital Design & Merchandising Storefront",
    category: "design",
    categoryLabel: "UI/UX & Design",
    badge: "Digital Product Design",
    subtitle: "Curated Commercial Graphics, Vector Assets & Brand Mockups",
    tagline: "A commercial suite of seasonal illustrations, transparent PNG asset bundles, and photorealistic mockups created for Creative Market and Ballwool.",
    summary: "A curated digital design portfolio and storefront merchandising system developed for international creative marketplaces including Ballwool and Creative Market. Spanning seasonal thematic illustrations, transparent PNG asset packs, apparel mockups, and promotional video advertising campaigns, this project exemplifies how thoughtful design systems drive commercial success.",
    coverAccent: "from-purple-500/20 via-pink-500/10 to-zinc-900/40",
    borderAccent: "hover:border-purple-500/50",
    accentColor: "#a855f7",
    tags: ["Brand Identity", "Logo Design", "Product Mockups", "Promotional Video Ads", "Canva", "Google Flow", "Creative Market", "Ballwool"],
    metrics: [
      { label: "Marketplaces", value: "Ballwool & Creative Market" },
      { label: "Asset Quality", value: "300 DPI Transparent PNG" },
      { label: "Mockup Types", value: "Apparel, Print & Packaging" },
      { label: "Video Ads", value: "High-CTR Kinetic Reels" }
    ],
    features: [
      {
        title: "Curated Commercial Vector & PNG Asset Packs",
        desc: "Carefully produced seasonal illustrations, holiday graphics, and typography vectors exported as crisp, transparent PNGs ready for merchandise printing."
      },
      {
        title: "Photorealistic Apparel & Packaging Mockups",
        desc: "High-contrast 3D garment presentations (oversized hoodies, t-shirts, caps) and packaging scenes crafted to elevate customer conversion rates."
      },
      {
        title: "Promotional Kinetic Video Advertisements",
        desc: "Engaging social media promotional video ads designed with rhythmic kinetic typography, dynamic camera pans, and call-to-actions."
      },
      {
        title: "Storefront UX & Google Flow Mapping",
        desc: "Comprehensive user journey diagrams, category taxonomy layouts, and conversion flow designs mapped out using Google Flow."
      },
      {
        title: "Strict Commercial Quality Compliance",
        desc: "Assets pre-calibrated to 300+ DPI CMYK/RGB color profiles adhering to global digital marketplace requirements."
      }
    ],
    architecture: {
      overview: "Systematic digital production pipeline bridging vector illustration, product mockups, and video advertising.",
      layers: [
        "Design Foundation: Master vector asset libraries, color harmonies, and typography palettes.",
        "3D Mockup Pipeline: High-resolution displacement maps and lighting layers for photorealistic rendering.",
        "Distribution Pipeline: Batch export scripts for PNG, SVG, PDF, and MP4 video formats."
      ]
    },
    demoType: "design-gallery"
  }
];
