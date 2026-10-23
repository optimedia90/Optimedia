import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BlogHero from "../assets/blogHeroImg.png"; // apni image ka naam

import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* ================= Hero Section ================= */}

      <section className="relative overflow-hidden">
        {/* Desktop */}
        <img
          src={BlogHero}
          alt="Blog Hero"
          className="hidden md:block w-full object-cover"
        />

        {/* Mobile */}
        <img
          src={BlogHero}
          alt="Blog Hero"
          className="block md:hidden w-full object-cover object-center"
        />

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

      {/* ================= Latest Blogs ================= */}

      <BlogSection />

      {/* ================= Contact CTA ================= */}

      <ContactSection />

      <Footer />
    </>
  );
}