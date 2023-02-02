import React from "react";

import ProyekCard from "../components/ProyekCard";
const CompProjects = () => {
  return (
    <div className="layout">
      <div className="grid justify-items-center">
        <h6 className="text-white text-xl font-thin tracking-sub">PROJECTS</h6>
        <h2 className="gradient-title text-4xl font-bold tracking-wide mt-2 max-w-xl text-center">
          We are a new digital product development agency
        </h2>
      </div>
      <div className="h-auto mt-8 flex flex-col lg:flex-row justify-center">
        <ProyekCard className="justify-center" />
        <ProyekCard />
        <ProyekCard />
      </div>
    </div>
  );
};
export default CompProjects;
