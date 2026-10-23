import React from "react";
import { instagramGallery } from "./servicesData";

const INSTAGRAM_URL = "https://www.instagram.com/optimediasolustions/";

// Custom Instagram Vector Icon Fallback
const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactSection() {
  // Infinite marquee loop banane ke liye gallery array ko duplicate kiya gaya hai
  const marqueeItems = [...instagramGallery, ...instagramGallery];

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#F4FBF7] pt-16 pb-24 sm:pt-24 sm:pb-32">
      
      {/* Decorative Vector Lines and Grid dots from reference image */}
      <div className="absolute top-12 left-10 grid grid-cols-4 gap-1.5 opacity-20 select-none">
        {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />)}
      </div>
      <div className="absolute top-20 right-16 grid grid-cols-4 gap-1.5 opacity-20 select-none">
        {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />)}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Upper Heading Meta Block */}
        <div className="text-center flex flex-col items-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 inline-flex max-w-full items-center justify-center gap-2 text-center text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#008751] transition-opacity hover:opacity-80 sm:text-xs sm:tracking-[0.2em]"
          >
            <div className="w-4 h-4 rounded-full bg-[#E6F3FA] flex items-center justify-center text-[#008751]">
              <InstagramIcon size={10} />
            </div>
            Follow Us On Instagram
          </a>
          
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-full break-words px-1 text-center text-[clamp(1.35rem,5.7vw,3rem)] font-black leading-[1.12] tracking-[-0.035em] text-[#001147] transition-colors hover:text-[#008751] sm:px-0"
          >
            @optimediasolustions
          </a>
          
          {/* Decorative green accent dash line */}
          <div className="flex items-center gap-1.5 mt-4">
            <div className="w-6 h-[2px] bg-[#008751]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#008751]" />
            <div className="w-6 h-[2px] bg-[#008751]" />
          </div>
        </div>

      </div>

      {/* INFINITE MARQUEE STRIP: Horizontal Auto-scrolling Slider Container */}
      <div className="relative mt-10 flex w-full max-w-full select-none overflow-hidden py-4 sm:mt-14">
        {/* Tailwind Custom Animation style injected directly via style tag for effortless plugin-free running */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            animation: marquee 32s linear infinite;
          }
          .animate-marquee-infinite:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="flex w-max min-w-full items-center gap-4 whitespace-nowrap animate-marquee-infinite sm:gap-6">
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[260px] w-[72vw] max-w-[260px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm group sm:h-[320px] sm:w-[240px] sm:max-w-none sm:rounded-[32px]"
            >
              <img
                src={item.image}
                alt="Instagram Grid Post"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              {/* Instagram Floating Icon Overlay at the bottom-right corner of each card */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E05221] shadow-sm">
                <InstagramIcon size={14} className="text-pink-600" />
              </div>
            </a>
          ))}
        </div>
      </div>



      

     

    </section>
    
  );
}