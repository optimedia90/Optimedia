import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { services } from "../data/servicesData";

export default function ServicesSection() {
  const swiperRef = useRef(null);

  return (
    <section className="relative pt-10 pb-20 bg-[#f0fdf4] from-[#fbf4ed]/60 via-white to-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-100/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-100/50 blur-3xl -z-10" />

      {/* Outer Padding bounds increased safely to fit side buttons */}
      <div className="max-w-7xl mx-auto px-10 md:px-14 relative">
        <div className="relative">
          
          {/* Left Arrow (Desktop + Mobile Responsive Interface unified) */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-x-5 md:-translate-x-7 -translate-y-1/2 z-30 w-11 h-11 md:w-16 md:h-16 rounded-full bg-[#292c7d] text-white flex items-center justify-center hover:bg-[#059669] active:scale-95 duration-300 shadow-xl cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow (Desktop + Mobile Responsive Interface unified) */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute right-0 top-1/2 translate-x-5 md:translate-x-7 -translate-y-1/2 z-30 w-11 h-11 md:w-16 md:h-16 rounded-full bg-[#292c7d] text-white flex items-center justify-center hover:bg-[#059669] active:scale-95 duration-300 shadow-xl cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Main Swiper Window Container */}
          <div className="rounded-[30px] bg-white shadow-[0_20px_55px_rgba(0,0,0,.06)] border border-slate-100/60 overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              speed={600}
              spaceBetween={0}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {services.map((item, index) => (
                <SwiperSlide key={item.id ?? index} className="h-auto">
                  <div
                    className={`relative h-full flex flex-col items-center text-center px-6 sm:px-10 py-14 bg-white group transition-colors duration-300 hover:bg-slate-50/30
                    ${
                      index !== 0
                        ? "md:before:absolute md:before:left-0 md:before:top-14 md:before:bottom-14 md:before:w-[1px] md:before:bg-slate-100"
                        : ""
                    }`}
                  >
                    {/* Graphic Container space */}
                    <div className="h-36 flex items-center justify-center mb-8 w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-42 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Title string block */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1e205d] tracking-tight max-w-[240px] mx-auto leading-tight transition-colors ">
                      {item.title}
                    </h3>

                    {/* Description body string */}
                    <p className="mt-4 text-slate-400 font-medium text-sm sm:text-base leading-relaxed max-w-[260px] mx-auto">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}