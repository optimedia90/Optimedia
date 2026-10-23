import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import SeoBg from "../../assets/BgImageForOptimedia.png";
import { ChevronRight, ArrowRight, Play, Rocket, Users, Target, ShieldCheck } from "lucide-react";

export default function ServiceHero({ service }) {
  // Fallback data agar properties pass nahi ho rahi hain to design break na ho
  const title = service?.title || "SEO Services";
  const shortDescription = service?.shortDescription || "We help businesses improve search engine rankings, attract the right audience, and convert traffic into real results with data-driven SEO strategies.";
  const heroImage = service?.heroImage;
  const isWebsiteService = service?.slug === "website-development";

  // Bottom bottom strip metrics data array
  const bottomFeatures = [
    {
      icon: <Rocket className="w-6 h-6 text-[#008751]" />,
      title: "Higher Rankings",
      desc: "Boost your visibility on search engines"
    },
    {
      icon: <Users className="w-6 h-6 text-[#008751]" />,
      title: "More Traffic",
      desc: "Drive high-quality organic traffic"
    },
    {
      icon: <Target className="w-6 h-6 text-[#008751]" />,
      title: "Better ROI",
      desc: "Get more leads and sales from organic search"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#008751]" />,
      title: "Long-Term Growth",
      desc: "Sustainable results that grow your business"
    }
  ];

  return (
   <section className="relative overflow-hidden pt-20 pb-12 lg:pt-12 lg:pb-20 font-sans">
      

      {/* Desktop Background */}
<div
  className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat -mt-20 -ml-10"
  style={{
    backgroundImage: `url(${service.backgroundImage})`,
  }}
/>

{/* Mobile Background */}
<div
  className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${service.mobileBackgroundImage || service.backgroundImage})`,
  }}
/>

{/* White Overlay */}
{/* <div className="absolute inset-0 bg-white/10" /> */}


      {/* Background Subtle Blur Blobs for premium clean theme */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#2cd483]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-[#050865]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Grid: Left Content & Right Vector/Dash Presentation */}
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
           className={`flex flex-col space-y-6 ${
  isWebsiteService
    ? "lg:col-span-6 text-left"
    : "lg:col-span-5 text-left"
}`}
          >
            {/* Breadcrumb row */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500">
              <Link to="/" className="hover:text-[#008751] transition-colors">Home</Link>
              <ChevronRight size={14} className="text-gray-400" />
              <Link to="/services" className="hover:text-[#008751] transition-colors">Services</Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#008751] font-semibold">{title}</span>
            </div>

            {/* Strategic Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2cd483]/10 text-[#008751] text-xs font-bold px-3.5 py-1.5 rounded-full w-fit uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2cd483] animate-pulse" />
              Result-Driven SEO Strategies
            </div>

            {/* Main Dynamic Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#050865] leading-[1.15]">
              {title.split(" ")[0]} <br />
              <span className="text-[#2cd483]">{title.split(" ").slice(1).join(" ")}</span>
            </h1>

            {/* Dynamic Catchphrase */}
            <h3 className="text-xl font-bold text-[#050865]/90 tracking-tight">
              Rank Higher. Drive Traffic. Grow Faster.
            </h3>

            {/* Paragraph Text */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              {shortDescription}
            </p>

            {/* Dual Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#050865] px-7 py-4 font-bold text-white hover:bg-[#008751] transition-all duration-300 shadow-lg shadow-[#050865]/10 group"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/process"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-gray-200 px-7 py-4 font-bold text-[#050865] hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
              >
                View Our Process
                <span className="p-1 rounded-full bg-[#2cd483]/10 text-[#008751] group-hover:bg-[#2cd483]/20 transition-colors">
                  <Play className="w-3 h-3 fill-current" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Showcase Illustration Platform */}
        {isWebsiteService ? (
  <div className="hidden lg:block lg:col-span-6" />
) : (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    viewport={{ once: true }}
    className="lg:col-span-7 flex justify-center items-center relative"
  >
    <div className="relative z-10 w-full max-w-[580px]">
      <img
        src={heroImage}
        className="w-full h-auto object-contain drop-shadow-2xl"
      />
    </div>
  </motion.div>
)}
        </div>

        {/* Bottom Feature Metrics Strip Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 bg-white/80 backdrop-blur-md rounded-[2rem] border border-gray-100 shadow-xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100"
        >
          {bottomFeatures.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-4 pt-4 sm:pt-0 ${idx === 0 ? '' : 'sm:pl-4 lg:pl-6'}`}
            >
              <div className="p-3 bg-[#2cd483]/10 rounded-2xl flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[#050865] text-base">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}