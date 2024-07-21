import React from 'react';
import logo from "../../assets/logo-bg-3-2.png";
import smartphone from "../../assets/smartphone_outline_24.png";
import gmail from "../../assets/mail_outline_24.png"
import request from "../../assets/document_outline_24.png"
import location from "../../assets/location_outline_24.png"

const Footer = () => {
  return (
    <footer className="text-white body-font">
      <div className="container px-5 py-12 mx-auto" id="contact">
        <div className="md:text-left text-center py-4 order-first bg-black rounded-2xl">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-8">
              <img src={logo} alt="logo"  />
            </div>
            <div className="flex flex-wrap w-full justify-around items-center">
              
                <div  className="flex flex-col items-center md:items-start mb-6 md:mb-0 mx-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <img src={smartphone} alt="phone" className="w-6" />
                    </span>
                    <span className='text-gray-500'>Contact me</span>
                  </div>
                  <p className="text-white ml-4">+91 98765432</p>
                </div>
                <div  className="flex flex-col items-center md:items-start mb-6 md:mb-0 mx-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <img src={gmail} alt="phone" className="w-6" />
                    </span>
                    <span className='text-gray-500'>Gmail</span>
                  </div>
                  <p className="text-white ml-4">demo@gmail.com</p>
                </div>
                <div  className="flex flex-col items-center md:items-start mb-6 md:mb-0 mx-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <img src={location} alt="phone" className="w-6" />
                    </span>
                    <span className='text-gray-500'>Address</span>
                  </div>
                  <p className="text-white ml-4">Mumbai, India</p>
                </div>
                <div  className="flex flex-col items-center md:items-start mb-6 md:mb-0 mx-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <img src={request} alt="phone" className="w-6" />
                    </span>
                    <span className='text-gray-500'>Leave a request</span>
                  </div>
                  <p className="text-white ml-4">Leave a request</p>
                </div>
                
             
            </div>
            <div className="mt-8">
              <p>We work throughout the world</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
