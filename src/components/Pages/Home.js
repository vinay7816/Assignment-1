import React from "react";
import logo from "../../assets/logo-bg.png";
import grp1 from "../../assets/Group1.png";
import Contactform from "./Contactform";
import Services from "../Pages/Services"
import Media from '../Pages/Media';
import Projects from '../Pages/Projects';
import Stages from '../Pages/Stages';
import History from '../Pages/History';
import Faq from '../Pages/Faq';
import Footer from '../Pages/Footer';

const Home = () => {
  return (
    <>
    <div className="container mx-auto px-4 lg:py-24 py-40">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="font-inter mb-4">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 mb-4">
              <span className="text-orange-500">User-Centric Excellence: </span>
              <span className="text-black">
                Our App Development Services Tackles Your Pain Points
              </span>
            </h1>
          </div>
          <div className="font-inter mb-8">
            <p className="text-lg text-black">
              Experience a Seamless Digital Journey with Desun - Where Every Line of Code Resolves Your Challenges and <span className="text-orange-500">Elevates Your App Experience</span> to Unparalleled Heights.
            </p>
          </div>
          <div className="my-10">
            <Contactform />
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-end">
          <div className="absolute inset-0 lg:relative lg:transform-none transform rotate-3 lg:top-(-30px)" >
            <img src={grp1} alt="group" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <Services/>
    
  
   
    </div>
    </>
  );
};

export default Home;
