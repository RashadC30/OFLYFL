"use client";
import Overflo from "./components/Overflo";
import About from "./components/About";
import Skills from "./components/Skills";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Overflo />
      <About />
      <Skills />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
