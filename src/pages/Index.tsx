import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
import CustomizeStyle from "@/components/CustomizeStyle";
import StyleConsultation from "@/components/StyleConsultation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="hero">
        <Hero />
        <Shop />
        <CustomizeStyle />
        <StyleConsultation />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
