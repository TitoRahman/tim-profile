import React from "react";

const CompClients = (props) => {
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
        <p className="max-w-lg text-secondt leading-8">{props.mDescription}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {props.clientData.mClientList.map((item, index) => (
          <div className="border-partners flex items-center" key={index}>
            <img key={index} src={item} alt="..." className="w-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompClients;
