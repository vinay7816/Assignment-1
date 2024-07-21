import React from "react";
import mobile from "../../assets/mobile.svg";
import planning from "../../assets/planing.svg"
import design from "../../assets/graphic-design.svg"
import development from "../../assets/coding-language.svg"
import testing from "../../assets/security.svg"
import launching from "../../assets/hosting.svg"
import support from "../../assets/application.svg"
import History from "./History";

const Stages = () => {
 
  return (
    <>
    <section className="text-gray-600 body-font py-4">
        
      <div className="container px-5 py-16 mx-auto">
      <h1 className="font-bold text-black text-3xl py-16">Application Development Stages</h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center items-center">
          <div className="p-4 lg:w-1/3 sm:mb-0 mb-6 flex flex-col justify-center items-center">
            <div className="rounded-xl overflow-hidden bg-white shadow-lg mb-6 w-full">
              <div className="flex flex-col justify-start  py-5 px-4">
                <div className="flex items-center justify-start mb-4">
                  <img
                    src={planning}
                    alt="Analysis"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold">Analysis</span>
                </div>
                <div>
                  <p className="text-gray-600 text-start">
                    We craft precise technical specs, aligning with your
                    business, technology, and user requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-lg mb-6 w-full">
              <div className="flex flex-col justify-start  py-5 px-4">
                <div className="flex items-center justify-start mb-4">
                  <img
                    src={design}
                    alt="Analysis"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold">Design</span>
                </div>
                <div>
                  <p className="text-gray-600 text-start">
                    We adapt the customer's corporate identity to the platform
                    guidelines. We draw convenient and understandable
                    interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-lg mb-6 w-full">
              <div className="flex flex-col justify-start  py-5 px-4">
                <div className="flex items-center justify-start mb-4">
                  <img
                    src={development}
                    alt="Analysis"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold">Development</span>
                </div>
                <div>
                  <p className="text-gray-600 text-start">
                    We create an extensible architecture, write clean and stable
                    code. We integrate with customer technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/3 sm:mb-0 mb-6">
            <img
              alt="content"
              className="object-cover shadow-sm object-center h-full md:w-30 w-54"
              src={mobile}
            />
          </div>
          <div className="p-4 lg:w-1/3 sm:mb-0 mb-6 flex flex-col justify-center items-center">
            <div className="rounded-xl overflow-hidden bg-white shadow-lg mb-6 w-full">
              <div className="flex flex-col justify-start  py-5 px-4">
                <div className="flex items-center justify-start mb-4">
                  <img
                    src={testing}
                    alt="Analysis"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold">Testing</span>
                </div>
                <div>
                  <p className="text-gray-600 text-start">
                    We carry out functional testing and do bug fixes. We adapt
                    the application to different phone resolutions
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-lg mb-6 w-full">
              <div className="flex flex-col justify-start  py-5 px-4">
                <div className="flex items-center justify-start mb-4">
                  <img
                    src={testing}
                    alt="Analysis"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold">Launching</span>
                </div>
                <div>
                  <p className="text-gray-600 text-start">
                    We design the application page and publish it in the App
                    Store and Google Play stores.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-lg mb-6 w-full">
              <div className="flex flex-col justify-start  py-5 px-4">
                <div className="flex items-center justify-start mb-4">
                  <img
                    src={support}
                    alt="Analysis"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold">Support</span>
                </div>
                <div>
                  <p className="text-gray-600 text-start">
                    We monitor the stability of the application, update it for
                    new devices and versions of iOS and Android.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <History/>
    </>
  );
};

export default Stages;
