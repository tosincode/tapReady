"use client";
import { useWindowSize } from "usehooks-ts";
import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";
import Nav from "./Nav";

const Hero = () => {
  const { width, height } = useWindowSize();

  const isMobile = width < 978;
  const sm = width < 500;

  const d = width < 1023;

  return (
    <div className="hero w-screen relative min-h-screen overflow-hidden ">
      <div className=" text-white w-screen">
        <Nav />
        <div className="header">
          <div className="grid grid-cols-12 items-start mt-8 lg:mt-0 lg:content-center min-h-[90vh]">
            <div className="col-span-12 lg:col-span-6 max-md:mx-8 lg:self-center z-50">
              <p className="text-6xl max-md:text-xl lg:text-left mt-10 2xl:mt-60 ">
                Accept <br className="hidden lg:block" />
                <span className="font-semibold text-gradient">Contactless</span>
                <br className="hidden lg:block" />{" "}
                <span className="font-semibold text-gradient">payment</span> on{" "}
                <br className="hidden lg:block" />
                NFC-enabled <br className="hidden lg:block" />
                devices.
              </p>
              <div className="flex mt-8 items-center">
                <SvgIcon iconName="groupIcon" />
                <p className="text-xs ml-4 ">
                  Accept contactless payments from your customers’ <br />
                  bank cards, All banks supported.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 max-md:h-screen col-span-12 flex items-center justify-end hero-transition mr-20 ">
              <div className="relative z-50">
                <div
                  className={`absolute top-[50%] hero-transition ${
                    d ? "-left-[30%]" : "-left-[60%] "
                  } -translate-y-[50%]`}
                >
                  <SvgIcon iconName="opaqueGlass" width={d ? 150 : undefined} />
                </div>
                <div className="flex absolute top-[50%] -right-[15%] -translate-y-[50%] flex-col">
                  <div className="mr-2 mb-2">
                    <SvgIcon
                      iconName="mastercardprocessor"
                      width={d ? 50 : undefined}
                    />
                  </div>
                  <div className="mr-2 mb-2 hero-transition">
                    <SvgIcon
                      iconName="visaprocessor"
                      width={d ? 50 : undefined}
                    />
                  </div>
                  <div className="mr-2 mb-2 hero-transition">
                    <SvgIcon
                      iconName="processorApple"
                      width={d ? 50 : undefined}
                    />
                  </div>
                  <SvgIcon
                    iconName="googlepayProcessor"
                    width={d ? 50 : undefined}
                  />
                </div>
                <SvgIcon iconName="iphoneblack" width={d ? 180 : undefined} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" relative h-screen z-[99] "></div> */}
      <div className=" eclipseLarge z-10">
        <SvgIcon iconName="eclipseLarge" />
      </div>
    </div>
  );
};

export default Hero;
