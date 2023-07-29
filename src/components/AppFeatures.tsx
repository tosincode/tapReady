import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";

const AppFeatures = () => {
  return (
    <div className="app-feature ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-8 gap-y-4">
          <div className="w-[370px] max-md:w-[330px] text-white relative">
            <div className="w-32 ml-auto">
              <SvgIcon iconName="contactless" />
            </div>
            <p className="font-bold text-3xl leading-normal ">
              Powering <br /> contactless <br /> payments <br /> on NFC-enabled{" "}
              <br /> devices.
            </p>
            <p className="text-sm mt-8">Our Tap to Phone solutions</p>
            <div className="absolute top-1/2 -left-8">
              <SvgIcon iconName="coloredContactless" />
            </div>
          </div>
          <div className="feature-card card group hover:text-black hover:bg-[#05FF69] ">
            <p className="text-2xl font-light">White Label</p>
            <p className="text-xs mt-6">
              Are you a bank or a FinT ech? Deploy your own branded T ap to
              Phone solution in a matter of weeks
            </p>
            <ul className="text-xs mt-6">
              <li>- Speedy development</li>
              <li>- EMV Experts building for you </li>
              <li>- Compliant App</li>
            </ul>

            <div className="h-28">
              <div className="w-24 ml-auto mt-10 group-hover:scale-110 tran origin-top-right flex items-center justify-center rounded-full group-hover:bg-black bg-[#05FF69] h-24">
                <span className="block group-hover:hidden">
                  <SvgIcon iconName="smallphone" />
                </span>
                <span className="hidden group-hover:block">
                  <SvgIcon iconName="smallphonegreen" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-8 gap-y-4 mt-4">
          <div className="feature-card card  ">
            <p className="text-2xl font-light">SDK</p>
            <p className="text-xs mt-6">
              Are you a developer, a device manufacturer, or a software company?
            </p>
            <p className="text-xs mt-6">
              Integrate NFC payments into your app or device quickly and
              securely without proprietary card readers or proprietary card
              issuance.
            </p>
            <ul className="text-xs mt-6">
              <li>- Tested Software</li>
              <li>- Compliant SDK </li>
            </ul>

            <div className="h-28">
              <div className="w-24 ml-auto mt-10 group-hover:scale-110 tran origin-top-right flex items-center justify-center rounded-full bg-black h-24">
                <SvgIcon iconName="smallphonegreen" />
              </div>
            </div>
          </div>
          <div className="feature-card card  ">
            <p className="text-2xl font-light">Merchant App</p>
            <p className="text-xs mt-6">
              Are you a merchant, a service contractor, or a trader or a SME?
            </p>
            <p className="text-xs mt-4">
              Onboard onto our SoftPOS app and start accepting payments quickly.
            </p>
            <ul className="text-xs mt-4">
              <li>- No external hardware required</li>
              <li>- No terminal delays</li>
              <li>- You can use your phone</li>
              <li>- Competitive rates</li>
            </ul>

            <div className="h-28">
              <div className="w-24 ml-auto mt-10 group-hover:scale-110 tran origin-top-right flex items-center justify-center rounded-full bg-black h-24">
                <SvgIcon iconName="smallphonegreen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
