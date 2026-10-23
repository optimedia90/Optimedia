import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contect";
import ScrollToTop from "./ScrollToTop";
import Blog from "./Blog";
import BlogDetailPage from "./BlogDetailPage";

import Services from "./Services";
import ServiceDetails from "./ServiceDetails";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contect" element={<Contact />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

        {/* 404 - Page Not Found */}
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                padding: "24px",
              }}
            >
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
              <a href="/" style={{ color: "#2563eb" }}>
                Back to Home
              </a>
            </div>
          }
/>
      </Routes>
    </>
  );
}

export default App;
