import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBlogBySlug } from "../data/blogsData";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <>
        <Navbar />
        <section className="py-24 text-center bg-[#F9FCFE]">
          <h2 className="text-2xl font-extrabold text-[#001147]">Blog not found</h2>
          <Link to="/blog" className="text-[#059669] font-bold mt-4 inline-block">
            ← Back to Blog
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#E6F3FA] via-[#F4F9FC] to-[#F9FCFE]">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="text-[#059669] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1 mb-8"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-md">
              <div className="bg-[#111111] text-white font-black text-center px-4 pt-2 pb-1 text-sm tracking-tight leading-none min-w-[56px]">
                {blog.date}
              </div>
              <div className="bg-[#059669] text-white text-center font-bold px-3 py-1.5 text-[10px] uppercase tracking-wider leading-none">
                {blog.monthYear}
              </div>
            </div>
            <span className="text-gray-500 text-sm">By {blog.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#001147] tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-72 sm:h-96 object-cover rounded-[28px] mb-8 shadow-[0_15px_40px_rgba(0,17,71,0.05)]"
          />

          <div className="text-gray-600 leading-relaxed space-y-5">
            {blog.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}