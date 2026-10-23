import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Globe,
  Target,
  Award,
  BarChart3,
} from "lucide-react";

const icons = [
  TrendingUp,
  Users,
  Globe,
  Target,
  Award,
  BarChart3,
];

export default function ServiceBenefits({ service }) {
  return (
    <section className="bg-[#f8fffb] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-[#008751]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#008751]">
            Benefits
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#050865]">
            Why Choose {service.title}?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our strategies are focused on delivering measurable growth,
            better rankings, and long-term business success.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {service.benefits?.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-white p-8 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#008751]/10 group-hover:bg-[#050865] transition">
                  <Icon
                    size={30}
                    className="text-[#008751] group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#050865]">
  {benefit.title}
</h3>

<p className="mt-4 text-gray-500 leading-7">
  {benefit.description}
</p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}