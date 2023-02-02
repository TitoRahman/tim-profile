import React from "react";
import { Carousel, Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function CompSliders() {
  return (
    <div className="h-screen rounded-none">
      <Carousel slideInterval={10000} className="z-10">
        <div>
          <div className="text-slider-m lg:text-slider z-50">
            <h2 className="text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-100 via-gradient-200 to-gradient-300">
              Customized Digital Solutions for Your Business.
            </h2>
            <p className="my-4 lg:my-8 text-white">
              Get exactly what you need with our tailored digital solutions.
              From website design to application development, we work closely
              with you to understand your specific needs and goals, delivering
              customized results that meet your expectations.
            </p>
            <Link to="/proyek">
              <Button
                color="white"
                className="mt-2 border-2 border-white text-white w-40 button-slider"
              >
                See Proyek
              </Button>
            </Link>
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
              Expert Team of Designers & Developers
            </h2>
            <p className="my-4 lg:my-8 text-white">
              Collaborate with our talented team of designers and developers to
              bring your ideas to life. With years of experience and a passion
              for innovation, our experts are dedicated to delivering excellence
              in every project.
            </p>
            <Link to="/proyek">
              <Button
                color="white"
                className="mt-2 border-2 border-white text-white w-40 button-slider"
              >
                See Proyek
              </Button>
            </Link>
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
