import React, { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { services } from "../data/MainServices";
import SidebarBg from "../assets/mobileHeroBgForServices.png";

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
  className="flex-shrink-0"
>
  <img
    src="/optimedia_logo.jpeg"
    alt="Optimedia Solutions"
    className="h-12 w-12 rounded-full object-cover"
  />
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
  className={`fixed top-0 right-0 z-50 h-screen w-[320px] overflow-hidden shadow-2xl transition-transform duration-500 md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${SidebarBg})`,
    }}
  />

  {/* White Overlay */}
  <div className="absolute inset-0  backdrop-blur-[2px]" />

  {/* Content */}
  <div className="relative z-10 h-full">

    {/* Header */}

    <div className="flex items-center justify-between border-b px-6 py-5">

      <img
        src="/optimedia_logo.jpeg"
        alt="Optimedia"
        className="h-11 w-11 rounded-full object-cover"
      />

      <button
        onClick={() => setIsOpen(false)}
        className="rounded-full p-2 hover:bg-gray-100 transition"
      >
        <X size={22} />
      </button>
      

    </div>

    {/* Links */}

    <div className="h-[calc(100vh-90px)] overflow-y-auto pb-32">

      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        className="block px-6 py-4 hover:bg-[#f0fdf4]"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => setIsOpen(false)}
        className="block px-6 py-4 hover:bg-[#f0fdf4]"
      >
        About Us
      </NavLink>

      {/* Services */}

      <div className="border-t border-b">

  <button
    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
    className="flex w-full items-center justify-between px-6 py-4 font-medium text-[#050865]"
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
    <div className="px-2 pb-4">

      {services.map((service) => (
        <NavLink
          key={service.id}
          to={`/services/${service.slug}`}
          onClick={() => {
            setIsOpen(false);
            setMobileServicesOpen(false);
            setServicesOpen(false);
          }}
          className="block rounded-xl px-4 py-3 text-slate-700 transition hover:bg-[#f0fdf4] hover:text-[#008751]"
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
        className="block px-6 py-4 hover:bg-[#f0fdf4]"
      >
        Blog
      </NavLink>

      <NavLink
        to="/contect"
        onClick={() => setIsOpen(false)}
        className="block px-6 py-4 hover:bg-[#f0fdf4]"
      >
        Contact Us
      </NavLink>

    </div>

       {/* Bottom Button */}

    <div className="absolute bottom-6 left-6 right-6">
      <Link
        to="/contect#contact-form"
        onClick={() => setIsOpen(false)}
        className="flex items-center justify-center gap-2 rounded-full bg-[#050865] px-6 py-4 text-white transition hover:bg-[#008751]"
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
