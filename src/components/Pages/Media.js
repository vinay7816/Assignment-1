import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import icon1 from "../../assets/narrative_active_outline_24.png"
import icon2 from "../../assets/ball_outline_24.png"
import Bank from "../../assets/bank_outline_24.png"
import construction from "../../assets/employee_outline_24.png"
import games from "../../assets/game_outline_24.png"
import education from "../../assets/education_outline_24.png"
import transport from "../../assets/car_outline_24.png"
import medicine from "../../assets/health_outline_24.png"
import restaurant from "../../assets/bowl_sticks_outline_24.png"
import markets from "../../assets/market_outline_24.png"
import AR from "../../assets/live_outline_24.png"
import tv from "../../assets/video_outline_24.png"
import startup from "../../assets/work_outline_24.png"
import religion from "../../assets/magic_wand_outline_24.png"
import online from "../../assets/video_circle_outline_24.png"
import Projects from "./Projects";
const Media = () => {
  return (
    <>
    <section className="text-gray-900 body-font">
      <div id="media" className="container px-10  mx-auto">
        <h1 className="py-14 font-semibold text-3xl lg:w-1/3">Developed more than 15 projects in 3 years</h1>
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="py-8 px-4 lg:w-1/3">
            <div className="mx-auto flex flex-col space-y-2">
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer ">
              <span
                  className=" bg-white border-blue-600 p-2 mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={icon1} />
                </span>
                Social media
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
                <span
                  className=" bg-white border-blue-600 p-2 mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={icon2} />
                </span>
                Fitness and sport
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2 mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={Bank} />
                </span>
                Bank
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2 mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={construction} />
                </span>
                Construction
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={games} />
                </span>
                Game projects
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              
            
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <div className="mx-auto flex flex-col space-y-2">
            <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer ">
            <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={education} />
                </span>
                
                Education
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={transport} />
                </span>
                Auto, transport
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2" 
                  style={{ borderRadius: "50%" }}
                >
                  <img src={medicine} />
                </span>
                Medicine, health
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={restaurant} />
                </span>
                Restaurants
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={markets} />
                </span>
                Marketplaces
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <div className="mx-auto flex flex-col space-y-2">
            <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer ">
            <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={AR} />
                </span>
                AR technology
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={tv} />
                </span>
                TV series
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={startup} />
                </span>
                Startups
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={religion} />
                </span>
                Religion
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
              <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer">
              <span
                  className=" bg-white border-blue-600 p-2  mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  <img src={online} />
                </span>
                Online courses
                <span className="px-2">
                  <IoIosArrowForward />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Projects/>
    </>
  );
};

export default Media;
