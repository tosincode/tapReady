import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";

const Footer = () => {
  return (
    <div className="bg-black py-16">
      <div className="container text-white flex flex-col lg:flex-row items-center mx-auto justify-between ">
{/*         <SvgIcon iconName="logo" /> */}
        <Image
            src="/images/logo-tapready.png"
            alt="TapReadyLogo "
            width={130}
            height={100}
            className="z-50"
          />
          {/* <SvgIcon iconName="logo" width={width < 600 ? 100 : undefined} /> */}
        
        <p className="mt-6 lg:mt-0" >copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
