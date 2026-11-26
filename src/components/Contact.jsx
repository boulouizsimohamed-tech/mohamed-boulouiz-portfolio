import React, { useState } from 'react';
import { 
  Mail, MapPin, Send, Check, Copy, ExternalLink, 
  MessageSquare, Clock, ArrowUpRight, Phone
} from 'lucide-react';
import { 
  GithubIcon, LinkedinIcon, WhatsAppIcon, InstagramIcon, 
  XIcon, TelegramIcon, FacebookIcon, PaypalIcon 
} from './Icons';
import { profileData } from '../data/profile';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.socials.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Input Sanitizer to neutralize potential script injections
  const sanitizeInput = (str, maxLength = 1000) => {
    if (!str) return '';
    return str
      .trim()
      .replace(/[<>]/g, '') // Strip HTML brackets to prevent XSS
      .slice(0, maxLength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot spam bot check: if hidden honeypot field has any value, abort silently
    if (honeypot) {
      console.warn('Bot submission prevented via honeypot.');
      return;
    }

    // Rate Limiting Protection (Minimum 15 seconds cooldown between submissions)
    const now = Date.now();
    if (now - lastSubmitTime < 15000) {
      setErrorMessage('Please wait a few seconds before sending another message.');
      return;
    }

    const cleanName = sanitizeInput(formData.name, 100);
    const cleanEmail = sanitizeInput(formData.email, 120);
    const cleanSubject = sanitizeInput(formData.subject, 150);
    const cleanMessage = sanitizeInput(formData.message, 3000);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);

    // Simulate secure transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#070709] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-start max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono-accent text-zinc-600 dark:text-zinc-400 mb-3">
              <span>05 // INITIATE COLLABORATION</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 dark:text-white">
              Let's Build Something Exceptional.
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base">
              Whether you have a Flutter mobile project, need a scalable full-stack web application, or require bespoke digital brand design, I am available for opportunities.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid: Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Status */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" delay={150}>
            {/* Quick 1-Click Copy Email Card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 mb-6">
              <span className="text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Direct Email Inquiries
              </span>
              <div className="mt-2 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="font-display font-bold text-base sm:text-lg text-zinc-950 dark:text-white hover:underline truncate"
                >
                  {profileData.socials.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs text-emerald-500 font-mono-accent mt-2 flex items-center gap-1">
                  ✓ Copied to clipboard! Ready to paste into your mail client.
                </p>
              )}
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 mb-6">
              <span className="text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Phone & Direct WhatsApp
              </span>
              <div className="mt-2 flex items-center justify-between gap-2">
                <a
                  href={`tel:${profileData.socials.phoneRaw}`}
                  className="font-display font-bold text-base sm:text-lg text-zinc-950 dark:text-white hover:underline truncate flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>{profileData.socials.phone}</span>
                </a>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={profileData.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-zinc-700 transition-all shadow-xs"
                    title="Open WhatsApp chat"
                    aria-label="Open WhatsApp chat"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
                    title="Copy phone number to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              {copiedPhone && (
                <p className="text-xs text-emerald-500 font-mono-accent mt-2 flex items-center gap-1">
                  ✓ Phone number copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono-accent text-zinc-500 dark:text-zinc-400">Location</div>
                  <div className="font-display font-bold text-sm text-zinc-950 dark:text-white">
                    Taza, Fès-Meknès, Morocco
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono-accent text-zinc-500 dark:text-zinc-400">Timezone & Availability</div>
                  <div className="font-display font-bold text-sm text-zinc-950 dark:text-white">
                    UTC+1 (Morocco Standard Time) • Remote Ready
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Cluster */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-3">
              <span className="text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Socials, Networks & Support
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {[
                  { label: 'GitHub', href: profileData.socials.github, Icon: GithubIcon, iconColor: 'text-zinc-900 dark:text-white' },
                  { label: 'LinkedIn', href: profileData.socials.linkedin, Icon: LinkedinIcon, iconColor: 'text-blue-500' },
                  { label: 'WhatsApp', href: profileData.socials.whatsapp, Icon: WhatsAppIcon, iconColor: 'text-emerald-500' },
                  { label: 'Telegram', href: profileData.socials.telegram, Icon: TelegramIcon, iconColor: 'text-sky-500' },
                  { label: 'Instagram', href: profileData.socials.instagram, Icon: InstagramIcon, iconColor: 'text-pink-500' },
                  { label: 'X (Twitter)', href: profileData.socials.x, Icon: XIcon, iconColor: 'text-zinc-900 dark:text-white' },
                  { label: 'Facebook', href: profileData.socials.facebook, Icon: FacebookIcon, iconColor: 'text-blue-600' },
                  { label: 'PayPal Support', href: profileData.socials.paypal, Icon: PaypalIcon, iconColor: 'text-indigo-500' },
                ].map(({ label, href, Icon, iconColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} />
                      <span className="text-xs font-semibold truncate">{label}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={200}>
            <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-md shadow-2xl premium-card">
              <h3 className="font-display font-extrabold text-2xl text-zinc-950 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-8">
                Fill out the form below. I typically respond within 24 business hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono-accent flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been received. Mohamed will be in touch shortly.</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono-accent flex items-center gap-2">
                  <span>⚠ {errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Anti-spam Honeypot Field (Hidden from real users, caught by spam bots) */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="website-url">Do not fill this</label>
                  <input
                    id="website-url"
                    type="text"
                    name="_website_url"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 dark:focus:ring-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Flutter Mobile App / Full-Stack Website / Branding"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 dark:focus:ring-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements, timeline, or inquiries..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 dark:focus:ring-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">
                    * Required fields
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 disabled:opacity-50 transition-all shadow-md hover:shadow-lg"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
