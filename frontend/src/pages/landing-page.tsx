import Navbar from "@/components/navbar";
import AuroraBackground from "@/components/animated-color";
import Product from "@/components/Product";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const LandingPage = () => {
  return (
    <>
      <AuroraBackground>
        <Navbar />
        <section
          id="#Landingpage"
          className="relative h-full w-full flex flex-1"
        >
          <Hero />
        </section>
      </AuroraBackground>

      <section className="w-full h-full bg-zinc-50 dark:bg-zinc-800 text-white">
        <Product />
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900 text-white">
        <Features />
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-800">
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
