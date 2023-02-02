import React from "react";

const CompFeatures = (props) => {
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
        {props.featuresData.map((item, index, mLogo) => (
          <div className="border-features" key={index}>
            <item.mLogo size="32" color="white" />
            <h6 className="text-white text-xl font-semibold">{item.mTitle}</h6>
            <p className="text-secondt">{item.mDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompFeatures;
