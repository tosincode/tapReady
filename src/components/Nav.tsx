import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";

const Nav = () => {
  return (
    <div className="container mx-auto max-md:px-4  ">
      <div className="flex flex-wrap items-center mt-8 ">
        <div className="order-1 " >
          <SvgIcon iconName="logo" />
        </div>
        <ul className="flex items-center ml-20 order-2 max-md:ml-auto ">
          <li className="text-[#F5F5F7] mr-5 text-base max-md:text-sm font-light">Features</li>
          <li className="text-[#F5F5F7] text-base max-md:text-sm font-light">FAQs</li>
        </ul>
        <div className="ml-auto flex items-center order-3 max-md:mt-4">
          <button className="px-4 py-1 border-2 border-[#05FF69] rounded-md text-sm bg-black">
            Support
          </button>
          <div className="bg-[#05FF69] h-1 w-10">&nbsp;</div>
          <div className="h-8 w-8 bg-[#05FF69] rounded-full flex items-center justify-center ">
            <SvgIcon iconName="message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
