import React from "react";
import { FaPaintBrush } from "react-icons/fa";

export default function CompFeatures() {
  return (
    <div className="layout">
      <div className="grid justify-items-center">
        <h6 className="text-white text-xl font-thin tracking-sub">
          BEST FEATURES
        </h6>
        <h2 className="gradient-title text-4xl font-bold tracking-wide mt-2 max-w-xl text-center">
          We are a new digital product development agency
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        <div className="border-features">
          <FaPaintBrush size="32" color="white" />
          <h6 className="text-white text-xl font-semibold">Graphic Design</h6>
          <p className="text-secondt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="border-features">
          <FaPaintBrush size="32" color="white" />
          <h6 className="text-white text-xl font-semibold">Graphic Design</h6>
          <p className="text-secondt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="border-features">
          <FaPaintBrush size="32" color="white" />
          <h6 className="text-white text-xl font-semibold">Graphic Design</h6>
          <p className="text-secondt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="border-features">
          <FaPaintBrush size="32" color="white" />
          <h6 className="text-white text-xl font-semibold">Graphic Design</h6>
          <p className="text-secondt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}
