import React from "react";

import { Carousel, Button } from "flowbite-react/lib/esm/components";

import { FaPaintBrush } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="bg-second-dark">
        {/* Sliders */}
        <div className="h-screen rounded-none">
          <Carousel slideInterval={10000} className="z-10">
            <div>
              <div className="text-slider-m lg:text-slider z-50">
                <h2 className="text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-100 via-gradient-200 to-gradient-300">
                  We provide the solutions and ideas you need.
                </h2>
                <p className="my-4 lg:my-8 text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <Button
                  color="white"
                  className="mt-2 border-2 border-white text-white w-40 button-slider"
                >
                  Contact
                </Button>
              </div>
              <img
                src={require("./../assets/img/sliders/01.jpg")}
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <Button
                  color="white"
                  className="mt-2 border-2 border-white text-white w-40 button-slider"
                >
                  Contact
                </Button>
              </div>
              <img
                src={require("./../assets/img/sliders/01.jpg")}
                alt="..."
                className="brightness-50 h-screen w-screen"
              />
            </div>
          </Carousel>
        </div>
        {/* About Us */}
        <div className="layout items-center flex lg:flex-row flex-col place-content-between">
          <div className="flex flex-col text-left gap-8">
            <div>
              <h6 className="text-white text-xl font-thin tracking-sub">
                ABOUT US
              </h6>
              <h2 className="gradient-title text-4xl font-bold tracking-wide mt-2">
                OUR COMPANY
              </h2>
            </div>
            <p className=" max-w-md text-secondt leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button
              color="white"
              className="border border-white text-white w-40 h-20"
            >
              Read More
            </Button>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <img
              src={require("./../assets/img/our-company.jpg")}
              alt="..."
              className="w-full lg:max-w-md rounded-lg"
            />
            <div className="flex flex-col gap-4 mt-4">
              <div className="lg:happy-client border-dashed border-2 border-light-purle p-2 rounded-lg">
                <div className=" bg-white p-8 rounded-lg">
                  <div className="text-main-dark flex justify-center">
                    <span className="text-4xl font-extrabold mr-2">20</span>
                    <span className="mt-2 font-semibold">Happy Clients</span>
                  </div>
                </div>
              </div>
              <div className="lg:success-project border-dashed border-2 border-light-purle p-2 rounded-lg">
                <div className=" bg-main-dark p-8 rounded-lg">
                  <div className="text-white flex justify-center">
                    <span className="text-4xl font-extrabold mr-2">69</span>
                    <span className="mt-2 font-semibold">Success Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Best At */}
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
              <h6 className="text-white text-xl font-semibold">
                Graphic Design
              </h6>
              <p className="text-secondt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="border-features">
              <FaPaintBrush size="32" color="white" />
              <h6 className="text-white text-xl font-semibold">
                Graphic Design
              </h6>
              <p className="text-secondt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="border-features">
              <FaPaintBrush size="32" color="white" />
              <h6 className="text-white text-xl font-semibold">
                Graphic Design
              </h6>
              <p className="text-secondt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="border-features">
              <FaPaintBrush size="32" color="white" />
              <h6 className="text-white text-xl font-semibold">
                Graphic Design
              </h6>
              <p className="text-secondt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        {/* List Design or Project */}
        <div className="layout text-white text-5xl">List Design or Project</div>
        {/* Client */}
        <div className="layout items-center flex lg:flex-row flex-col gap-8 lg:gap-36">
          <div className="flex flex-col text-left gap-8">
            <div>
              <h6 className="text-white text-xl font-thin tracking-sub">
                SPEEDWAGON
              </h6>
              <h2 className="gradient-title text-4xl font-bold tracking-wide mt-2">
                Our Clients
              </h2>
            </div>
            <p className=" max-w-md text-secondt leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
            <div className="border-partners">
              <img
                src={require("./../assets/img/partners/Cisco.png")}
                alt="..."
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
