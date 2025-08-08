import { useState } from "react";
import Banner from "../Pages/Banner";
import Pioneering from "../Pages/Pioneering";
import WhyChoose from "../Pages/WhyChoose";
import PlanSection from "./PlanSection";
import Work from "./Work";
import Footer from "../Footer/Footer";

const Home = () => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => {
    setShowSections((prev) => !prev);
  };

  return (
    <div>
      <Banner onToggleSections={toggleSections} showSections={showSections} />
      {showSections && (
        <>
          <Pioneering />
          <Work />
          <WhyChoose />
          <PlanSection />
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Home;