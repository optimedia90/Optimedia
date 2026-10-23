import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SmartIdeasSection from "./SmartIdeasSection";
import PricingSection from "./PricingSection";
import CampaignSection from "./CampaignSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TeamSection from "./TeamSection";
import BlogSection from "./BlogSection";
import FaqServiceSection from "./FaqServiceSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <SmartIdeasSection />
      <PricingSection />
      <CampaignSection />
      <WhyChooseUsSection />
      <TeamSection />
      <BlogSection />
      <FaqServiceSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
