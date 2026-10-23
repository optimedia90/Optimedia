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
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contect" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:slug" element={<BlogDetailPage />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

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
              <h1>404 - Page Not Found</h1>
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
