import React from "react";

// Call Component Home
import Sliders from "./CompSliders";
import AboutUs from "./CompAboutUs";
import Features from "./CompFeatures";
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
        <div className="layout text-white text-5xl">List Design or Project</div>
        {/* Client */}
        <Clients />
      </div>
    </>
  );
};

export default Home;
