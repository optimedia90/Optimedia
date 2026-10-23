import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import SmartIdeasSection from '../components/SmartIdeasSection'
import PricingSection from '../components/PricingSection'
import CampaignSection from '../components/CampaignSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import TeamSection from '../components/TeamSection'
import BlogSection from '../components/BlogSection'
import FaqServiceSection from '../components/FaqServiceSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

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
  )
}

export default Home