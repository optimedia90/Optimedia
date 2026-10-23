import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BGImage from "./BackgroundImg.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { projects } from "./servicesData";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const swiperRef = useRef(null);


  return (
    <section className="relative py-24 overflow-hidden bg-[#f0fdf4]"
    style={{ backgroundImage: `url(${BGImage})` }}
    >

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FF5C35]/10 blur-[140px]" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-indigo-400/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div>

            <span className="text-orange-500 font-bold uppercase tracking-[3px]">
              Our Projects
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
              Explore Our Latest
              <br />
              Creative Projects
            </h2>

          </div>

          {/* Navigation */}

          <div className="flex items-center gap-4">

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 hover:bg-white hover:text-[#050865]"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:bg-white hover:text-[#050865]"
            >
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

        {/* Slider */}

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}