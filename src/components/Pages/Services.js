import React from 'react';
import img from "../../assets/image10.png"
import { IoIosArrowForward } from "react-icons/io";
import Media from './Media';

const Services = () => {
  return (
    <>
    <section className="text-gray-600 body-font" id="services">
    <div className="container px-5 pt-16 pb-24 mx-auto">
      <div className="flex justify-between items-center flex-wrap w-full mb-20 bg-white rounded-2xl" style={{}}>
        <div>
            <img src={img} alt="planet"/>
        </div>
        <div>
            <img src={img} alt="planet"/>
        </div>
        <div>
            <img src={img} alt="planet"/>
        </div>
        <div>
            <img src={img} alt="planet"/>
        </div>
        <div>
            <img src={img} alt="planet"/>
        </div>
        <div>
            <img src={img} alt="planet"/>
        </div>
       
      </div>
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:w-full px-8 py-2 border-l-2 border-gray-200 border-opacity-60 " >
        <div className=''>


        <div>
        <h2 className="text-xl sm:text-3xl text-black font-bold title-font mb-2" >Full development cycle</h2>
        <p className="leading-relaxed text-base mb-4" style={{lineHeight:"27px"}}>We use proven technologies</p>
        </div>
          <div>
          <p>Web</p>
          <p>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</p>
          </div>
          <div className='py-14'>
          <p>Mobile</p>
          <p>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
          </div>
          </div>
       
        </div>
        <div className="lg:w-1/2 md:w-full px-12 py-4 border-l-2 border-gray-200 border-opacity-60 ">
        
          
        <div className="mx-auto flex flex-col space-y-2" >
  <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer " style={{lineHeight:"34px"}}>iOS Development<span className='px-2'><IoIosArrowForward/></span></span>
  <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer" style={{lineHeight:"34px"}}>Android Development<span  className='px-2'><IoIosArrowForward/></span></span>
  <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer" style={{lineHeight:"34px"}}>Web Development<span  className='px-2'><IoIosArrowForward/></span></span>
  <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer" style={{lineHeight:"34px"}}>UI/UX Design<span  className='px-2'><IoIosArrowForward/></span></span>
  <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer"style={{lineHeight:"34px"}}>Testing<span  className='px-2'><IoIosArrowForward/></span></span>
  <span className="text-black font-semibold text-lg hover:text-green-500 flex  items-center cursor-pointer" style={{lineHeight:"34px"}}>Launch<span  className='px-2'><IoIosArrowForward/></span></span>
  <span className="text-black font-semibold text-lg hover:text-green-500 flex  items- cursor-pointer" style={{lineHeight:"34px"}}>IT Consulting<span  className='px-2'><IoIosArrowForward/></span></span>
</div>

       
        </div>
       
      </div>
    </div>
  </section>
  <Media/>
  </>
  );
}

export default Services;
