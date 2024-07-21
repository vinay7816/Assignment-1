import React from 'react';
import history from "../../assets/history.png";
import Faq from './Faq';
import Footer from './Footer';

const History = () => {
  return (
    <>
      <section className=" body-font bg-gray-200">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our team
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.
            </p>
            <div className="flex justify-between items-center w-full mb-8">
              <div className="flex flex-col justify-center items-center mx-4">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">28</h1>
                <p className="leading-relaxed ">team members</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-4">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">15</h1>
                <p className="leading-relaxed "> differnt projects</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-4">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">10+</h1>
                <p className="leading-relaxed ">years of experience</p>
              </div>
            </div>
            <p className="leading-relaxed text-black">
              All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="history" src={history} />
          </div>
        </div>
      </section>
      <Faq/>
      <Footer/>
    </>
  );
}

export default History;
