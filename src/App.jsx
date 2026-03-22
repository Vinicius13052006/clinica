import { useEffect } from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Doctors from "./components/doctors";
import ContactForm from "./components/contact";
import Footer from "./components/Footer";

import "./index.css";

function App() {

  useEffect(() => {

    const reveal = () => {
      const elements = document.querySelectorAll(".reveal");

      elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;