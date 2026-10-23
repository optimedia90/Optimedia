import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogHero from "./blogHeroImg.png";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* Blog hero: preserve the full artwork without cropping its text. */}
      <section
        aria-label="Optimedia blog introduction"
        className="relative isolate flex w-full items-center justify-center overflow-hidden bg-[#f0fdf4] px-0"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_45%,rgba(16,185,129,0.10),transparent_52%)]" />

        <img
          src={BlogHero}
          alt="Optimedia blog — insights, ideas, and digital marketing growth"
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full max-w-[1920px] object-contain object-center
                     max-h-[min(460px,calc(100svh-120px))]
                     sm:max-h-[min(500px,calc(100svh-120px))]
                     lg:max-h-[min(480px,calc(100svh-120px))]"
        />
      </section>

      {/* Latest articles */}
      <BlogSection />

      {/* Contact CTA */}
      <ContactSection />

      <Footer />
    </>
  );
}