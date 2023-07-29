import SvgIcon from "./SvgIcon/SvgIcon";
import Image from "next/image";
import tapReadyImg from "../../public/images/tapready-phone.png";

const PaymentsFeatures = () => {
  return (
    <div className="payment-feature text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <SvgIcon iconName="paymentIcon" />
          <p className="font-bold text-center text-4xl mt-20 mb-5 ">
            What makes TapReady payment solution.
          </p>
          <SvgIcon iconName="payment" />
        </div>
        <div className=" mt-12 flex flex-col items-center lg:flex-row justify-center">
          <div>
            <div className=" w-[320px] md:w-[450px] pt-10  bg-black overflow-hidden rounded-2xl flex-col items-center flex justify-center">
              <p className="text-2xl font-light">NFC Tap to Pay</p>
              <p className="mb-12 font-bold text-3xl ">Mobile Solution</p>
              <div className="z-[99]">
                <SvgIcon iconName="atmCard" />
              </div>
              <figure className="relative overflow-hidden -mt-40 h-[453px] w-[391px] ">
                <Image src={tapReadyImg} alt="Ben " fill placeholder="blur" />
              </figure>
            </div>
          </div>
          <div className="w-[300px] mt-8 lg:mt-0 lg:ml-8  ">
            <div className="bg-black rounded-2xl flex flex-col items-center">
              <div className="pt-10 text-center mb-8">
                <p className="text-2xl font-light">Supported OS</p>
                <p className="mb-12 font-bold text-3xl ">Android 6.0+</p>
              </div>
              <SvgIcon iconName="android" />
            </div>
            <div className="bg-[#05FF69] text-black mt-6 rounded-2xl p-8 flex justify-between pb-16 items-start ">
              <div className="w-40 mt-10">
                <p className="font-semibold text-2xl mb-4">
                  NFC <br />
                  compatibility
                </p>
                <p className="text-xl">
                  No External <br /> Card Readers <br /> are required
                </p>
              </div>
              <SvgIcon iconName="nfc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsFeatures;
