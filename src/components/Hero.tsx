import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";
import SvgBg from "./SvgBg";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="bg-black w-screen relative h-[120vh] overflow-hidden">
      <div className="absolute text-white w-screen ">
        <Nav />

        <p className="text-6xl max-md:text-xl text-center mt-20 ">
          Accept Contactless payment <br />
          on NFC-enabled{" "}
          <span className="font-semibold text-gradient">devices</span>
        </p>

        <div className="mt-16 relative">
          <div className="absolute right-[30%]  max-md:right-[20%] top-7 ">
            <SvgIcon iconName="contactlessglass" />
          </div>
          <div className="absolute right-[25%] max-md:right-[15%] top-44">
            <SvgIcon iconName="card" />
          </div>
          <div className="absolute right-[58%] max-md:right-[45%] top-[190px]">
            <SvgIcon iconName="androidGlass" />
          </div>
          <div className="absolute right-[58%] max-md:right-[45%] max-md:top-[280px] top-[360px]">
            <SvgIcon iconName="iosGlass" />
          </div>
          <div className="absolute right-[37%] max-md:right-[20%] max-sm:right-[6%]">
            <SvgIcon iconName="iphone" />
          </div>
        </div>
      </div>
      <div className="hero z-20  h-[120vh]">
        <SvgBg />
      </div>
    </div>
  );
};

export default Hero;
// contactlessglass
