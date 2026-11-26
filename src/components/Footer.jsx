import React from 'react';
import { ArrowUp, Heart, Mail, MessageSquare } from 'lucide-react';
import { 
  GithubIcon, LinkedinIcon, WhatsAppIcon, InstagramIcon, 
  XIcon, TelegramIcon, FacebookIcon, PaypalIcon 
} from './Icons';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#070709] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-display font-extrabold text-sm">
              MB
            </div>
            <div>
              <span className="font-display font-bold text-sm text-zinc-900 dark:text-white">
                {profileData.name}
              </span>
              <p className="text-[11px] font-mono-accent text-zinc-500 dark:text-zinc-400">
                Full-Stack & Flutter Developer • Taza, Morocco
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-zinc-600 dark:text-zinc-400">
            {[
              { href: profileData.socials.github, label: 'GitHub Profile', Icon: GithubIcon, external: true },
              { href: profileData.socials.linkedin, label: 'LinkedIn Profile', Icon: LinkedinIcon, external: true },
              { href: `mailto:${profileData.socials.email}`, label: 'Send Email', Icon: Mail, external: false },
              { href: profileData.socials.whatsapp, label: 'WhatsApp Message', Icon: WhatsAppIcon, external: true },
              { href: profileData.socials.telegram, label: 'Telegram', Icon: TelegramIcon, external: true },
              { href: profileData.socials.instagram, label: 'Instagram', Icon: InstagramIcon, external: true },
              { href: profileData.socials.x, label: 'X (Twitter)', Icon: XIcon, external: true },
              { href: profileData.socials.facebook, label: 'Facebook', Icon: FacebookIcon, external: true },
              { href: profileData.socials.paypal, label: 'PayPal Support', Icon: PaypalIcon, external: true },
            ].map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                title={label}
                className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono-accent text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <p className="font-mono-accent text-[11px] flex items-center gap-1">
            <span>High-Contrast Minimalist Architecture • OFPPT Digital Development</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
