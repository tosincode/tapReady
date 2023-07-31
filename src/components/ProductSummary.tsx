import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";

const ProductSummary = () => {
  return (
    <div className="product-summary">
      <div className="mx-auto container">
        <div className="overflow-x-scroll ">
          <div className="w-[1000px] mx-auto">
            <h2 className="text-white mx-6 lg:mx-0 text-4xl font-bold mb-4">
              Checkout the <span className="text-[#05FF69]">tapReady</span>{" "}
              <br /> Product Summary
            </h2>
            <div className="text-white card  rounded-3xl mx-6 lg:mx-0 border-[0.5px] text-sm border-gray-500 p-20 mb-8 ">
              <div className="border-gray-500 card border-[0.5px] rounded-lg flex items-center py-5">
                <p className="flex-1"></p>
                <p className="flex-1">Tap to Mobile SDK</p>
                <p className="flex-1">Contactless Java SDK</p>
                <p className="flex-1">Contactless Generic SDK</p>
              </div>
              <div className="flex  border-gray-500 border-b-[0.5px] ">
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Operating Systems
                </p>
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Android / iOS
                </p>
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Android
                </p>
                <p className="flex-1 py-6 px-3">
                  Any Platform that has a C compiler
                </p>
              </div>
              <div className="flex  border-gray-500 border-b-[0.5px] ">
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Supported Development Languages
                </p>
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Java, React, Flutter, Kotlin
                </p>
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Java, React, <br /> Flutter, Kotlin
                </p>
                <p className="flex-1 py-6 px-3">C, C++</p>
              </div>
              <div className="flex  ">
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Suited for
                </p>
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Mobile phones <br /> Tablets, Smart watches
                </p>
                <p className="flex-1 py-6 px-3 border-gray-500 border-r-[0.5px] ">
                  Android NFC Readers Android POS
                </p>
                <p className="flex-1 py-6 px-3">
                  Linux POS ATM Embedded devicesx
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-scroll ">
          <div className="w-[1000px] mx-auto">
            <div className="text-white  rounded-3xl card mx-6 lg:mx-0 border-[0.5px] border-gray-500 px-20 py-10 text-sm mb-8 ">
              <div className="flex border-gray-500 border-b-[0.5px]">
                <p className="border-gray-500 w-1/4 text-sm py-6 px-3 border-r-[0.5px]">
                  Supported Card Schemes
                </p>
                <div className="py-6 px-3 flex-1 flex items-center justify-between ">
                  <p>
                    Mastercard (Version 3.0.2), Visa VCPS (Version 2.2) <br />{" "}
                    Apple Pay, Google Pay
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="mr-2">
                      <SvgIcon iconName="masterCard" />
                    </div>
                    <div className="mr-2">
                      <SvgIcon iconName="visacard" />
                    </div>
                    <div className="mr-2">
                      <SvgIcon iconName="applepay" />
                    </div>
                    <SvgIcon iconName="googlePay" />
                  </div>
                </div>
              </div>
              <div className="flex border-gray-500 border-b-[0.5px]">
                <p className="border-gray-500 w-1/4 text-sm py-6 px-3 border-r-[0.5px]">
                  Data Authentication Methods
                </p>
                <p className="py-6 px-3 flex-1">
                  Visa fast Dynamic Data Authentication (fDDA) <br /> MasterCard
                  and Maestro Contactless SDA and CDA
                </p>
              </div>
              <div className="flex border-gray-500 border-b-[0.5px]">
                <p className="border-gray-500 w-1/4 text-sm py-6 px-3 border-r-[0.5px]">
                  Terminal Configuration
                </p>
                <p className="py-6 px-3 flex-1">
                  Online Only, Offline with Online capability, <br />
                  Offline Only
                </p>
              </div>
              <div className="flex border-gray-500 border-b-[0.5px]">
                <p className="border-gray-500 w-1/4 text-sm py-6 px-3 border-r-[0.5px]">
                  Acquirer <br /> Interfaces
                </p>
                <p className="py-6 px-3 flex-1">
                  Authorization Request, Financial Transaction Request, <br />
                  Batch Data Capture, Online Data Capture
                </p>
              </div>
              <div className="flex ">
                <p className="border-gray-500 w-1/4 text-sm py-6 px-3 border-r-[0.5px]">
                  Cardholder <br /> Verification Methods
                </p>
                <p className="py-6 px-3 flex-1">
                  Authorization Request, Financial Transaction Request, <br />
                  Batch Data Capture, Online Data Capture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
