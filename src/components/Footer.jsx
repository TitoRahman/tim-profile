import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { SlLocationPin, SlEnvolope, SlPhone } from "react-icons/sl";

import { TextInput, Button } from "flowbite-react";

const Footer = () => {
  return (
    <>
      <Router>
        <div className="gap-4 px-4 sm:px-6 lg:px-40 lg:py-20 py-10 bg-second-dark">
          <div className="flex lg:flex-row flex-col place-content-between items-center ">
            <div>
              <h2 className="text-left text-2xl tracking-wider text-white">
                Speedwagon
              </h2>
            </div>
            <div className="flex lg:mt-0 mt-8 gap-4 text-white">
              <NavLink to="#" className="ic-rounded">
                <FaFacebookF size="16" />
              </NavLink>
              <NavLink to="#" className="ic-rounded">
                <FaInstagram size="16" />
              </NavLink>
              <NavLink to="#" className="ic-rounded">
                <FaDribbble size="16" />
              </NavLink>
              <NavLink to="#" className="ic-rounded">
                <FaGithub size="16" />
              </NavLink>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col place-content-between items-center ">
            <div className="mt-8 flex flex-col gap-8 text-white text-left">
              <div className="flex items-center">
                <SlLocationPin className="h-6 w-6" />
                <div className="ml-6">
                  <h6 className="font-semibold ">Lorem Ipsum</h6>
                  <p className="text-secondt max-w-xs">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <SlEnvolope className="h-6 w-6" />
                <div className="ml-6">
                  <h6 className="font-semibold ">Lorem Ipsum</h6>
                  <p className="text-secondt max-w-xs">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <SlPhone className="h-6 w-6" />
                <div className="ml-6">
                  <h6 className="font-semibold ">Lorem Ipsum</h6>
                  <p className="text-secondt max-w-xs">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-center lg:text-left text-lg text-white font-semibold">
                SUBSCRIBE NOW
              </h2>
              <TextInput
                type="email"
                icon={FaEnvelope}
                placeholder="youremail@gmail.com"
                required={true}
                className="w-80 mt-2"
              />
              <Button className="mt-2 bg-light-purle w-80">send</Button>
              <p className="mt-8 text-center lg:text-left text-secondt">
                © 2023, Speedwagon teams.
              </p>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Footer;
