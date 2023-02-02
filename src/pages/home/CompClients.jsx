import React from "react";

export default function CompClients() {
  return (
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
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
        <div className="border-partners">
          <img
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
        <div className="border-partners">
          <img
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
        <div className="border-partners">
          <img
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
        <div className="border-partners">
          <img
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
        <div className="border-partners">
          <img
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
        <div className="border-partners">
          <img
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
        <div className="border-partners">
          <img
            src={require("./../../assets/img/partners/Cisco.png")}
            alt="..."
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
