import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, PenTool, UserCheck } from "lucide-react";
import { whyChooseUsFeatures } from "./servicesData";
import { Link } from "react-router-dom";

// Dynamic images setup
import FeatureImgForeground from "./Project2.avif"; 
import FeatureImgBackground from "./Project3.webp"; 

export default function WhyChooseUsSection() {
  
  const renderIcon = (id) => {
    const props = { size: 22, className: "text-[#059669]" }; // Match icon with dark navy
    if (id === 1) return <Code2 {...props} />;
    if (id === 2) return <PenTool {...props} />;
    return <UserCheck {...props} />;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    // Mint White Background from images
    <section className="relative py-20 md:py-24 bg-[#F4FBF7] overflow-hidden">
      
      {/* Decorative Mint Accents */}
      <div className="absolute top-10 right-12 w-16 h-16 rounded-full border border-emerald-500/20 pointer-events-none" />
      <div className="absolute bottom-12 right-6 w-32 h-32 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-6 flex flex-col items-start space-y-6 order-2 lg:order-1"
          >
            {/* Emerald Green Badge (#008751) */}
            <span className="text-[#008751] font-extrabold text-sm uppercase tracking-[0.2em] flex items-center gap-1.5">
              <span>✱</span> Why Choose Us
            </span>

            {/* EXACT IMAGE TEXT COLOR: Deep Midnight Navy Blue (#001147) */}
            <h2 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold text-[#001147] tracking-tight leading-[1.15]">
              Right Reason Choose <br />Our Digital Expertise
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              We combine advanced consumer insights, data analytics, and high-impact creatives to build customer acquisition channels. Our focus is simple: less guesswork, more conversions, and transparent scaling for your brand.
            </p>

            {/* Features List */}
            <div className="w-full flex flex-col space-y-6 pt-2">
              {whyChooseUsFeatures.map((feature) => (
                <div key={feature.id} className="flex items-start gap-5 group transition-all duration-300 rounded-2xl p-2 -ml-2 hover:bg-white/50">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,11,71,0.02)] border border-slate-100 flex items-center justify-center flex-shrink-0">
                    {renderIcon(feature.id)}
                  </div>
                  
                  <div className="space-y-1">
                    {/* Hover text changes to Deep Navy instead of Orange */}
                    <h3 className="text-lg font-bold text-[#001147] tracking-tight transition-colors duration-300 group-hover:text-[#008751]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button matched with Midnight Navy Blue */}
            <div className="pt-4 w-full sm:w-auto">
  <Link
    to="/about"
    className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#001147] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-blue-950/10 transition-all duration-300 ease-out hover:bg-[#008751] sm:w-auto"
  >
    <span>Learn More</span>

    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</div>
          </motion.div>

          {/* Right Side Complex Asymmetrical Images */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center relative w-full pt-6 min-h-[460px] sm:min-h-[550px] lg:min-h-[600px]">
            <div className="absolute top-4 left-[10%] grid grid-cols-5 gap-2 opacity-30 -z-10">
              {[...Array(25)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />)}
            </div>

            <div className="text-[#008751] absolute left-[5%] top-1/2 -translate-y-1/2 opacity-80 hidden sm:block pointer-events-none z-20">
              <svg width="60" height="90" viewBox="0 0 60 90" fill="none" className="animate-[pulse_3s_infinite]">
                <path d="M10 80 C 40 70, 15 20, 50 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M43 18 L 50 10 L 41 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              className="absolute right-0 top-0 w-[55%] sm:w-[52%] aspect-[4/5] rounded-[30px] overflow-hidden shadow-[0_15px_45px_rgba(0,11,71,0.05)] border border-white/80 z-10"
            >
              <img src={FeatureImgBackground} alt="Workspace" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              className="absolute left-6 sm:left-12 bottom-0 w-[58%] sm:w-[54%] aspect-[4/5] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,11,71,0.06)] border-4 border-white z-20"
            >
              <img src={FeatureImgForeground} alt="Expert" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}