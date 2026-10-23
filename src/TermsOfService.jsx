import Navbar from "./Navbar";
import Footer from "./Footer";

const sections = [
  {
    title: "1. Acceptance of These Terms",
    body: "By accessing or using the Optimedia Solutions website, you agree to these Terms of Service. If you do not agree, please do not use the website. These terms apply to website visitors and people who contact us through the website."
  },
  {
    title: "2. Website Information and Enquiries",
    body: "The website provides general information about our digital marketing, branding, web development, and related services. Submitting an enquiry or requesting a quotation does not by itself create a client relationship or guarantee that we will accept a project. Any agreed project scope, fees, deliverables, timelines, and payment terms should be confirmed separately in writing."
  },
  {
    title: "3. Acceptable Use",
    body: "You agree not to misuse the website, attempt unauthorised access to systems or data, disrupt website operation, introduce malicious code, submit unlawful or misleading material, or use the website in a way that violates another person's rights or applicable law."
  },
  {
    title: "4. Intellectual Property",
    body: "Unless stated otherwise, the website's text, branding, graphics, layout, and other content are owned by or used with permission by Optimedia Solutions and may be protected by intellectual-property laws. You may view the website for personal or business evaluation, but you must not reproduce, republish, or commercially exploit website content without prior written permission. Ownership and permitted use of materials created for a client will be governed by the relevant written project agreement."
  },
  {
    title: "5. Services, Fees, and Changes",
    body: "Descriptions of services, examples, prices, packages, and timelines on the website are for general information and may change. The final scope, price, schedule, revisions, client responsibilities, and payment milestones will be those agreed in writing for the relevant project. Additional work or changes may require a revised quote or timeline."
  },
  {
    title: "6. Third-Party Links and Tools",
    body: "The website may link to third-party websites, platforms, or tools for convenience. We do not control those services and are not responsible for their content, availability, security, or policies. Your use of third-party services is subject to their own terms and privacy policies."
  },
  {
    title: "7. Disclaimers",
    body: "We aim to keep website information useful and up to date, but provide it on an 'as available' basis and do not guarantee that it will always be complete, accurate, uninterrupted, or error-free. Marketing and business outcomes depend on factors outside our control; examples or projections are not guarantees of specific results."
  },
  {
    title: "8. Limitation of Liability",
    body: "To the extent permitted by applicable law, Optimedia Solutions will not be liable for indirect, incidental, special, or consequential loss arising from use of, or inability to use, this website. Nothing in these terms excludes liability that cannot lawfully be excluded under applicable law. Any liability relating to paid services will also be subject to the written agreement for those services and applicable law."
  },
  {
    title: "9. Privacy",
    body: "Information submitted through the website is handled in accordance with our Privacy Policy. Please review the Privacy Policy to understand our general practices for collecting and using information."
  },
  {
    title: "10. Changes to These Terms",
    body: "We may revise these Terms of Service from time to time. Updates will be posted on this page with a revised effective date. Continued use of the website after an update means you accept the revised terms, to the extent permitted by law."
  },
  {
    title: "11. Governing Law and Contact",
    body: "These terms are subject to applicable laws of India. Any dispute will be handled by the competent courts having jurisdiction, subject to mandatory applicable law. For questions about these terms, contact Optimedia Solutions at optimediasolutions90@gmail.com or +91 90240 40691. Our office is in Churu, Rajasthan, India."
  }
];

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              The basic terms for accessing our website and enquiring about our services.
            </p>
            <p className="mt-3 text-sm text-slate-500">Effective date: 23 October 2026</p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-[0_18px_60px_rgba(0,17,71,0.07)] sm:p-10">
            <p className="mb-8 leading-7 text-slate-600">
              Please read these terms carefully before using this website. Specific services may be subject to a separate written proposal, statement of work, or client agreement.
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
              This page is a general starting point, not legal advice. Have it reviewed for your actual services, client contracts, and applicable legal requirements before relying on it as a legal document.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
