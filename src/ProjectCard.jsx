import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[30px]"
    >
      {/* Image */}

      <div className="overflow-hidden rounded-[30px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#050865]/80 via-transparent to-transparent" />

      {/* Content */}

      <div className="absolute bottom-8 left-8 right-8">

        <div className="bg-white rounded-3xl p-6 shadow-2xl transition duration-300 group-hover:-translate-y-3">

          <span className="text-emerald-600 font-semibold">
            {project.category}
          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#050865]">
            {project.title}
          </h3>

          <button className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#050865] text-white transition duration-300 hover:bg-[#059669]">
            <ArrowUpRight size={22} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}