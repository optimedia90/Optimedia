import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#050865] via-[#0a1185] to-[#008751]" />

      {/* Blur */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-white">
              Let's Work Together
            </span>

            <h2 className="mt-8 text-4xl lg:text-6xl font-black leading-tight text-white">
              Ready To Grow
              <br />
              Your Business?
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              Partner with Optimedia Solutions and let our experts
              create powerful digital marketing strategies that
              increase traffic, generate quality leads, and grow
              your business faster.
            </p>

            {/* Trust Points */}

            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              {[
                "Free Consultation",
                "Expert Team",
                "Custom Strategy",
                "Quick Response",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#8df0b3]"
                  />

                  <span className="font-medium text-white">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-[35px] bg-white p-10 shadow-2xl">

            <h3 className="text-3xl font-black text-[#050865]">
              Get Your Free Consultation
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Tell us about your project and our experts will
              contact you with the best digital marketing strategy.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-5">

              <Link
                to="/contect"
                className="flex items-center justify-center gap-3 rounded-full bg-[#050865] px-8 py-4 font-semibold text-white transition hover:bg-[#008751]"
              >
                Get Free Consultation

                <ArrowRight size={20} />
              </Link>

              <a
                href="tel:+919024040691"
                className="flex items-center justify-center gap-3 rounded-full border-2 border-[#050865] px-8 py-4 font-semibold text-[#050865] transition hover:bg-[#050865] hover:text-white"
              >
                <Phone size={18} />

                Call Now
              </a>

            </div>

            {/* Divider */}

            <div className="my-10 h-px bg-gray-200" />

            {/* Contact */}

            <div className="space-y-4">

              <div>
                <p className="text-sm text-gray-500">
                  Email Address
                </p>

                <h4 className="font-bold text-[#050865]">
                  optimediasolutions90@gmail.com
                </h4>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone Number
                </p>

                <h4 className="font-bold text-[#050865]">
                  +91 90240 40691
                </h4>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}