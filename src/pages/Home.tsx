import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <ServicesPreview />
      <Testimonials />
    </div>
  );
};

export default Home;
