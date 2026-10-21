import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contect";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import Services from "./pages/services/Services";
import ServiceDetails from "./pages/services/ServiceDetails";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <>
     <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contect" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services" element={<Services />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />

      <Route
      path="/services/:slug"
      element={<ServiceDetails />}
      />
    </Routes>
    </>
  );
}

export default App;