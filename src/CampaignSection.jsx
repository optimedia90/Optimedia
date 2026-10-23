import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
// Import data structures from servicesData
import { digitalCampaignStats, campaignFeatures } from "./servicesData";
// Dynamic assets binding - placeholder references for imported images
import CampaignTeaserImg from "./project1.avif"; 
import { Link } from "react-router-dom";


export default function CampaignSection() {
  
  // Matrix configurations for staggered animation sequences
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section className="relative py-20 md:py-24 bg-[#f0fdf4] overflow-hidden">
      {/* Background vector accents layout */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#050865]/5 blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Grid Content Column: Dashboard Cards Matrix Blocks */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1 items-center"
          >
            {/* Top Left Row: Premium Contextual Image Graphics Asset */}
            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="h-[240px] sm:h-[260px] bg-white rounded-[30px] shadow-[0_15px_40px_-15px_rgba(5,8,101,0.06)] border border-slate-100 overflow-hidden relative group p-4 flex items-center justify-center"
            >
              <img 
                src={CampaignTeaserImg} 
                alt="Digital Marketing Engagement" 
                className="w-full h-full object-cover rounded-[22px] transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Iteration logic for handling Analytics Statistics Cards mapping */}
            {digitalCampaignStats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={fadeInUpVariants}
                whileHover={{ 
                  y: -10, 
                  shadow: "0 25px 50px -12px rgba(5, 8, 101, 0.1)"
                }}
                className="bg-white rounded-[30px] border border-slate-100 p-8 flex flex-col items-start space-y-4 shadow-[0_15px_40px_-15px_rgba(5,8,101,0.04)] transition-all duration-300 relative overflow-hidden group min-h-[240px] sm:min-h-[260px] justify-center"
              >
                {/* Active vector tracking bullet icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#050865]/5 text-[#059669] flex items-center justify-center group-hover:bg-[#059669] group-hover:text-white transition-all duration-300">
                  <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-current rounded-full" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-gray-500 font-bold text-sm tracking-wide transition-colors group-hover:text-gray-700">
                    {stat.title}
                  </h4>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#050865] tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-slate-400 font-medium text-xs sm:text-sm">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Grid Content Column: Text strings block details and descriptions */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            className="lg:col-span-6 flex flex-col items-start space-y-6 order-1 lg:order-2"
          >
            {/* Top Green Accent Label Badge */}
            <span className="text-[#059669] font-extrabold text-xs uppercase tracking-[0.25em] px-4 py-1.5 bg-[#050865]/5 rounded-full flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
              Digital Campaigns
            </span>

            {/* Large Typography Header title strings */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#050865] tracking-tight leading-[1.15]">
              Exploring Deliver <br />Digital Campaigns
            </h2>

            {/* Paragraph Text Content line copy details */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              We don't believe in vanity metrics or empty promises. Our team builds automated, hyper-targeted marketing funnels that capture attention, recover lost revenue, and maximize conversions—turning cold clicks into predictable business growth.
            </p>

            {/* Two Column Grid Matrix Checklist Block layout */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full pt-2">
              {campaignFeatures.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-[#050865] font-bold text-sm tracking-wide group/item"
                >
                  <div className="w-5 h-5 rounded-full bg-[#050865]/10 text-[#059669] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FF5C35]/10 group-hover/item:text-[#059669] transition-colors duration-300">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 transition-colors group-hover/item:text-[#050865]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Standard Primary Theme Button Trigger Action element */}
            <div className="pt-4 w-full sm:w-auto">
  <Link
  to="/services"
  onClick={() => window.scrollTo(0, 0)}
  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#050865] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-blue-950/10 transition-all duration-300 ease-out hover:bg-[#059669] sm:w-auto"
>
  <span>Learn More</span>

  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}