import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How do you ensure a high ROI on our marketing budget?",
    answer: "We deploy data-driven strategies built around deep funnel optimization. Instead of chasing vanity metrics like generic clicks, we target high-intent custom audiences and aggressively optimize landing pages to maximize your direct revenue and customer acquisition cost (CAC)."
  },
  {
    id: 2,
    title: "Omnichannel Management",
    question: "Do you handle all social media and ad platforms simultaneously?",
    answer: "Yes, we build integrated omnichannel campaigns across Meta (Instagram & Facebook), Google Ads, LinkedIn, and TikTok. This ensures your brand identity stays highly consistent and cross-targets users precisely where they are most likely to convert."
  },
  {
    id: 3,
    question: "How long does it take to see measurable growth trends?",
    answer: "Paid advertising funnels (Meta/Google Ads) typically start generating tracked leads and sales within the first 14 to 30 days. Organic SEO benchmarks and high-authority brand scaling campaigns showcase compounding exponential returns over a 3 to 6-month cycle."
  }
];

export default function FaqServiceSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT CONTENT COLUMN: SERVICE OVERVIEW (Takes 6 cols out of 12) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-[#008751] font-extrabold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
                <span>✱</span> Best Digital Marketing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#001147] tracking-tight leading-tight">
                We Scale Brands <br />Through Data & Design
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
              We are a team of expert performance marketers, media buyers, and creative strategists dedicated to turning ad spend into predictable revenue. We build hyper-targeted funnels that grab attention and drive conversions.
            </p>

            {/* Micro Layout Split: Inline Media & Bullet points row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <div className="w-36 h-24 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300" 
                  alt="Service Illustration" 
                  className="w-full h-full object-cover"
                />
              </div>

              <ul className="space-y-3">
                {["Solution We Provide For You", "Provide Finest Services", "Solution We Provide For You"].map((text, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-[#001147] tracking-wide">
                    <div className="w-5 h-5 rounded-full bg-[#F4FBF7] border border-emerald-100 flex items-center justify-center text-[#008751] flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Numerical Matrix Metric Box Layouts */}
            <div className="grid grid-cols-2 gap-4 max-w-md pt-4">
              <div className="bg-[#001147] rounded-2xl p-5 text-center flex flex-col justify-center min-h-[110px] shadow-sm">
                <span className="text-white font-black text-2xl tracking-tight">10m</span>
                <span className="text-white/70 text-[11px] font-semibold tracking-wide mt-1">Insured Customers</span>
              </div>
              <div className="bg-[#008751] rounded-2xl p-5 text-center flex flex-col justify-center min-h-[110px] shadow-sm">
                <span className="text-white font-black text-2xl tracking-tight">98%</span>
                <span className="text-white/90 text-[11px] font-semibold tracking-wide mt-1">Satisfied Customers</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT COLUMN: FAQ ACCORDION BOX (Takes 6 cols out of 12) */}
          <div className="lg:col-span-6 bg-[#F4FBF7]/70 border border-emerald-600/5 rounded-[32px] p-8 sm:p-10 lg:p-12">
            <div className="space-y-2 mb-8">
              <span className="text-[#008751] font-bold text-xs uppercase tracking-wider">Asked Any Questions</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001147] tracking-tight">Asked Any Questions</h3>
            </div>

            <div className="space-y-4">
              {faqData.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="border-b border-emerald-600/10 pb-4 last:border-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                    >
                      <span className={`font-extrabold text-sm sm:text-base tracking-tight transition-colors ${isOpen ? 'text-[#008751]' : 'text-[#001147] group-hover:text-[#008751]'}`}>
                        {faq.question}
                      </span>
                      <span className="text-lg font-bold ml-4 text-slate-400 flex-shrink-0 select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pt-2 pb-1">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}