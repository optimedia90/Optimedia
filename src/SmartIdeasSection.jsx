import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { smartIdeas } from "./servicesData";
import { Link } from "react-router-dom";

export default function SmartIdeasSection() {
  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle = "Generate Smart Ideas For Your Business";
  const firstLine = "Generate Smart Ideas";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedTitle(fullTitle);
      return;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedTitle(fullTitle.slice(0, index));
      if (index >= fullTitle.length) window.clearInterval(timer);
    }, 65);

    return () => window.clearInterval(timer);
  }, []);

  // Container animation configuration for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Upward smooth sliding reveal animation variants for elements
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const firstLineTyped = typedTitle.slice(0, firstLine.length);
  const secondLineTyped = typedTitle.length > firstLine.length
    ? typedTitle.slice(firstLine.length + 1)
    : "";

  return (
    <section className="relative py-24 bg-[#f0fdf4] overflow-hidden">
      {/* Structural Abstract Geometric Art Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF5C35]/5 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#050865]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center"
        >
          <span className="text-[#059669] font-extrabold text-sm uppercase tracking-[0.25em] px-4 py-1.5 bg-[#FF5C35]/5 rounded-full mb-4 inline-block">
            Smart Business
          </span>

          <h2
            aria-label={fullTitle}
            className="text-4xl sm:text-5xl font-extrabold text-[#050865] tracking-tight leading-[1.15] mb-6 min-h-[2.3em]"
          >
            <span>{firstLineTyped}</span>
            {typedTitle.length >= firstLine.length && <br />}
            <span>{secondLineTyped}</span>
            <span
              aria-hidden="true"
              className={typedTitle.length < fullTitle.length ? "inline-block ml-1 w-[3px] h-[0.9em] align-[-0.08em] bg-[#059669] animate-pulse" : "hidden"}
            />
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Empowering modern teams with unified production insights, agile workflows, and hyper-scalable digital conversion systems.
          </p>
        </motion.div>

        {/* Dynamic Responsive Columns Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {smartIdeas.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeInUpVariants}
              whileHover={{
                y: -15,
                shadow: "0 30px 60px -15px rgba(5, 8, 101, 0.12)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white rounded-[30px] border border-slate-100 p-10 flex flex-col justify-between items-stretch shadow-[0_15px_45px_-20px_rgba(5,8,101,0.05)] overflow-hidden group relative"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#050865] group-hover:to-[#059669] transition-all duration-300" />

              <div>
                <div className="h-[220px] w-full flex items-center justify-center mb-8 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#050865] tracking-tight mb-4 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="w-full h-[1px] bg-slate-100 my-6" />

                <ul className="flex flex-col space-y-3.5 mb-8">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#050865]/5 text-[#050865] flex items-center justify-center group-hover:bg-[#FF5C35]/10 transition-colors duration-300 flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/services">
                <div className="pt-2 flex justify-start">
                  <div className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#050865] text-white shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#FF5C35]/20">
                    <ArrowRight
                      size={22}
                      className="transition-transform duration-300 ease-out group-hover:-rotate-45"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
