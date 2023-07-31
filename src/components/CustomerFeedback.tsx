import React from "react";

const CustomerFeedback = () => {
  return (
    <div className="feedback">
      <div className="container mx-auto text-white text-center">
        <p className="text-2xl font-semibold">Have a custom requirement? </p>
        <p className="text-2xl font-semibold">Let’s discuss idea.</p>
        <div className="flex justify-center">
          <div className="card w-80 px-8 py-4 flex items-center justify-center mt-8 ">
            <a href="mailto:sales@tapready.africa" className="text-center">
              sales@tapready.africa
            </a>
            {/* <p className="text-xs">Enter Email to subscribe</p>
            <button className="bg-[#05FF69] text-black px-4 text-sm font-medium py-2 rounded-md">
              Send
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
