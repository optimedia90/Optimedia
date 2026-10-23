import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

import ContactHeroImg from "./ContectusHeromobileImage.png";
import ContactSection from "./ContactSection";
import ContactFormSection from "./ContactFormSection";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">

      <motion.img
  src={ContactHeroImg}
  alt="Contact Hero"
  initial={{ scale: 1.08 }}
  animate={{ scale: 1 }}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  className="
    absolute inset-0
    h-full w-full
    object-cover
    object-[center_15%]
    md:object-[center_25%]
    lg:object-[center_25%]
  "
/>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-[#050865]/10"></div>

        {/* Left Blur */}
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-[#008751]/10 blur-[120px]" />

        {/* Right Blur */}
        <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-[#050865]/20 blur-[140px]" />

       

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
      {/* Contact Form */}
      <ContactFormSection />

      {/* Contact Sections */}
      <ContactSection />
      {/* Google Map */}
      {/* Google Map Section */}

<section className="py-20 bg-[#f0fdf4]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-12">
      <span className="text-[#008751] font-semibold uppercase tracking-[3px]">
        Find Us
      </span>

      <h2 className="mt-3 text-5xl font-extrabold text-[#050865]">
        Visit Our Office
      </h2>

      <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
        You're always welcome to visit our office. We'd love to meet you
        and discuss your next digital project.
      </p>
    </div>

    <div className="overflow-hidden rounded-[30px] shadow-2xl border border-gray-100">

      <iframe
        src="https://www.google.com/maps?q=OptiMedia+Solutions,+Ratangarh,+Rajasthan&output=embed"
        width="100%"
        height="550"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>

    </div>

  </div>
</section>
      {/* Contact Info */}

      <Footer />
    </>
  );
}