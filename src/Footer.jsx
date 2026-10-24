import React, { useState } from "react";
// import { Mail, ArrowRight } from "lucide-react";
import { Mail, ArrowRight, Phone, MapPin } from "lucide-react";

// Social Media Custom SVG Icons Grid Mapping
const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const YoutubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    const email = newsletterEmail.trim().toLowerCase();
    if (!email) {
      setNewsletterMessage("Please enter your email address.");
      return;
    }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      setNewsletterMessage("Newsletter signup is being set up. Please try again soon.");
      return;
    }

    setNewsletterSubmitting(true);
    setNewsletterMessage("");
    try {
      const response = await fetch(supabaseUrl.replace(/\/$/, "") + "/rest/v1/newsletter_subscribers?on_conflict=email", {
        method: "POST",
        headers: {
          apikey: supabaseAnonKey,
          Authorization: "Bearer " + supabaseAnonKey,
          "Content-Type": "application/json",
          Prefer: "resolution=ignore-duplicates,return=minimal",
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Newsletter signup request failed");
      setNewsletterEmail("");
      setNewsletterMessage("Thank you for subscribing!");
    } catch (error) {
      setNewsletterMessage("Sorry, we couldn't save your subscription. Please try again.");
    } finally {
      setNewsletterSubmitting(false);
    }
  };


  const companyLinksCol1 = [
    { label: "Branding And Identity", href: "/services" },
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    { label: "Web Development", href: "/services/website-development" },
    { label: "Pay-Per-Click", href: "/services/sem-services" },
    { label: "Content Marketing", href: "/services/content-marketing" }
  ];

  const companyLinksCol2 = [
    { label: "About Company", href: "/about" },
    { label: "Advice & Tips", href: "/blog" },
    { label: "Our Team", href: "/about#team" },
    { label: "Our Partners", href: "/contect" }
  ];

  return (
    <footer className="relative bg-[#FAFCFB] pt-44 pb-12 border-t border-slate-100 overflow-visible">
      {/* ================= Contact Info Card ================= */}

<div className="relative max-w-7xl mx-auto px-6 lg:px-8 -mt-40 mb-20 z-30">

  <div className="rounded-[32px] overflow-hidden bg-[#001147] shadow-[0_20px_60px_rgba(0,17,71,0.18)]">

    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

      {/* Phone */}

      <div className="flex items-center gap-5 p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#008751] shadow-lg">
          <Phone size={26} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[2px] font-semibold text-emerald-400">
            Need Help?
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            +91 90240 40691
          </h3>
        </div>

      </div>

      {/* Email */}

      <div className="flex items-center gap-5 p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#008751] shadow-lg">
          <Mail size={26} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[2px] font-semibold text-emerald-400">
            Email Address
          </p>

          <h3 className="mt-2 text-sm font-bold text-white break-all">
            optimediasolutions90@gmail.com
          </h3>
        </div>

      </div>

      {/* Address */}

      <div className="flex items-center gap-5 p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#008751] shadow-lg">
          <MapPin size={26} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[2px] font-semibold text-emerald-400">
            Our Office
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            Churu, Rajasthan, India
          </h3>
        </div>

      </div>

    </div>

  </div>

</div>
      {/* Decorative vector waveform curves in background matching the layout image */}
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-30">
        <svg width="450" height="250" viewBox="0 0 450 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C250 80 300 30 450 120" stroke="#008751" strokeWidth="1.5" strokeDasharray="3 3"/>
          <path d="M0 40C180 150 280 60 450 180" stroke="#001147" strokeWidth="1" className="opacity-40"/>
        </svg>
      </div>
      

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* COLUMN 1: BRAND LOGO META INFRA (Takes 4 cols out of 12) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" aria-label="Optimedia Solutions home" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008751]">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200/80 p-0.5 bg-white shadow-sm flex-shrink-0">
                <img 
                  src="/optimedia_logo.jpeg" 
                  alt="Optimedia Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#001147] font-black text-xl tracking-tight leading-none uppercase">
                  Optimedia
                </span>
                <span className="text-[#008751] font-bold text-xs tracking-[0.25em] uppercase mt-1">
                  Solutions
                </span>
              </div>
            </a>

            <p className="text-gray-500 text-[13.5px] leading-relaxed max-w-sm">
              We help businesses grow with creative branding, digital marketing and technology solutions that drive real results.
            </p>

            {/* Premium Circular Boxed White Platform Action Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FacebookIcon />, href: "#" },
                { icon: <LinkedinIcon />, href: "#" },
                { icon: <TwitterIcon />, href: "#" },
                { icon: <YoutubeIcon />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#008751] hover:bg-[#008751] hover:text-white hover:border-[#008751] shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: INTERNAL LINKS CONTAINER DEPLOYMENT (Takes 4 cols split evenly into two lists) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:px-4">
            
            {/* Sub Link Matrix A */}
            <div className="space-y-5">
              <h4 className="text-[#001147] font-black text-sm uppercase tracking-wider relative pb-1">
                Company
                <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#008751]" />
              </h4>
              <ul className="space-y-3.5">
                {companyLinksCol1.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="flex items-center gap-2.5 group text-gray-600 hover:text-[#001147] font-bold text-xs tracking-wide transition-colors duration-200">
                      <div className="w-4 h-4 rounded-full border border-emerald-200 flex items-center justify-center text-[#008751] group-hover:bg-[#008751] group-hover:text-white transition-all duration-200 flex-shrink-0 scale-95">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub Link Matrix B */}
            <div className="space-y-5 lg:pt-0">
              <div className="h-5 hidden sm:block" /> {/* Alignment padding spacer */}
              <ul className="space-y-3.5">
                {companyLinksCol2.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="flex items-center gap-2.5 group text-gray-600 hover:text-[#001147] font-bold text-xs tracking-wide transition-colors duration-200">
                      <div className="w-4 h-4 rounded-full border border-emerald-200 flex items-center justify-center text-[#008751] group-hover:bg-[#008751] group-hover:text-white transition-all duration-200 flex-shrink-0 scale-95">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* COLUMN 3: NEWSLETTER SUBSCRIBE CARD MODULE (Takes 4 cols out of 12) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-[#001147] font-black text-sm uppercase tracking-wider relative pb-1">
              Newsletter Subscribe
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#008751]" />
            </h4>
            
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Subscribe to our newsletter and get the latest updates, news and exclusive offers.
            </p>

            {/* Layout Aligned Newsletter Searchbar Field */}
            <form onSubmit={handleNewsletterSubmit} className="flex items-center w-full bg-white border border-slate-200/90 rounded-2xl p-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.01)] focus-within:border-[#008751] transition-all duration-300">
              <div className="flex items-center gap-2 pl-3 flex-1 text-slate-400">
                <Mail size={16} />
                <input
                  type="email"
                  name="newsletterEmail"
                  autoComplete="email"
                  value={newsletterEmail}
                  onChange={(event) => {
                    setNewsletterEmail(event.target.value);
                    setNewsletterMessage("");
                  }}
                  placeholder="Your email address"
                  aria-label="Your email address"
                  className="w-full bg-transparent text-xs text-[#001147] font-medium outline-none placeholder:text-gray-400/90"
                  required
                />
              </div>
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                disabled={newsletterSubmitting}
                className="w-9 h-9 rounded-xl bg-[#008751] text-white flex items-center justify-center hover:bg-[#001147] transition-colors duration-300 flex-shrink-0 cursor-pointer"
              >
                {newsletterSubmitting ? <span className="text-xs font-semibold">...</span> : <ArrowRight size={16} strokeWidth={2.5} />}
              </button>
            </form>
            {newsletterMessage && (
              <p role="status" aria-live="polite" className="text-xs text-[#008751] mt-2">
                {newsletterMessage}
              </p>
            )}
          </div>

        </div>

        {/* BOTTOM METADATA DIVIDER BAND */}
        <div className="mt-16 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold text-slate-400/90 tracking-wide">
          <p>© {new Date().getFullYear()} Optimedia Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-[#001147] transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-[#001147] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}