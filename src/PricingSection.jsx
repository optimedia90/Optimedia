import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Star, Award, Crown, ChevronLeft, ChevronRight } from "lucide-react";
import { pricingSlides } from "./pricingSlidesData";
import DesktopBgImage from "./pricingBgImg.png";
import MobileBgImage from "./pricingMobileBgimg.png";

const AUTOPLAY_DELAY = 6000;

const tierIcon = { star: Star, award: Award, crown: Crown };

const contactLink = (serviceName) =>
  `/contect?service=${encodeURIComponent(serviceName)}#contact-form`;

const PricingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const total = pricingSlides.length;
  const autoplayRef = useRef(null);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setActiveIndex((index + total) % total);
  }, [total]);

  const goNext = useCallback(() => goTo(activeIndex + 1, 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1, -1), [activeIndex, goTo]);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (isHovered) return;
    autoplayRef.current = setInterval(() => {
      goTo(activeIndex + 1, 1);
    }, AUTOPLAY_DELAY);
  }, [activeIndex, goTo, isHovered]);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, isHovered]);

  const handleManualGo = (index, dir) => {
    stopAutoplay();
    goTo(index, dir);
  };

  const handleDragEnd = (e, info) => {
    if (isHovered) return;
    const threshold = 50; // Optimized mobile swipe threshold
    if (info.offset.x < -threshold) {
      handleManualGo(activeIndex + 1, 1);
    } else if (info.offset.x > threshold) {
      handleManualGo(activeIndex - 1, -1);
    }
  };

  const slide = pricingSlides[activeIndex];

  return (
    <div
      className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans overflow-hidden bg-no-repeat bg-cover bg-center bg-[image:var(--mobile-bg)] lg:bg-[image:var(--desktop-bg)]"
      style={{
        "--desktop-bg": `url(${DesktopBgImage})`,
        "--mobile-bg": `url(${MobileBgImage})`,
      }}
    >
      {/* Top Header Section */}
      <div className="text-center mb-8 sm:mb-12 relative z-10 w-full px-4">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase flex items-center justify-center gap-1 mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Pricing Plans
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
          We Combine Pricing Plans <br className="hidden sm:inline" /> For Your Business!
        </h2>
      </div>

      {/* Main Slider Wrapper */}
      <div className="w-full max-w-7xl relative z-10 flex items-center justify-center px-0 md:px-12 lg:px-16">
        
        {/* Left Arrow Button (Hidden on Mobile screens) */}
        <button
          onClick={() => handleManualGo(activeIndex - 1, -1)}
          className="absolute left-0 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0b194f] border border-white/20 transition-all duration-300 shadow-lg group z-30"
          aria-label="Previous Plan"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Card Viewport Container */}
        <div 
          className="w-full max-w-6xl relative px-1 sm:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={slide.id}
              custom={direction}
              initial={{ opacity: 0, x: 80 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 * direction }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              drag={isHovered ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className={`relative w-full h-auto flex flex-col justify-center bg-white text-gray-900 rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-12 lg:p-16 shadow-2xl ${
                isHovered ? "cursor-default" : "cursor-grab active:cursor-grabbing"
              }`}
            >
              {slide.type === "single" ? (
                <SinglePlanSlide slide={slide} />
              ) : (
                <TieredPlanSlide slide={slide} />
              )}

              {/* Responsive Bottom Controls Row (Dynamic alignment for Mobile/Desktop) */}
              <div className="mt-8 lg:mt-4 flex items-center justify-between border-t border-gray-100 pt-4 md:border-0 md:pt-0">
                {/* Mobile Arrows (Visible only on screen < 768px for accessibility) */}
                <div className="flex md:hidden items-center gap-2">
                  <button 
                    onClick={() => handleManualGo(activeIndex - 1, -1)}
                    className="p-2 rounded-full border border-gray-200 active:bg-gray-50 text-[#0b194f]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleManualGo(activeIndex + 1, 1)}
                    className="p-2 rounded-full border border-gray-200 active:bg-gray-50 text-[#0b194f]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="md:absolute md:bottom-6 md:right-8 lg:right-12 flex items-center gap-1.5 z-20 ml-auto md:ml-0">
                  {pricingSlides.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (i !== activeIndex) {
                          handleManualGo(i, i > activeIndex ? 1 : -1);
                        }
                      }}
                      aria-label={`Go to ${s.title} plan`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? "w-6 bg-[#0b194f]" : "w-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleManualGo(activeIndex + 1, 1)}
          className="absolute right-0 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0b194f] border border-white/20 transition-all duration-300 shadow-lg group z-30"
          aria-label="Next Plan"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// ---------------- Slide 1: single plan ----------------
function SinglePlanSlide({ slide }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
      {/* Content */}
      <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6 order-2 lg:order-1">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0b194f] tracking-tight leading-tight">
            {slide.title}
          </h3>
          <div className="w-10 h-[3px] bg-emerald-500 rounded-full" />
          <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
            {slide.description}
          </p>
        </div>

        <div className="space-y-1">
          <span className="text-emerald-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest block">
            {slide.planLabel}
          </span>
          <div className="flex items-baseline text-[#0b194f]">
            <span className="text-xl sm:text-2xl font-bold">$</span>
            <span className="text-4xl sm:text-5xl font-black tracking-tight">{slide.price}</span>
            <span className="text-gray-400 font-medium text-xs sm:text-sm ml-1.5">
              /{slide.period}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-1">
          <Link
            to={contactLink(slide.title)}
            onPointerDown={(e) => e.stopPropagation()}
            className="bg-[#0b194f] text-white font-bold text-xs sm:text-sm px-6 py-2 rounded-full flex items-center justify-center gap-2 group shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-45 h-15 sm:w-auto shrink-0"
          >
            {slide.ctaLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex flex-col gap-2 bg-emerald-50/70 border border-emerald-100/70 px-4 py-3 rounded-xl flex-1">
            {slide.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div className="bg-emerald-500 text-white rounded-full p-0.5 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-xs font-semibold text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Illustration Wrapper */}
      <IllustrationColumn image={slide.image} alt={slide.title} />
    </div>
  );
}

// ---------------- Slide 2: three-tier plan ----------------
function TieredPlanSlide({ slide }) {
  const iconTone = {
    star: "bg-gray-100 text-gray-400",
    award: "bg-amber-100 text-amber-500",
    crown: "bg-indigo-50 text-indigo-400",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      <div className="lg:col-span-8 flex flex-col space-y-4 order-2 lg:order-1">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0b194f] tracking-tight leading-tight">
            {slide.title}
          </h3>
          <div className="w-10 h-[3px] bg-emerald-500 rounded-full" />
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl">
            {slide.description}
          </p>
        </div>

        {/* Tiers Grid System - Mobile view will block-stack columns cleanly */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {slide.tiers.map((tier) => {
            const Icon = tierIcon[tier.icon] || Star;
            const serviceName = `${slide.title} - ${tier.name}`;

            return (
              <div
                key={tier.name}
                className={`relative flex flex-col items-center text-center rounded-xl p-4 border transition-all ${
                  tier.highlighted
                    ? "border-emerald-500 shadow-md bg-white sm:scale-[1.02]"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-2.5 bg-emerald-600 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                    {tier.badge}
                  </span>
                )}

                <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 ${iconTone[tier.icon] || iconTone.star}`}>
                  <Icon className="w-4 h-4" fill="currentColor" />
                </div>

                <h4 className="text-sm font-extrabold text-emerald-600">{tier.name}</h4>
                <p className="text-[10px] text-gray-500 mt-0.5 mb-2 leading-tight">{tier.tagline}</p>

                <div className="text-[#0b194f] font-black text-xl mb-2">
                  {tier.priceLabel ? tier.priceLabel : `$${tier.price}`}
                </div>

                <div className="flex flex-col gap-1 w-full mb-3">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-left">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-[10px] font-semibold text-gray-600 leading-tight">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={contactLink(serviceName)}
                  onPointerDown={(e) => e.stopPropagation()}
                  className={`mt-auto w-full text-[11px] font-bold py-2 rounded-full text-center transition-colors ${
                    tier.highlighted
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "border border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <IllustrationColumn image={slide.image} alt={slide.title} />
    </div>
  );
}

// ---------------- Shared right-side illustration ----------------
function IllustrationColumn({ image, alt }) {
  return (
    <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 relative group w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none mx-auto">
      <div className="absolute inset-0 bg-emerald-50/60 rounded-full scale-90 lg:scale-105 pointer-events-none transition-transform group-hover:scale-110 duration-500" />
      <motion.div
        className="relative z-10 w-full aspect-square flex items-center justify-center p-2"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      >
        {image ? (
          <img
            src={image}
            alt={alt}
            className="w-full h-auto object-contain max-h-[220px] sm:max-h-[320px] lg:max-h-[400px] pointer-events-none select-none"
            draggable={false}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-32 flex items-center justify-center text-gray-300 text-xs font-semibold"></div>
        )}
      </motion.div>
    </div>
  );
}
export default PricingSection;