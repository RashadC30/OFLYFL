"use client";
import Overflo from "./components/Overflo";
import About from "./components/About";
import Mission from "./components/Courses";
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
      <Mission />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
