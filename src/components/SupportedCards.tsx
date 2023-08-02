import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";

const SupportedCards = () => {
  return (
    <div className="bg-black rounded-3xl mx-4 md:mx-0 p-3 md:p-6 lg:p-20 mt-8  lg:w-[800px] flex flex-col lg:flex-row justify-between items-center">
      <p className="text-white  mb-4 lg:mb:0">
        Supported Card <br className="lg:block hidden" /> Options.
      </p>
      <div className="flex  lg:items-center  flex-wrap">
        <div className="mr-2 mb-1">
          <SvgIcon iconName="mastercardprocessor" />
        </div>
        <div className="mr-2 mb-1">
          <SvgIcon iconName="visaprocessor" />
        </div>
        <div className="mr-2 mb-1">
          <SvgIcon iconName="processorApple" />
        </div>
        <SvgIcon iconName="googlepayProcessor" />
      </div>
    </div>
  );
};

export default SupportedCards;
