import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import heroimg from "./HeroImg.png"
import MouseParallax from "./MouseParallax";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#f0fdf4] overflow-hidden min-h-[600px] flex items-center py-16 lg:py-3">
      {/* Background soft glow vector details */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] items-center gap-16 xl:gap-24">
          
          {/* Left Content Side */}
          <div className="flex flex-col space-y-6 max-w-xl">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm tracking-wide">
              {/* Star/Sparkle icon matching the badge */}
              <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.256.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.1c-.773-.554-.375-1.81.587-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
              </svg>
              <span>Best Digital Marketing</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#050865] leading-[1.15] tracking-tight">
              Expect Great Things <br />
              <span className="text-[#050865]">Digital Marketing</span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Accelerate your market capture with comprehensive marketing ecosystems built for scale. We design full-funnel strategies that unlock predictable revenue and continuous traction.
            </p>

            {/* Checkmark List */}
            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50" />
                <span>Application Development</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50" />
                <span>Performance Media Buying</span>
              </div>
            </div>

            {/* CTA Button & Community Avatars */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              {/* Button */}
             <Link
  to="/about"
  className="group flex items-center gap-2 rounded-full bg-[#050865] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-900/20 transition-all duration-200 hover:bg-[#059669]"
>
  <span>Learn More</span>
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>

              {/* Social Proof Group */}
              <div className="flex items-center gap-3">
                {/* Avatar Stack */}
                <div className="flex -space-x-3">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" />
                </div>
                {/* Text description */}
                <div className="flex flex-col text-sm leading-tight">
                  <span className="text-slate-800 font-bold">Joined Our Community</span>
                  <span className="text-slate-500 font-medium"><strong className="text-emerald-600 font-bold">150k</strong> Creators</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Illustration Side */}
          {/* Right Illustration Side */}
<div className="relative flex items-center justify-center lg:justify-end min-h-[350px] lg:min-h-[700px]">

  {/* Background Glow */}
  <div className="absolute h-[620px] w-[620px] rounded-full bg-gradient-to-br from-[#64E78B]/20 via-white to-[#130C7B]/10 blur-3xl" />

  {/* Decorative Ring */}
  <div className="absolute h-[540px] w-[540px] rounded-full border border-[#130C7B]/10" />

  {/* Hero Image */}
  <MouseParallax strength={30}>
  <img
    src={heroimg}
    alt=" Digital Marketing Illustration"
   className="relative z-10 w-full max-w-[760px] object-contain drop-shadow-2xl lg:scale-110 xl:scale-125"
  />
  </MouseParallax>
</div>

        </div>
      </div>
    </section>
  );
}