import React, { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { services } from "./MainServices";
import SidebarBg from "./mobileHeroBgForServices.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
  setServicesOpen(false);
}, [location.pathname]);
  


  const handleLogoClick = () => {
  setIsOpen(false);

  if (location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

  return (
    
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-[#f0fdf4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
        <Link
  to="/"
  onClick={handleLogoClick}
  aria-label="Optimedia Solutions home"
  className="flex-shrink-0 inline-flex items-center gap-3"
>
  <img
    src="/optimedia_logo.jpeg"
    alt="Optimedia Solutions"
    className="h-12 w-12 rounded-full object-cover"
  />
  <span className="flex flex-col leading-tight">
    <span className="text-[#001147] text-base sm:text-lg font-black tracking-tight uppercase">Optimedia</span>
    <span className="text-[#008751] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">Solutions</span>
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-slate-800">
           <NavLink
  to="/"
  className={({ isActive }) =>
    `transition ${
      isActive
        ? "text-[#008751] font-semibold"
        : "hover:text-[#050865]"
    }`
  }
>
  Home
</NavLink>

            <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-[#008751] font-semibold"
      : "hover:text-[#050865]"
  }
>
  About Us
</NavLink>
<div
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>

  <button className="flex items-center gap-1 hover:text-[#050865] transition">
  Services
  <ChevronDown
    size={16}
    className={`transition duration-300 ${
      servicesOpen ? "rotate-180" : ""
    }`}
  />
</button>

  <div
  className={`absolute left-0 top-full mt-3 w-80 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl transition-all duration-300 ${
    servicesOpen
      ? "visible opacity-100"
      : "invisible opacity-0"
  }`}
>

    {services.map((service) => (

    <NavLink
  key={service.id}
  to={`/services/${service.slug}`}
  onClick={() => {
    setServicesOpen(false);
  }}
  className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-[#f0fdf4] hover:text-[#008751]"
>
  {service.title}
</NavLink>

    ))}

  </div>

</div>

           <NavLink
  to="/blog"
  className={({ isActive }) =>
    isActive
      ? "text-[#008751] font-semibold"
      : "hover:text-[#050865] transition"
  }
>
  Blog
</NavLink>

            <NavLink
  to="/contect"
  className={({ isActive }) =>
    isActive
      ? "text-[#008751] font-semibold"
      : "hover:text-[#050865]"
  }
>
  Contact
</NavLink>
          </div>

          {/* Desktop Button */}
         <div className="hidden md:block">
  <Link
    to="/contect#contact-form"
    className="flex items-center gap-2 rounded-full bg-[#050865] px-6 py-3 text-white transition hover:bg-[#059669]"
  >
    Get Quote
    <ArrowRight size={18} />
  </Link>
</div>

          {/* Mobile Toggle */}
         <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-[#008751]/20 bg-white text-[#050865] shadow-md transition-all duration-300 hover:bg-[#050865] hover:text-white hover:border-[#050865] active:scale-95"
>
  {isOpen ? <X size={22} /> : <Menu size={22} />}
</button>

        </div>

      </div>

      {/* Mobile Menu */}

     {/* ================= Mobile Menu ================= */}

  {/* Overlay */}

  <div
    onClick={() => setIsOpen(false)}
    className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${
      isOpen
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`}
  />

  {/* Drawer */}

 <div
  className={`fixed top-0 right-0 z-50 h-screen w-[min(88vw,390px)] overflow-hidden border-l border-white/70 shadow-[-24px_0_80px_rgba(5,8,101,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
    style={{
      backgroundImage: `url(${SidebarBg})`,
    }}
  />

  {/* White Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-[#e9fbf4]/90 backdrop-blur-xl" />

  {/* Content */}
  <div className="relative z-10 h-full">

    {/* Header */}

    <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/70 px-6 py-5 shadow-sm">

      <img
        src="/optimedia_logo.jpeg"
        alt="Optimedia"
        className="h-11 w-11 rounded-full object-cover ring-4 ring-white shadow-[0_4px_18px_rgba(5,8,101,0.14)]"
      />

      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close navigation menu" className="rounded-full border border-slate-200 bg-white/80 p-2.5 text-[#050865] shadow-sm transition duration-200 hover:bg-[#050865] hover:text-white active:scale-95"
      >
        <X size={22} />
      </button>
      

    </div>

    {/* Links */}

    <div className="h-[calc(100vh-100px)] overflow-y-auto px-3 pb-36 pt-3">

      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => `group flex items-center rounded-xl px-4 py-3.5 text-[15px] transition-all duration-200 ${isActive ? "bg-white text-[#050865] font-semibold shadow-sm ring-1 ring-[#050865]/5" : "text-slate-700 hover:bg-white/80 hover:text-[#008751]"}`}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => `group flex items-center rounded-xl px-4 py-3.5 text-[15px] transition-all duration-200 ${isActive ? "bg-white text-[#050865] font-semibold shadow-sm ring-1 ring-[#050865]/5" : "text-slate-700 hover:bg-white/80 hover:text-[#008751]"}`}
      >
        About Us
      </NavLink>

      {/* Services */}

      <div className="my-1 rounded-xl border-y border-slate-200/80 py-1">

  <button
    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-200 ${mobileServicesOpen ? "bg-white text-[#050865] shadow-sm ring-1 ring-[#050865]/5" : "text-slate-800 hover:bg-white/80"}`}
  >
    <span>Services</span>

    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        mobileServicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  <div
    className={`overflow-hidden transition-all duration-300 ${
      mobileServicesOpen ? "max-h-[700px]" : "max-h-0"
    }`}
  >
    <div className="mx-2 mb-2 rounded-xl border-l-2 border-emerald-400/70 bg-white/55 px-2 pb-2 pt-1">

      {services.map((service) => (
        <NavLink
          key={service.id}
          to={`/services/${service.slug}`}
          onClick={() => {
            setIsOpen(false);
            setMobileServicesOpen(false);
            setServicesOpen(false);
          }}
          className={({ isActive }) => `block rounded-lg px-4 py-3 text-sm transition-all duration-200 ${isActive ? "bg-emerald-50 font-semibold text-[#008751]" : "text-slate-600 hover:bg-white hover:text-[#008751]"}`}
        >
          {service.title}
        </NavLink>
      ))}

    </div>
  </div>

</div>

      <NavLink
        to="/blog"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => `block rounded-xl px-4 py-3.5 text-[15px] transition-all duration-200 ${isActive ? "bg-white text-[#050865] font-semibold shadow-sm ring-1 ring-[#050865]/5" : "text-slate-700 hover:bg-white/80 hover:text-[#008751]"}`}
      >
        Blog
      </NavLink>

      <NavLink
        to="/contect"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => `block rounded-xl px-4 py-3.5 text-[15px] transition-all duration-200 ${isActive ? "bg-white text-[#050865] font-semibold shadow-sm ring-1 ring-[#050865]/5" : "text-slate-700 hover:bg-white/80 hover:text-[#008751]"}`}
      >
        Contact Us
      </NavLink>

    </div>

       {/* Bottom Button */}

    <div className="absolute bottom-0 left-0 right-0 border-t border-white/80 bg-white/75 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] backdrop-blur-xl">
      <Link
        to="/contect#contact-form"
        onClick={() => setIsOpen(false)}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#050865] to-[#111a83] px-6 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(5,8,101,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(5,8,101,0.28)] active:scale-[0.98]"
      >
        Get Quote
        <ArrowRight size={18} />
      </Link>
    </div>
  </div>
  </div>


</nav>
  );
}
