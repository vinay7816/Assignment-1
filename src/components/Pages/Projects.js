import React, { useState } from "react";
import projectImg from "../../assets/projects.png"; // Renamed to avoid confusion
import location from "../../assets/place_outline_24.png";
import work from "../../assets/work_outline_24.png";
import Contactform from "./Contactform";
import Stages from "./Stages";

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={value === index ? "block" : "hidden"}
    >
      {value === index && <div className="p-3">{children}</div>}
    </div>
  );
}

export default function Projects() {
 
  const projectsData = [
    {
      name: "Project 1",
      description:
        "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.",
      img: projectImg, 
    },
    {
      name: "Project 2",
      description:
        "Developed a cutting-edge real estate management tool, providing streamlined property listing features, advanced search capabilities, and secure user access. Enhancing property management efficiency and user interaction.",
      img: projectImg, 
    },
    {
      name: "Project 3",
      description:
        "Created a comprehensive tenant management system with features for lease tracking, maintenance requests, and tenant communication. Aiming to simplify property management tasks and improve tenant satisfaction.",
      img: projectImg, 
    },
    {name: "Project 4",
    description:
      "Created a comprehensive tenant management system with features for lease tracking, maintenance requests, and tenant communication. Aiming to simplify property management tasks and improve tenant satisfaction.",
    img: projectImg, 
  }
  ];

  const [value, setValue] = useState(0);

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10" id="cases">
        <div className="py-12">
          <div className="lg:w-1/2 w-full mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              Projects we are proud of
            </h1>
            <p className="text-base lg:text-lg">
              Our software development company is truly proud of the wonderful
              clients we have worked with. We enjoy a long-term partnership.
            </p>
          </div>
          <div className="w-full flex flex-col py-8">
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-4" role="tablist">
                {["Project 1", "Project 2", "Project 3", "Project 4"].map(
                  (item, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 ${
                        value === index
                          ? "border-b-2 border-orange-500 text-orange-500"
                          : "text-black"
                      }`}
                      id={`simple-tab-${index}`}
                      aria-controls={`simple-tabpanel-${index}`}
                      onClick={() => handleChange(index)}
                      role="tab"
                      aria-selected={value === index}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
            {projectsData.map((project, index) => (
              <CustomTabPanel key={index} value={value} index={index}>
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-5 py-14">
                    <div className="lg:w-4/5 mx-auto flex flex-col lg:flex-row md:justify-between justify-center items-center">
                      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col items-center lg:items-start md:text-center lg:text-left">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                          {project.name}
                        </h1>
                        <p className="leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <p className="leading-relaxed mb-4">
                          Business analysis / iOS / Android / QA / UI/UX Design
                        </p>
                        <div className="flex items-center w-full justify-between mb-6 py-2">
                          <div className="flex flex-col items-center">
                            <div className="flex items-center mb-2">
                              <div className="bg-white border-blue-600 p-2 mx-2 rounded-full">
                                <img src={location} alt="location" />
                              </div>
                              <span className="ml-2">India</span>
                            </div>
                            <div className="text-center">
                              <span className="title-font font-medium text-2xl text-gray-900">
                                400%
                              </span>
                              <p>Users Growth</p>
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <div className="flex items-center mb-2">
                              <div className="bg-white border-blue-600 p-2 mx-2 rounded-full">
                                <img src={work} alt="work" />
                              </div>
                              <span className="ml-2">Realestate</span>
                            </div>
                            <div className="text-center">
                              <span className="title-font font-medium text-2xl text-gray-900">
                                + 200 000
                              </span>
                              <p>Active Users</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/3 w-full flex justify-center lg:justify-end max-w-xs lg:max-w-sm">
                        <img
                          className="w-full h-auto rounded overflow-hidden"
                          src={project.img}
                          alt="project"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </CustomTabPanel>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full p-4 flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-green-500">
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-4/5 lg:w-4/5">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left">
              Let's discuss your project
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center md:text-left">
              Let's figure out how to create an effective application, its cost,
              and terms of its development.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-end">
            <Contactform />
          </div>
        </div>
      </div>
      <Stages/>
    </>
  );
}
