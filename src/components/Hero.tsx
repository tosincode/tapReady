"use client";
import { useWindowSize } from "usehooks-ts";
import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";
import Nav from "./Nav";

const Hero = () => {
  const { width, height } = useWindowSize();

  const isMobile = width < 978;
  const sm = width < 500;

  const d = height === 600 && width > 1000;

  return (
    <div className="bg-black w-screen relative h-screen overflow-hidden">
      <div className="absolute text-white w-screen z-[99999999] ">
        <Nav />
        <p className="text-6xl max-md:text-xl text-center mt-10 2xl:mt-80 max-md:mt-40 ">
          Accept Contactless payment <br />
          on NFC-enabled{" "}
          <span className="font-semibold text-gradient">devices</span>
        </p>
      </div>
      <div
        className={`absolute iphone z-[99999999] ${
          width > height && sm ? "hidden" : ""
        } ${d ? "iphone-lg" : "iphone-sm"} `}
      >
        <div className=" ">
          <div className="absolute lg:scale-[1.5] z-[999] top-7 ">
            <SvgIcon iconName="contactlessglass" />
          </div>
          <div
            className={`absolute hero-transition ease-in-out ${
              isMobile ? "-right-16 top-24" : "-right-52 top-40"
            } `}
          >
            <SvgIcon iconName="card" width={isMobile ? 150 : undefined} />
          </div>
          <div
            className={`absolute hero-transition ease-in-out ${
              isMobile ? "top-[90px] -left-20" : "top-[190px] -left-28"
            }`}
          >
            <SvgIcon
              iconName="androidGlass"
              width={isMobile ? 140 : undefined}
            />
          </div>
          <div
            className={`absolute  ease-in-out hero-transition ${
              isMobile ? "top-[150px] -left-20" : "top-[300px] -left-28"
            }`}
          >
            <SvgIcon iconName="iosGlass" width={isMobile ? 140 : undefined} />
          </div>
          <SvgIcon iconName="iphone" width={isMobile ? 400 : undefined} />
        </div>
      </div>
      <div className="absolute grid h-screen w-screen z-[999]"></div>
      <div className="hero h-screen z-[99]">
        <div className=" eclipseLarge ">
          <SvgIcon iconName="eclipseLarge" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
