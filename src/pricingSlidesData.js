// data/pricingSlidesData.js
// Add your own illustration images in src/assets and update the imports below.
import socialMediaImg from "../assets/SMM_Service.png";
import webDevImg from "../assets/webserviceplan.png";

export const pricingSlides = [
  {
    id: 1,
    type: "single", // single plan with a big price + feature checklist
    title: "Social Media Marketing",
    description:
      "Boost your brand's presence and engagement across all major social platforms with our result-driven strategies.",
    planLabel: "YEARLY PLAN",
    price: 450,
    period: "year",
    features: ["Social Media Strategy", "Content Creation", "Performance Analytics"],
    ctaLabel: "LEARN MORE",
    image: socialMediaImg, // replace with: socialMediaImg
  },
  {
    id: 2,
    type: "tiers", // three side-by-side pricing tiers
    title: "Web Development",
    description:
      "We build fast, responsive and modern websites tailored to your business goals and user needs.",
    image: webDevImg, // replace with: webDevImg
    tiers: [
      {
        name: "Silver",
        icon: "star",
        tagline: "Perfect for small businesses and startups.",
        price: 450,
        priceLabel: null,
        features: ["Up to 5 Pages", "Responsive Design", "Basic SEO"],
        ctaLabel: "Get Started",
        highlighted: false,
      },
      {
        name: "Premium",
        icon: "award",
        badge: "POPULAR",
        tagline: "Ideal for growing businesses.",
        price: 850,
        priceLabel: null,
        features: ["Up to 15 Pages", "Advanced SEO", "CMS Integration", "Priority Support"],
        ctaLabel: "Get Started",
        highlighted: true,
      },
      {
        name: "Custom",
        icon: "crown",
        tagline: "Tailored solutions for your unique needs.",
        price: null,
        priceLabel: "Let's Talk",
        features: ["Unlimited Pages", "Custom Features", "Dedicated Support"],
        ctaLabel: "Contact Us",
        highlighted: false,
      },
    ],
  },
];