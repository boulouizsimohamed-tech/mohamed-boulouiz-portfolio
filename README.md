# Mohamed Boulouiz — Portfolio Website

> Modern, high-contrast, minimalist personal portfolio engineered with **React 19**, **Vite**, and **Tailwind CSS v4**.



[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Flutter](https://img.shields.io/badge/Flutter-Cross--Platform-02569B?logo=flutter&logoColor=white)](https://flutter.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 👤 Profile & About

- **Developer:** Mohamed Boulouiz
- **Location:** Taza, Morocco (UTC+1)
- **Education:** Digital Development & Information Technology at **OFPPT** (Specialized in Full-Stack Web Development, Mobile Development & Digital Product Design).
- **Core Philosophy:** Minimalist, luxury aesthetics with defensive architecture, normalized relational schemas, and offline-first mobile performance.

---

## 🚀 Flagship Projects

### 1. BO Music — Offline Local Music & Video Player
- **Stack:** Flutter, Dart, `just_audio`, Custom Dynamic Theming Engine, Android/iOS Media Notification Center, Local Notifications.
- **Highlights:** Gapless low-latency local media playback (<15ms latency), floating real-time theme skinning (Obsidian, Amber Gold, Neon Emerald, Light), gesture-driven collapsible mini-player, hardware/earphone click interceptor, adaptive aspect ratio video overlays, and scheduled engagement notifications.

### 2. BO Downloader — Media Extraction & Downloader Engine
- **Stack:** Flutter, Python, FastAPI, `yt-dlp`, `background_downloader`, Async Worker Queues.
- **Highlights:** High-throughput link resolver extracting multi-source streams, asynchronous Python microservice with Pydantic schemas, resumable background downloader with notification tracking, 4K/1080p format selection, and 320kbps MP3 audio conversion with automatic ID3 tagging.

### 3. BOULOUIZ SHOP — Full-Stack Luxury Apparel E-Commerce
- **Stack:** Next.js, PHP, MySQL, JavaScript (ES6+), Bootstrap, jQuery, Custom Brand Identity.
- **Highlights:** Strictly normalized **3NF relational database schema** (Products, SKU Variants, Inventories, Orders), editorial luxury storefront, dynamic multi-attribute product filtering, persistent shopping cart, and custom brand typography.

### 4. Digital Design & Merchandising Storefront
- **Stack:** Brand Identity, Logo Design, 3D Product Mockups, Promotional Video Ads, Canva, Google Flow.
- **Highlights:** Curated commercial suites of 300 DPI transparent PNG asset packs, holiday/seasonal vectors, photorealistic apparel & packaging mockups, and kinetic promotional video advertising for marketplaces like Ballwool and Creative Market.

---

## ⚡ Key Technical Features

- **Working Light / Night Theme Switcher:** Dual-mode segmented control with persistent `localStorage` synchronization, `<meta name="color-scheme">` updates, and inline `<head>` FOUC prevention.
- **Scroll-Driven Animation Engine:** Hairline top progress bar tracking scroll depth and an `IntersectionObserver` reveal system (`cubic-bezier(0.16, 1, 0.3, 1)`) with staggered card reveals.
- **Accessible Native Modals:** Built with HTML `<dialog>`, `.showModal()`, `aria-labelledby`, safe close button `autofocus`, and `overscroll-behavior: contain` to prevent background scroll chaining.
- **Live Interactive Labs:** Embedded simulated prototypes allowing visitors to test dynamic Flutter theme skinning, audio playback, background downloaders, and 3NF database entity relationships.
- **Secure Contact Form:** Client-side XSS sanitization, anti-bot honeypot field, submission rate-limiting (cooldown), and direct mail/phone/WhatsApp channels.

---

## 🛠️ Tech Stack Matrix

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Mobile Development** | Flutter, Dart, `just_audio`, `background_downloader`, Custom Theming, Earphone Media Controls, Local Push Notifications |
| **Backend & Databases** | Python 3, FastAPI, `yt-dlp`, PHP 8+, Laravel (MVC), MySQL (1NF–3NF Normalization), REST APIs |
| **Frontend Web** | HTML5 Semantic, CSS3 / Modern Flex & Grid, JavaScript (ES6+), React 19, Next.js, Vite, Tailwind CSS v4, Bootstrap, jQuery |
| **UI/UX & Design** | Brand Identity & Vector Logos, Photorealistic Mockups, Kinetic Promotional Video Reels, Canva, Google Flow, Digital Asset Merchandising |

---

## 📦 Project Structure

```
├── public/
│   ├── favicon.svg          # High-contrast vector MB brand monogram
│   ├── favicon.png          # 64x64 PNG fallback icon
│   ├── avatar.jpg           # Mohamed Boulouiz portrait photo
│   └── mohamed-boulouiz.jpg # Production asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Floating glassmorphic navigation header
│   │   ├── ThemeToggle.jsx       # Light / Night segmented theme switcher
│   │   ├── ScrollProgressBar.jsx # Hairline scroll progress tracker
│   │   ├── ScrollReveal.jsx      # Scroll-triggered animation wrapper
│   │   ├── Hero.jsx              # Hero introduction & floating badge cluster
│   │   ├── About.jsx             # OFPPT background & capability pillars
│   │   ├── SkillsMatrix.jsx      # Filterable & searchable skills matrix
│   │   ├── Projects.jsx          # Project showcase grid & filter tabs
│   │   ├── ProjectCardVisual.jsx # Interactive mockup card visuals
│   │   ├── ProjectModal.jsx      # Accessible <dialog> architecture modal
│   │   ├── InteractiveDemos.jsx  # Hands-on prototype simulator labs
│   │   ├── Contact.jsx           # Sanitized contact form & quick connect cards
│   │   ├── ResumeModal.jsx       # Formal CV modal ready for print / PDF
│   │   ├── Icons.jsx             # Clean SVG icons (GitHub, LinkedIn, WhatsApp)
│   │   └── Footer.jsx            # Minimalist footer with quick links
│   ├── data/
│   │   ├── profile.js            # Profile information & environment fallbacks
│   │   ├── skills.js             # Technical competencies by category
│   │   └── projects.js           # Flagship project specs & metrics
│   ├── App.jsx                   # Application layout root
│   ├── index.css                 # Base styles, Tailwind v4 @custom-variant dark
│   └── main.jsx                  # React DOM mount point
├── .env.example                  # Environment configuration template
├── .gitignore                    # Strict exclusions for secrets, builds & caches
├── index.html                    # SEO landmarks, CSP headers & FOUC prevention script
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build pipeline with Tailwind v4
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- **Node.js** v18+ (tested with v24)
- **npm** v9+ (or pnpm / yarn)
- **Git**

### 2. Clone and Install
```bash
git clone https://github.com/boulouizsimohamed-tech/mohamed-boulouiz-portfolio.git
cd mohamed-boulouiz-portfolio
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(All variables are pre-configured with safe production defaults).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized, tree-shaken static bundle will be generated in `/dist`.

To preview the production build locally:
```bash
npm run preview
```

---

## 🔒 Security & Privacy Audit Compliance

- [x] **Zero Hardcoded Secrets:** Sensitive configurations externalized to `.env` using Vite `import.meta.env`.
- [x] **Strict `.gitignore`:** Excludes `.env`, `.env.local`, `node_modules/`, `dist/`, and local system artifacts.
- [x] **Personal Data Sanitization:** Only public-facing professional data (Name, City, verified links) is included.
- [x] **XSS Mitigation:** Form inputs undergo tag stripping, length limiting, and strict regex validation.
- [x] **Spam & Bot Mitigation:** Integrated hidden honeypot traps and client-side cooldown rate-limiting.
- [x] **Secure External Links:** All `target="_blank"` anchor tags include `rel="noopener noreferrer"`.
- [x] **Security Meta Headers:** Document head includes `nosniff` and `strict-origin-when-cross-origin`.

---

## 📬 Contact & Connect

- **GitHub:** [@boulouizsimohamed-tech](https://github.com/boulouizsimohamed-tech)
- **LinkedIn:** [Mohamed Boulouiz](https://www.linkedin.com/in/simo-blz-279438386?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Email:** [boulouizsimohamed@gmail.com](mailto:boulouizsimohamed@gmail.com)
- **Phone / WhatsApp:** [+212 677-928621](tel:+212677928621) / [Chat on WhatsApp](https://wa.me/212677928621)
- **Location:** Taza, Morocco

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
