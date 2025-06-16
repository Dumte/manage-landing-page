import Cta from "./cta/Cta";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Testimonials from "./testimonials/Testimonials";

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
    <Cta />
    <Footer />
  </div>;
};

export default App;