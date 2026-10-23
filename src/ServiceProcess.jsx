import { motion } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  Code2,
  Server,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const icons = [
  ClipboardList,
  PenTool,
  Code2,
  Server,
  Rocket,
  LifeBuoy,
];

export default function ServiceProcess({ service }) {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#008751]/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#050865]/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-[#008751]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#008751]">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#050865]">
  Our Proven
  <br />
  {service.title} Process
</h2>

<p className="mt-6 text-lg leading-8 text-gray-600">
  We follow a proven step-by-step workflow to deliver
  high-quality results and ensure every project is completed
  successfully.
</p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-14 hidden h-[2px] bg-gradient-to-r from-[#008751] via-[#050865] to-[#008751] lg:block" />

          <div className="grid gap-10 lg:grid-cols-3">

            {service.process?.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="relative"
                >
                  {/* Step Number */}

                  <div className="absolute -top-4 right-6 text-6xl font-black text-[#050865]/5">

                   {step.step}

                  </div>

                  <div className="group relative rounded-[30px] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Icon */}

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#008751]/10 transition group-hover:bg-[#050865]">

                      <Icon
                        size={30}
                        className="text-[#008751] group-hover:text-white"
                      />

                    </div>

                    {/* Title */}
<h3 className="mt-8 text-2xl font-bold text-[#050865]">
  {step.title}
</h3>

                    {/* Description */}

                   <p className="mt-4 leading-7 text-gray-600">
  {step.description}
</p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}