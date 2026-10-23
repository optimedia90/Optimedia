import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Search,
  BarChart3,
  MousePointerClick,
  Globe,
  Laptop,
  Zap,
  ShieldCheck,
  Users,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceOverview({ service }) {
  const isWebsite = service.slug === "website-development";


  const dashboard = service.overviewDashboard;

const iconMap = {
  Search,
  TrendingUp,
  MousePointerClick,
  BarChart3,
  Globe,
  Laptop,
  Zap,
  ShieldCheck,
  Users,
  Heart,
};

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#008751]/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#050865]/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#008751]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#008751]">
              About Our Service
            </span>

           <h2 className="mt-6 text-4xl font-black leading-tight text-[#050865] lg:text-5xl">

  {isWebsite ? (
    <>
      Building Modern
      <br />
      Websites That
      <br />
      Drive Growth
    </>
  ) : (
    <>
      Grow Your Business
      <br />
      With {service.title}
    </>
  )}

</h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              {service.overview}
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5">
              {service.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#f8fffb] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#008751]/30 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#008751]/10">
                    <CheckCircle2
                      size={22}
                      className="text-[#008751]"
                    />
                  </div>

                  <p className="font-medium text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-full bg-[#050865] px-8 py-4 font-semibold text-white transition hover:bg-[#008751]"
            >
              Get Free Consultation
            </Link>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Floating Badge */}

            <div className="absolute -top-20 left-8 z-20 rounded-2xl bg-white px-5 py-3 shadow-xl">
             <p className="text-xs uppercase tracking-wider text-gray-500">
  {dashboard?.badge?.title}
</p>

<h4 className="mt-1 flex items-center gap-2 text-2xl font-black text-[#008751]">
  <TrendingUp size={22} />
  {dashboard?.badge?.value}
</h4>
            </div>

            {/* Dashboard */}

            <div className="rounded-[35px] border border-slate-100 bg-[#f0fdf4] p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)]">
              <div className="mb-8 flex items-center justify-between">
               <div>
  <h3 className="text-2xl font-black text-[#050865]">
    {dashboard?.title}
  </h3>

  <p className="mt-1 text-sm text-gray-500">
    {dashboard?.subtitle}
  </p>
</div>
                <div className="rounded-full bg-[#008751]/10 p-3">
                  <BarChart3 className="text-[#008751]" />
                </div>
              </div>

              {/* Stats */}

           <div className="grid grid-cols-2 gap-5">
  {dashboard?.cards?.map((card, index) => {
    const Icon = iconMap[card.icon];

    return (
      <div
        key={index}
        className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition min-h-[170px] flex flex-col justify-center"
      >
        {Icon && <Icon className="mb-3 text-[#008751]" size={28} />}

        <h4 className="mt-2 text-2xl font-black text-[#050865] leading-tight">
          {card.value}
        </h4>

        <p className="mt-2 text-sm text-gray-500 leading-6">
          {card.label}
        </p>
      </div>
    );
  })}
</div>
              {/* Progress */}

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-[#050865]">
                    Overall SEO Score
                  </span>

                  <span className="font-bold text-[#008751]">92%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#008751] to-[#050865]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}