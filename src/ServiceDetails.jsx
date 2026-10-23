import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";


import Navbar from ".././Navbar";
import Footer from ".././Footer";

import { services } from ".././MainServices";

import ServiceHero from ".././services/ServiceHero";
import ServiceOverview from ".././services/ServiceOverview";
import ServiceBenefits from ".././services/ServiceBenefits";
import ServiceProcess from ".././services/ServiceProcess";
import ServiceFAQ from ".././services/ServiceFAQ";
import ServiceCTA from ".././services/ServiceCTA";
import ServiceTypes from ".././services/ServiceTypes";


export default function ServiceDetails() {
  
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}, [slug]);

  // Service Not Found
  if (!service) {
    return (
      <>
        <Navbar />

        <section className="min-h-[70vh] flex items-center justify-center bg-[#f0fdf4]">
          <div className="text-center px-6">

            <h1 className="text-5xl font-black text-[#050865]">
              Service Not Found
            </h1>

            <p className="mt-5 text-gray-600">
              Sorry, the service you are looking for doesn't exist.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex rounded-full bg-[#050865] px-8 py-4 text-white transition hover:bg-[#008751]"
            >
              Back To Services
            </Link>

          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <ServiceHero service={service} />

      {/* Overview */}
      <ServiceOverview service={service} />

      <ServiceTypes service={service} />

      <ServiceBenefits service={service} />

      <ServiceProcess service={service} />

      <ServiceFAQ service={service} />

      <ServiceCTA />

      <Footer />
    </>
  );
}