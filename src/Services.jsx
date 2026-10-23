import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from ".././Navbar";
import Footer from ".././Footer";

import { services } from ".././MainServices";
import ServiceBg from ".././ServiceBg.png"

export default function Services() {
  return (
    <>
      <Navbar />

      {/* ================= Hero ================= */}

     <section
  className="relative overflow-hidden bg-[#f0fdf4] py-28"
  style={{
    backgroundImage: `url(${ServiceBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

        {/* Background Blur */}

        <div className="absolute -top-28 left-0 h-72 w-72 rounded-full bg-[#008751]/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#050865]/10 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="uppercase tracking-[4px] text-[#008751] font-bold">
              Our Services
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-black text-[#050865] leading-tight">

              Digital Marketing
              <br />
              Services

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-gray-600 leading-8">

              We provide complete digital marketing solutions
              to help businesses increase visibility, generate
              quality leads and accelerate growth.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= Services ================= */}

      <section className="bg-[#f0fdf4] pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
              >

                <Link
                  to={`/services/${service.slug}`}
                  className="group block rounded-[30px] bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >

                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#050865]/5">

                    <div className="h-7 w-7 rounded-full bg-[#008751]" />

                  </div>

                  {/* Title */}

                  <h2 className="mt-8 text-2xl font-bold text-[#050865]">

                    {service.title}

                  </h2>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-gray-500">

                    {service.shortDescription}

                  </p>

                  {/* Button */}

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#008751]">

                    Learn More

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}