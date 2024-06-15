import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Head from "./components/Head";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Foot from "./components/Foot";
import Experience from "./components/Experience";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Head />
      <div style={{ marginTop: 90 }} data-aos="fade-down">
        <Home />
      </div>
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Experience />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
      <div data-aos="fade-up">
        <Foot />
      </div>
    </div>
  );
}

export default App;
