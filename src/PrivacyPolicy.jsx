import Navbar from "./Navbar";
import Footer from "./Footer";

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you contact Optimedia Solutions or use our website, we may collect information you choose to provide, such as your name, email address, phone number, business name, requested services, and project details. Basic technical information, such as browser type and pages visited, may also be collected through website logs or analytics tools where enabled."
  },
  {
    title: "2. How We Use Your Information",
    body: "We use information to respond to enquiries, provide quotations, discuss and deliver requested services, improve our website and services, protect the website from misuse, and meet applicable legal obligations. We will not use your contact details for unrelated promotional messages where consent is required and has not been given."
  },
  {
    title: "3. Sharing and Third-Party Services",
    body: "We do not sell your personal information. We may share it with service providers who help operate our website or deliver requested services, where necessary and subject to appropriate safeguards, or when disclosure is required by law. Third-party services such as analytics, embedded maps, social media, or messaging links may process information under their own privacy policies."
  },
  {
    title: "4. Cookies and Analytics",
    body: "Our website may use cookies or similar technologies to support essential functionality, understand website usage, and improve performance. You can manage cookies through your browser settings. Disabling some cookies may affect parts of the website."
  },
  {
    title: "5. Data Security and Retention",
    body: "We take reasonable measures designed to protect information from unauthorised access, loss, misuse, or alteration. No method of internet transmission or storage is completely secure. We retain information only for as long as reasonably needed for the purposes described here, including service delivery, recordkeeping, and legal requirements."
  },
  {
    title: "6. Your Choices and Requests",
    body: "You may contact us to request access to, correction of, or deletion of personal information you have provided, subject to applicable law and legitimate recordkeeping requirements. We may need to verify your identity before acting on a request."
  },
  {
    title: "7. Children's Privacy",
    body: "Our website and services are intended for businesses and a general audience, not specifically for children. Please do not submit a child's personal information through our contact forms."
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy when our practices or legal obligations change. The updated version will be posted on this page with a revised effective date."
  },
  {
    title: "9. Contact Us",
    body: "For privacy-related questions or requests, contact Optimedia Solutions at optimediasolutions90@gmail.com or call +91 90240 40691. Our office is in Churu, Rajasthan, India."
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f0fdf4] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#008751]">
              Optimedia Solutions
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#001147] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              How we collect, use, and protect information when you visit our website or contact us.
            </p>
            <p className="mt-3 text-sm text-slate-500">Effective date: 23 October 2026</p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-[0_18px_60px_rgba(0,17,71,0.07)] sm:p-10">
            <p className="mb-8 leading-7 text-slate-600">
              This policy explains the general privacy practices of Optimedia Solutions for this website. The information collected may vary depending on the features you use and the details you choose to share with us.
            </p>
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-[#001147]">{section.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
                </section>
              ))}
            </div>
            <p className="mt-10 border-t border-slate-100 pt-6 text-sm leading-6 text-slate-500">
              This page provides general privacy information and is not legal advice. Please review it against your actual website tools and business practices before relying on it as a compliance document.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
