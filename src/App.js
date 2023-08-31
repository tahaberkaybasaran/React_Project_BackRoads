import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  console.log("hello");
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
