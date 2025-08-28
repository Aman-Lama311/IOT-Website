import About from "../components/About";
import Hero from "../components/Hero";
import OurCourses from "../components/OurCourses";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import WorkShop from "../components/WorkShop";

const Home = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Hero />
      <Testimonials />
      <About />
      <WhyUs />
      <OurCourses />
      <WorkShop />
    </div>
  );
};
export default Home;
