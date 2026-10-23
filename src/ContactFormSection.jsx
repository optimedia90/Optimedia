import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactFormSection() {
  const formRef = useRef(null);
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Owner Email
      await emailjs.sendForm(
        "service_m5wqj63",       // your EmailJS Service ID
        "template_4e3bfif",      // template for you (owner)
        formRef.current,
        "uoMXFx2A1kiXq2VOz"      // your EmailJS Public Key
      );

      // Auto Reply to User
      await emailjs.sendForm(
        "service_m5wqj63",       // ⚠️ same Service ID (not a public key)
        "template_6mr7r15",      // auto-reply template
        formRef.current,
        "uoMXFx2A1kiXq2VOz"      // same Public Key
      );

      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section className="py-24 bg-[#f0fdf4]" id="contact-form">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[3px] text-[#008751] font-bold">
            Contact Us
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-[#050865]">
            {selectedService
              ? `Let's Talk About ${selectedService}`
              : "Let's Start A Conversation"}
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
            {selectedService
              ? `Tell us about your ${selectedService} requirements and our experts will contact you within 24 hours.`
              : "Have a project in mind? We'd love to hear about it. Fill out the form and our team will get back to you soon."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white rounded-[30px] p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#050865] mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#008751]/10 flex items-center justify-center">
                  <Phone className="text-[#008751]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <h4 className="font-bold text-[#050865]">+91 90240 40691</h4>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#008751]/10 flex items-center justify-center">
                  <Mail className="text-[#008751]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <h4 className="font-bold text-[#050865]">optimediasolutions90@gmail.com</h4>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#008751]/10 flex items-center justify-center">
                  <MapPin className="text-[#008751]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  <h4 className="font-bold text-[#050865]">Churu, Rajasthan</h4>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#008751]/10 flex items-center justify-center">
                  <Clock className="text-[#008751]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <h4 className="font-bold text-[#050865]">Mon - Sat : 9AM - 7PM</h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white rounded-[30px] p-10 shadow-xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#008751]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  name="user_email"
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#008751]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="user_phone"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#008751]"
                />

                <input
                  type="text"
                  name="service"
                  defaultValue={selectedService || ""}
                  placeholder="Interested Service"
                  readOnly={!!selectedService}
                  className={`w-full rounded-xl border border-gray-200 px-5 py-4 outline-none ${
                    selectedService
                      ? "bg-gray-100 cursor-not-allowed"
                      : "focus:border-[#008751]"
                  }`}
                />
              </div>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-[#008751]"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[#050865] px-8 py-4 font-semibold text-white transition-all hover:bg-[#008751]"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}