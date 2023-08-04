import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";
import { useWindowSize } from "usehooks-ts";

const Nav = () => {
  const { width } = useWindowSize();
  return (
    <div className="container mx-auto px-4  ">
      <div className="flex flex-wrap items-center mt-8 ">
        <div className="order-1 ">
          <SvgIcon iconName="logo" width={width < 600 ? 100 : undefined} />
        </div>
        {/* <ul className="flex items-center ml-20 order-2 max-md:ml-auto ">
          <li className="text-[#F5F5F7] mr-5 text-base max-md:text-sm font-light">Features</li>
          <li className="text-[#F5F5F7] text-base max-md:text-sm font-light">FAQs</li>
        </ul> */}
        <div className="ml-auto flex items-center order-3 z-50">
          <button className="px-8 py-2 border border-[#08FFBD] rounded-2xl text-sm bg-transparent">
            Support
          </button>
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
