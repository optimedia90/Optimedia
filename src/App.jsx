import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contect";
import ScrollToTop from "./ScrollToTop";
import Blog from "./Blog";
import BlogDetailPage from "./BlogDetailPage";
import Services from "./services/Services";
import ServiceDetails from "./services/ServiceDetails";

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
  </Routes>
</>

);
}

export default App;
