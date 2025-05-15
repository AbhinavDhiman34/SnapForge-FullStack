import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Tools from "./pages/Tools";

import AboutPage from "./pages/About";
import ContactForm from "./pages/Contact";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />

      <Route path="/sustainability" element={<Tools />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
