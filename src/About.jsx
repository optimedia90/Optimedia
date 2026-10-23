import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutheroImg from "../assets/aboutUsHeroImg.png";
import AboutheroImgMobile from "../assets/mobileAboutHeroImg.png";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TeamSection from "../components/TeamSection";
import SmartIdeasSection from "../components/SmartIdeasSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">

  {/* Desktop Hero */}
  <motion.img
    src={AboutheroImg}
    alt="About Hero"
    initial={{ scale: 1.08 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 2,
      ease: "easeOut",
    }}
    className="absolute inset-0 hidden md:block h-full w-full object-cover"
  />

  {/* Mobile Hero */}
 <motion.img
  src={AboutheroImgMobile}
  alt="About Hero Mobile"
  initial={{ scale: 1.08 }}
  animate={{ scale: 1 }}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  className="absolute inset-0 block md:hidden h-full w-full object-cover object-[center_10%]"
/>

  {/* Light Overlay */}
  <div className="absolute inset-0 bg-[#050865]/10" />

  {/* Decorative Blur */}
  <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-[#008751]/10 blur-[120px]" />

  <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-[#050865]/15 blur-[140px]" />

  {/* Dots */}
  <div className="absolute top-12 left-8 md:top-20 md:left-16 grid grid-cols-5 gap-2 opacity-30">
    {[...Array(25)].map((_, i) => (
      <span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-white"
      />
    ))}
  </div>

  {/* Bottom Curve */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      fill="#f0fdf4"
      d="M0,80 C300,140 900,20 1440,90 L1440,120 L0,120 Z"
    />
  </svg>

</section>

      {/* About Page Sections */}
      <AboutSection />
      <SmartIdeasSection />
      {/* Company Story */}
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      {/* Timeline */}
      {/* Team */}
      <TeamSection />
      <ProjectsSection />
      <BlogSection />
      
      

      <Footer />
    </>
  );
}