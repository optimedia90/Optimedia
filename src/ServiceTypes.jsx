import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function ServiceTypes({ service }) {
  const [active, setActive] = useState(0);

  if (!service?.serviceTypes?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#f8fffb] py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#008751]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#050865]/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-[#008751]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#008751]">
            Our Solutions
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#050865]">
            Choose The Right
            <br />
            {service.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our specialized solutions designed to help your
            business achieve better results.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-5">

  {service.serviceTypes.map((item, index) => (

    <div
      key={item.id}
      className={`overflow-hidden rounded-[24px] border transition-all duration-300 ${
        active === index
          ? "border-[#008751] bg-white shadow-xl"
          : "border-slate-100 bg-white"
      }`}
    >

      {/* Card */}

      <button
        onClick={() => setActive(index)}
        className="group flex w-full items-center justify-between p-6 text-left"
      >

        <div>

          <h3 className="text-xl font-bold text-[#050865]">
            {item.title}
          </h3>

          <p className="mt-2 text-gray-500">
            {item.description}
          </p>

        </div>

        <ChevronRight
          className={`transition duration-300 ${
            active === index
              ? "rotate-90 text-[#008751]"
              : "text-gray-400"
          }`}
        />

      </button>

      {/* MOBILE DETAILS */}

      <AnimatePresence>

        {active === index && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .35 }}
            className="border-t border-slate-100 lg:hidden"
          >

            <div className="p-6">

              <span className="inline-flex rounded-full bg-[#008751]/10 px-4 py-2 text-sm font-semibold text-[#008751]">
                Featured Solution
              </span>

              <p className="mt-5 leading-8 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#008751]" />
                  <span>Customized Strategy</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#008751]" />
                  <span>Industry Best Practices</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#008751]" />
                  <span>Performance Focused</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#008751]" />
                  <span>Monthly Optimization</span>
                </div>

              </div>

            <Link
  to={`/contect?service=${encodeURIComponent(
    service.serviceTypes[active].title
  )}#contact-form`}
  className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#050865] px-7 py-4 font-semibold text-white transition hover:bg-[#008751]"
>
  Get Started
  <ArrowRight size={18} />
</Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  ))}

</div>

          {/* RIGHT */}

          <AnimatePresence mode="wait">

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: .4 }}
              className="rounded-[35px] bg-white p-10 shadow-xl border border-slate-100"
            >

              <span className="inline-flex rounded-full bg-[#008751]/10 px-4 py-2 text-sm font-semibold text-[#008751]">

                Featured Solution

              </span>

              <h3 className="mt-6 text-4xl font-black text-[#050865]">

                {service.serviceTypes[active].title}

              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">

                {service.serviceTypes[active].description}

              </p>

              {/* Features */}

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-3">

                  <CheckCircle2 className="text-[#008751]" />

                  <span>Customized Strategy</span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2 className="text-[#008751]" />

                  <span>Industry Best Practices</span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2 className="text-[#008751]" />

                  <span>Performance Focused</span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2 className="text-[#008751]" />

                  <span>Monthly Optimization</span>

                </div>

              </div>

             <Link
  to={`/contect?service=${encodeURIComponent(
    service.serviceTypes[active].title
  )}#contact-form`}
  className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#050865] px-7 py-4 font-semibold text-white transition hover:bg-[#008751]"
>
  Get Started
  <ArrowRight size={18} />
</Link>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}