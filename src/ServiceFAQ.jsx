import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ServiceFAQ({ service }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f8fffb] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-[#008751]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#008751]">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#050865]">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Find answers to the most common questions about our{" "}
            {service.title}.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">

          {service.faqs?.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <h3 className="text-lg font-bold text-[#050865]">
                    {faq.question}
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008751]/10 text-[#008751]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: .3 }}
                    >
                      <div className="px-7 pb-7 text-gray-600 leading-8">
                        {faq.answer}
                      </div>
                    </motion.div>

                  )}

                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}