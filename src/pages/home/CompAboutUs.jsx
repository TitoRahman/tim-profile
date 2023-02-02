import React from "react";
import { Button } from "flowbite-react";
export default function CompAboutUs() {
  return (
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
          src={require("./../../assets/img/our-company.jpg")}
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
  );
}
