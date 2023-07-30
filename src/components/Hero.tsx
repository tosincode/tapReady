import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";
import SvgBg from "./SvgBg";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="bg-black w-screen relative h-screen overflow-hidden">
      <div className="absolute text-white w-screen ">
        <Nav />

        <p className="text-6xl max-md:text-xl text-center mt-20 ">
          Accept Contactless payment <br />
          on NFC-enabled{" "}
          <span className="font-semibold text-gradient">devices</span>
        </p>

        <div className="mt-16 relative  z-[99999999999999]">
          {/* <div className="absolute right-[29%] z-[999] max-md:right-[20%] top-7 ">
            <SvgIcon iconName="contactlessglass" />
          </div>
          <div className="absolute right-[25%] max-md:right-[15%] top-40">
            <SvgIcon iconName="card" />
          </div>
          <div className="absolute right-[58%] max-md:right-[45%] top-[190px]">
            <SvgIcon iconName="androidGlass" />
          </div>
          <div className="absolute right-[58%] max-md:right-[45%] max-md:top-[250px] top-[300px]">
            <SvgIcon iconName="iosGlass" /> absolute right-[50%] translate-x-[50%] top-[50%]  
          </div> */}
          <div className="absolute right-[50%] translate-x-[50%]  ">
            <SvgIcon iconName="iphone" />
          </div>
        </div>
      </div>
      <div className="hero h-screen z-[99999]">
        <div className="absolute right-[50%] translate-x-[50%] top-[50%]">
          <SvgIcon iconName="eclipseLarge" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// contactlessglass
