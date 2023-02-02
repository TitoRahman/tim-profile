import React from "react";

import { Carousel } from "flowbite-react";

// Call Component Home
import Sliders from "./CompSliders";
import AboutUs from "./CompAboutUs";
import Features from "./CompFeatures";
import Projects from "./CompProjects";
import Clients from "./CompClients";

const Home = () => {
  return (
    <>
      <div className="bg-second-dark">
        {/* Sliders */}
        <Sliders />
        {/* About Us */}
        <AboutUs />
        {/* Our Best At */}
        <Features />
        {/* List Design or Project */}
        <Projects />
        {/* Client */}
        <Clients />
      </div>
    </>
  );
};

export default Home;
