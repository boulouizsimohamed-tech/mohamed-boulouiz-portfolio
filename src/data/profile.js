export const profileData = {
  name: "Mohamed Boulouiz",
  firstName: "Mohamed",
  lastName: "Boulouiz",
  title: "Full-Stack & Flutter Developer | Digital Product Designer",
  roleTagline: "Building high-performance mobile apps, scalable backend systems & high-contrast minimalist digital experiences.",
  location: import.meta.env.VITE_LOCATION || "Taza, Morocco",
  country: "Morocco",
  timezone: "GMT+1 (Morocco Time)",
  education: {
    institution: "OFPPT (Office de la Formation Professionnelle et de la Promotion du Travail)",
    program: "Digital Development & Information Technology",
    specialization: "Full-Stack Web Development, Mobile App Development & Digital Product Design",
    status: "Specialized Training & Active Development"
  },
  bio: `I am a passionate Full-Stack Web Developer, Mobile Engineer, and Digital Product Designer based in Taza, Morocco. Currently specializing in Digital Development at OFPPT, I combine deep technical engineering in Flutter, Dart, Python (FastAPI), PHP (Laravel), and modern JavaScript/React with a rigorous eye for minimalist, luxury UI/UX aesthetics.

My engineering philosophy centers on clean architectural separation, normalized databases, responsive zero-clutter interfaces, and robust offline-first performance. Whether architecting an offline music engine, high-throughput media downloaders, or bespoke fashion e-commerce platforms, I take pride in delivering pixel-perfect, accessible, and resilient digital solutions.`,
  stats: [
    { label: "Core Projects", value: "4+", detail: "Production & Academic Flagships" },
    { label: "Tech Stack", value: "15+", detail: "Mobile, Backend, Web & Design" },
    { label: "Training", value: "OFPPT", detail: "Digital Development & IT" },
    { label: "Design System", value: "100%", detail: "High-Contrast & Minimalist" }
  ],
  socials: {
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/boulouizsimohamed-tech",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/simo-blz-279438386?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: import.meta.env.VITE_EMAIL || "boulouizsimohamed@gmail.com",
    phone: import.meta.env.VITE_PHONE_DISPLAY || "+212 677-928621",
    phoneRaw: import.meta.env.VITE_PHONE || "+212677928621",
    whatsapp: import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/212677928621",
    portfolio: import.meta.env.VITE_GITHUB_URL || "https://github.com/boulouizsimohamed-tech"
  },
  status: "Available for freelance projects, internships & engineering roles"
};
