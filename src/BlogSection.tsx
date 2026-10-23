import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Importing the blog data from the single-source blogsData file
import { blogPostsData } from "./blogsData";

export default function BlogSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    // Light-blue organic gradient container matching the reference layout
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#E6F3FA] via-[#F4F9FC] to-[#F9FCFE] overflow-hidden">
      
      {/* Background Subtle Wave Vectors & Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200C200 150 400 350 700 250C1000 150 1200 400 1600 300" stroke="#008751" strokeWidth="1" strokeDasharray="4 4" className="opacity-15"/>
          <path d="M-50 250C250 200 450 400 750 300C1050 200 1250 450 1650 350" stroke="#001147" strokeWidth="1" className="opacity-5"/>
        </svg>
      </div>
      <div className="absolute top-24 left-[10%] w-72 h-72 bg-white/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-[5%] w-96 h-96 bg-[#E6F3FA]/80 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header Elements */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center flex flex-col items-center mb-16"
        >
          <span className="text-[#059669] font-extrabold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
            <span>✱</span> Our Blog
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#001147] tracking-tight">
            Recently On Our Blog
          </h2>
          <div className="w-12 h-[3px] bg-[#059669] rounded-full mt-4" />
        </motion.div>

        {/* Blog Cards Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPostsData && blogPostsData.map((post, idx) => (
            <motion.article
              key={post.id || idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              {/* Entire card is clickable and routes to /blog/:slug */}
              <Link to={`/blog/${post.slug}`} className="flex flex-col cursor-pointer">
                {/* Image & Date Badge Wrapper */}
                <div className="relative w-full h-[260px] sm:h-[280px] rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgba(0,17,71,0.02)] mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Float Absolute Corner Date Stamp Container */}
                  <div className="absolute bottom-4 left-4 flex flex-col overflow-hidden rounded-2xl shadow-md">
                    <div className="bg-[#111111] text-white font-black text-center px-4 pt-2 pb-1 text-sm tracking-tight leading-none min-w-[56px]">
                      {post.date}
                    </div>
                    <div className="bg-[#059669] text-white text-center font-bold px-3 py-1.5 text-[10px] uppercase tracking-wider leading-none">
                      {post.monthYear}
                    </div>
                  </div>
                </div>

                {/* Text Meta Content Stack */}
                <div className="flex flex-col items-start px-2 space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#001147] tracking-tight leading-[1.3] group-hover:text-[#059669] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500/90 text-[14px] leading-relaxed font-normal line-clamp-2">
                    {post.description}
                  </p>

                  {/* Styled Link Trigger Hook */}
                  <div className="pt-2">
                    <span className="text-[#001147] text-xs font-black uppercase tracking-widest relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#001147] after:transform after:scale-x-100 group-hover:after:bg-[#059669] group-hover:text-[#059669] after:transition-all after:duration-300">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}