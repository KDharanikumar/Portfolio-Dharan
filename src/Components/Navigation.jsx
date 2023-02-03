import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Resume from "../Pages/Resume";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";

const Navigation = () => {
  return (
    <section className="navigation">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </section>
  );
};

export default Navigation;
