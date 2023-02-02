import React from "react";
import { Carousel, Button } from "flowbite-react";

export default function CompSliders() {
  return (
    <div className="h-screen rounded-none">
      <Carousel slideInterval={10000} className="z-10">
        <div>
          <div className="text-slider-m lg:text-slider z-50">
            <h2 className="text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-100 via-gradient-200 to-gradient-300">
              We provide the solutions and ideas you need.
            </h2>
            <p className="my-4 lg:my-8 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <Button
              color="white"
              className="mt-2 border-2 border-white text-white w-40 button-slider"
            >
              Contact
            </Button>
          </div>
          <img
            src={require("./../../assets/img/sliders/01.jpg")}
            alt="..."
            className="brightness-50 h-screen w-screen"
          />
        </div>
        <div>
          <div className="text-slider-m lg:text-slider z-50">
            <h2 className="text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-100 via-gradient-200 to-gradient-300">
              We provide the solutions and ideas you need.
            </h2>
            <p className="my-4 lg:my-8 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <Button
              color="white"
              className="mt-2 border-2 border-white text-white w-40 button-slider"
            >
              Contact
            </Button>
          </div>
          <img
            src={require("./../../assets/img/sliders/01.jpg")}
            alt="..."
            className="brightness-50 h-screen w-screen"
          />
        </div>
      </Carousel>
    </div>
  );
}
