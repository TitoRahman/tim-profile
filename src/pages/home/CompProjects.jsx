import React from "react";

import { Carousel } from "flowbite-react";
import ProyekCard from "../components/ProyekCard";
export default function CompProjects() {
  return (
    <div className="layout">
      <div className="grid justify-items-center">
        <h6 className="text-white text-xl font-thin tracking-sub">PROJECTS</h6>
        <h2 className="gradient-title text-4xl font-bold tracking-wide mt-2 max-w-xl text-center">
          We are a new digital product development agency
        </h2>
      </div>
      <div className="h-auto">
        <Carousel>
          <ProyekCard />
        </Carousel>
      </div>
    </div>
  );
}
