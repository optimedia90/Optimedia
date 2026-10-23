import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // Case 1: Agar URL me hash anchor hai (e.g., #contact-form)
    if (hash) {
      const targetId = hash.replace("#", "");
      
      // Helper function jo element par smooth scroll trigger karegi
      const scrollToElement = (element) => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

      const element = document.getElementById(targetId);
      if (element) {
        scrollToElement(element);
        return;
      }

      // ADVANCED: Agar page load/render hone me time le rha hai, toh DOM par nazar rakho
      const observer = new MutationObserver((mutations, obs) => {
        const dynamicElement = document.getElementById(targetId);
        if (dynamicElement) {
          scrollToElement(dynamicElement);
          obs.disconnect(); // Element milte hi observer ko band karo (Performance Optimization)
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Safe fallback timeout agar element pure page par kahin na mile
      const fallbackTimeout = setTimeout(() => observer.disconnect(), 2000);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimeout);
      };
    }

    // Case 2: Normal page change behavior (Top reset hamesha instant hona chaiye for better UX)
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Instant reset bina kisi dynamic delay ya smooth lag ke
      });
    } catch (error) {
      // Old browsers fallback jo 'behavior: "instant"' support nhi karte
      window.scrollTo(0, 0);
    }
    
  }, [pathname, hash, search]); // Suno jab path, query params, ya hash badle

  return null;
}