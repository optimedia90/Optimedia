import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Film, Megaphone, Camera, Palette } from "lucide-react";

// ---- Inline social icons (kept custom so we don't depend on brand logo packs) ----
const FacebookIcon = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.3C16.3 4.2 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.5H8v3h2.3V21h3.2z" />
  </svg>
);
const LinkedinIcon = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M6.94 8.5H4.06V19h2.88V8.5zM5.5 4a1.67 1.67 0 1 0 0 3.34A1.67 1.67 0 0 0 5.5 4zM20 12.9c0-3-1.6-4.4-3.75-4.4a3.23 3.23 0 0 0-2.94 1.62V8.5H10.4c.04.83 0 10.5 0 10.5h2.9v-5.86c0-.31.02-.62.11-.85.25-.62.8-1.26 1.74-1.26 1.23 0 1.72.94 1.72 2.31V19H20v-6.1z" />
  </svg>
);
const InstagramIcon = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const DribbbleIcon = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
  </svg>
);

const socialRenderers = {
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  dribbble: DribbbleIcon,
};

// ---- Skill chip color tokens (subtle tinted squares, no brand logos) ----
const skillTokens = {
  HTML: { bg: "#FDE9E4", fg: "#DD5C3C" },
  CSS: { bg: "#E3EEFD", fg: "#2E63C9" },
  JavaScript: { bg: "#FDF3D6", fg: "#B78A0B" },
  React: { bg: "#E4F6FB", fg: "#1AA6C9" },
  "Tailwind CSS": { bg: "#E1F5F0", fg: "#0E9F82" },
  "Premiere Pro": { bg: "#E9E4FB", fg: "#5B3FD1" },
  "After Effects": { bg: "#E9E4FB", fg: "#7A3FD1" },
  "DaVinci Resolve": { bg: "#E4E9FB", fg: "#3F55D1" },
  SEO: { bg: "#E1F5F0", fg: "#0E9F82" },
  "Google Ads": { bg: "#FDE9E4", fg: "#DD5C3C" },
  "Social Ads": { bg: "#E3EEFD", fg: "#2E63C9" },
  Cinematography: { bg: "#FDF3D6", fg: "#B78A0B" },
  Lighting: { bg: "#FDE9E4", fg: "#DD5C3C" },
  "Color Grading": { bg: "#E9E4FB", fg: "#5B3FD1" },
  Photoshop: { bg: "#E4E9FB", fg: "#3F55D1" },
  Illustrator: { bg: "#FDF0E4", fg: "#D1793F" },
  Figma: { bg: "#FDE9F3", fg: "#D13F97" },
};

const roleIcon = {
  "Web Developer": Code2,
  "Video Editor": Film,
  "Digital Marketing Expert": Megaphone,
  "Videographer & Editor": Camera,
  "Graphic Designer": Palette,
};

// ---- Team data ----
// Note: added a 5th member (Graphic Designer) since you asked for 5 cards but only listed 4 roles.
const teamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=500",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    socials: ["facebook", "linkedin", "instagram", "dribbble"],
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Video Editor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    socials: ["facebook", "linkedin", "instagram", "dribbble"],
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Digital Marketing Expert",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
    skills: ["SEO", "Google Ads", "Social Ads"],
    socials: ["facebook", "linkedin", "instagram", "dribbble"],
  },
  {
    id: 4,
    name: "Kabir Singh",
    role: "Videographer & Editor",
    image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&q=80&w=500",
    skills: ["Cinematography", "Lighting", "Premiere Pro"],
    socials: ["facebook", "linkedin", "instagram", "dribbble"],
  },
  {
    id: 5,
    name: "Ananya Joshi",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
    skills: ["Photoshop", "Illustrator", "Figma"],
    socials: ["facebook", "linkedin", "instagram", "dribbble"],
  },
];

