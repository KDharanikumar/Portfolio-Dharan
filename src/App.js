import "./App.css";
// import Navigation from "./Components/Navigation";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <section className="App">
      {/* <Navigation /> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
