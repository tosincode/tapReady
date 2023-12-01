import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";
import Image from "next/image";
// import

const Nav = () => {
  return (
    <div className="container mx-auto px-4  ">
      <div className="flex flex-wrap items-center mt-8 ">
        <div className="order-1 z-50">
          <Image
            src="/images/logo-tapready.png"
            alt="Ben "
            width={130}
            height={100}
            className="z-50"
          />
          {/* <SvgIcon iconName="logo" width={width < 600 ? 100 : undefined} /> */}
        </div>
        {/* <ul className="flex items-center ml-20 order-2 max-md:ml-auto ">
          <li className="text-[#F5F5F7] mr-5 text-base max-md:text-sm font-light">Features</li>
          <li className="text-[#F5F5F7] text-base max-md:text-sm font-light">FAQs</li>
        </ul> */}
        <div className="ml-auto flex items-center order-3 z-50">
          <a
            href="mailto:sales@tapready.africa"
            className="px-8 py-2 border border-[#08FFBD] rounded-2xl text-sm bg-transparent"
          >
            Support
          </a>
          <div className="bg-[#08FFBD] h-1 w-10">&nbsp;</div>
          <div className="h-8 w-8 bg-[#08FFBD] rounded-full flex items-center justify-center ">
            <SvgIcon iconName="message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