// Responsive visible-card count: 1 on mobile, 2 on tablets, 3 on desktop
function useVisibleCount() {
  const [count, setCount] = useState(() =>
    typeof window === "undefined" ? 3 : window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
  );

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function TeamSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = teamMembers.length;
  const visibleCount = useVisibleCount();

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Touch/swipe support for mobile
  const [touchStartX, setTouchStartX] = useState(null);
  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 40) handlePrev();
    else if (delta < -40) handleNext();
    setTouchStartX(null);
  };

  // Always compute exactly visibleCount cards, wrapping around the array
  const visibleMembers = Array.from({ length: visibleCount }, (_, i) => teamMembers[(startIndex + i) % total]);

  return (
    <section id="team" className="relative py-14 sm:py-20 md:py-24 bg-[#F4FBF7] overflow-hidden flex items-center">
      {/* Background decorative dot grids */}
      <div className="absolute top-12 left-10 grid grid-cols-4 gap-1.5 opacity-20 select-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        ))}
      </div>
      <div className="absolute bottom-10 right-12 grid grid-cols-4 gap-1.5 opacity-20 select-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        ))}
      </div>
      <div className="absolute bottom-6 left-8 w-44 h-44 rounded-full border border-emerald-600/5 pointer-events-none -translate-x-12 translate-y-12" />
      <div className="absolute top-8 right-12 w-32 h-32 rounded-full border border-emerald-600/5 pointer-events-none translate-x-12 -translate-y-6" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-16 relative">
          <span className="text-[#059669] font-extrabold text-sm uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
            <span>✱</span> Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#001147] tracking-tight">
            Meet The Experts
          </h2>
          <div className="w-12 h-[3px] bg-[#059669] rounded-full mt-4" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-5 leading-relaxed">
            A passionate team of professionals committed to delivering innovative
            solutions and driving your business forward.
          </p>
        </div>

        {/* Carousel row */}
        <div className="relative flex items-center w-full px-11 sm:px-14">
          {/* Prev / Next controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous team member"
            className="absolute left-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#001147] text-white flex items-center justify-center shadow-lg hover:bg-[#059669] transition-all duration-300 z-30 cursor-pointer group"
          >
            <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next team member"
            className="absolute right-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#001147] text-white flex items-center justify-center shadow-lg hover:bg-[#059669] transition-all duration-300 z-30 cursor-pointer group"
          >
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Card viewport: clipped so exits don't spill; swipeable on touch */}
          <div className="w-full overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div
              className={`grid gap-5 sm:gap-6 lg:gap-7 items-stretch ${
                visibleCount === 1 ? "grid-cols-1" : visibleCount === 2 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                {visibleMembers.map((member) => {
                  const RoleIcon = roleIcon[member.role] || Code2;
                  return (
                    <motion.div
                      key={member.id}
                      custom={direction}
                      initial={{ opacity: 0, x: 40 * direction, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -40 * direction, scale: 0.96 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="bg-white rounded-[28px] p-5 sm:p-7 shadow-[0_15px_35px_rgba(0,17,71,0.04)] border border-slate-100 flex flex-col items-center text-center"
                    >
                      {/* Photo with decorative arc + role badge */}
                      <div className="relative mb-5">
                        <div className="absolute inset-x-6 bottom-0 h-16 sm:h-20 bg-[#EAF7EF] rounded-t-full -z-0" />
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-white p-1.5 border border-emerald-100 shadow-sm">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="absolute bottom-1 right-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#059669] text-white flex items-center justify-center shadow-md border-2 border-white">
                          <RoleIcon size={14} className="sm:hidden" />
                          <RoleIcon size={16} className="hidden sm:block" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-[#001147] tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-[#059669] text-xs font-bold tracking-wide mt-1">
                        {member.role}
                      </p>
                      <div className="w-10 h-[2px] bg-slate-100 rounded-full mt-4 mb-4" />

                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2.5">
                        Skills
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                        {member.skills.map((skillName) => {
                          const token = skillTokens[skillName] || { bg: "#F1F5F9", fg: "#334155" };
                          return (
                            <span
                              key={skillName}
                              style={{ backgroundColor: token.bg, color: token.fg }}
                              className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1.5 rounded-lg"
                            >
                              {skillName}
                            </span>
                          );
                        })}
                      </div>

                      {/* Socials */}
                      <div className="flex items-center gap-2.5 mt-auto">
                        {member.socials.map((platform) => {
                          const Icon = socialRenderers[platform];
                          return (
                            <div
                              key={platform}
                              className="w-8 h-8 rounded-xl bg-[#F4FBF7] border border-slate-100 flex items-center justify-center text-[#001147]/80 transition-transform hover:scale-105 hover:text-[#059669] cursor-pointer"
                            >
                              <Icon />
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {teamMembers.map((member, i) => (
            <button
              key={member.id}
              onClick={() => {
                setDirection(i > startIndex ? 1 : -1);
                setStartIndex(i);
              }}
              aria-label={`Go to ${member.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === startIndex ? "w-6 bg-[#059669]" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}