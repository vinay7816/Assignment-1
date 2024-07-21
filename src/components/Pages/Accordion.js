import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="text-lg lg:mr-10">
          {isOpen ? (
            <FaTimes className="text-red-500" />
          ) : (
            <FaPlus className="text-green-500" />
          )}
        </div>
      </div>
      <div
        className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className=" py-10">
      <div className="flex flex-wrap justify-center lg:justify-between items-start lg:mr-10">
        <div className="w-full lg:w-1/2 px-2 mb-6 lg:mb-0">
          <AccordionItem
            title="What is the cost of a mobile application?"
            content="This is the content for accordion item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <AccordionItem
            title="Do you provide a guarantee for the mobile application?"
            content="This is the content for accordion item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="w-full lg:w-1/2 px-2">
          <AccordionItem
            title="How long will development take?"
            content="Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.

Average development time from start to finished application:
Medium projects up to 3 months.
Large projects about 4-6 months.
To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
          />
          <AccordionItem
            title="I will not tell my idea, do you guarantee confidentiality?"
            content="This is the content for accordion item 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
