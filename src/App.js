import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";

function App() {
	return (
		<section className="App">
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
