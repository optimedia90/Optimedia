import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919024040691";
const WHATSAPP_MESSAGE = "Hi OptiMedia Solutions, I would like to know more about your services.";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="27" height="27" aria-hidden="true" fill="currentColor">
      <path d="M16.02 3.2A12.65 12.65 0 0 0 5.16 22.34L3.4 28.8l6.62-1.73A12.65 12.65 0 1 0 16.02 3.2Zm0 22.94a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-3.93 1.03 1.05-3.83-.24-.39a10.22 10.22 0 1 1 8.69 4.84Zm5.61-7.66c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.37 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.85-.76 2.11-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 280);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with OptiMedia Solutions on WhatsApp"
        title="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.38)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <WhatsAppIcon />
        <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg bg-[#001147] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus:opacity-100">
          Chat on WhatsApp
        </span>
      </a>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          title="Back to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#050865] text-white shadow-[0_8px_24px_rgba(5,8,101,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#008751] focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
}
