import {
  Check,
  BadgePercent,
  DollarSign,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

import AboutImg from "./AboutImg.png";
import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const imageAreaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const end = 24;
    const duration = 2000;
    let startTimestamp = null;
    let frameId;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [startCount]);

  const handleImageMouseMove = (event) => {
    if (!imageAreaRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = imageAreaRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x, y });
  };

  const resetPointer = () => setPointer({ x: 0, y: 0 });

  const iconMotion = (strength) => ({
    transform: `translate3d(${pointer.x * strength}px, ${pointer.y * strength}px, 0)`,
    transition: "transform 180ms ease-out",
    willChange: "transform",
  });

  return (
    <section ref={sectionRef} className="py-24 bg-[#f0fdf4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image with cursor-responsive floating decorative icons */}
          <div
            ref={imageAreaRef}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={resetPointer}
            className="relative flex justify-center"
          >
            <div className="absolute w-[520px] h-[520px] bg-[#FCEAE4] rounded-full -z-10" />

            <img
              src={AboutImg}
              alt="About"
              className="w-full max-w-[600px]"
            />

            <div
              style={iconMotion(-26)}
              className="absolute top-6 left-4 w-20 h-20 rounded-full bg-[#D7EEFF] border-2 border-[#1F2937] flex items-center justify-center shadow-lg"
            >
              <BadgePercent size={42} className="text-[#1F2937]" />
            </div>

            <div
              style={iconMotion(34)}
              className="absolute top-16 right-12 w-16 h-16 rounded-full bg-[#FFD89B] border-2 border-[#1F2937] flex items-center justify-center shadow-lg"
            >
              <DollarSign size={32} className="text-[#1F2937]" />
            </div>

            <div
              style={iconMotion(-42)}
              className="absolute bottom-32 right-16 text-orange-400 drop-shadow-sm"
              aria-hidden="true"
            >
              <ArrowUpRight size={62} strokeWidth={2.5} />
            </div>

            <div className="absolute bottom-0 left-0 bg-white rounded-2xl shadow-xl px-5 py-4 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <BarChart3 className="text-emerald-600" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Profile Views</p>
                <h3 className="text-3xl font-bold text-[#111827]">43m+</h3>
              </div>
            </div>
          </div>

          {/* About copy */}
          <div>
            <span className="text-emerald-600 font-semibold uppercase tracking-wide">
              Best Digital Marketing
            </span>

            <h2 className="mt-4 text-5xl lg:text-5xl font-extrabold leading-tight text-[#091A46]">
              We Want To Give You
              The Best Service
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-500">
              We are 100+ professional software engineers with
              more than 10 years of experience in delivering
              superior products. Believe it because you've seen
              it. Here are real numbers that showcase our
              expertise and commitment.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-10">
              <div>
                <h1 className="text-8xl font-extrabold text-emerald-600">
                  {count}
                </h1>
                <h3 className="text-4xl font-bold text-[#091A46] leading-tight">
                  Year
                  <br />
                  Experience
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  "Product Engineering",
                  "Digital Services",
                  "IT Consultancy",
                  "Digital Marketing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FFE3DB] flex items-center justify-center">
                      <Check size={18} className="text-emerald-600" />
                    </div>
                    <span className="text-xl font-semibold text-[#111827]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
