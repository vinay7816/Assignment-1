import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../../assets/logo-bg.png";
import mobile from "../../assets/smartphone_outline_green.png";
import mail from "../../assets/mail_outline_green.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-black-600 body-font" style={{ position: "relative", zIndex: 1000 }}>
      <div className="container mx-auto flex fixed lg:left-2 lg:right-2 flex-wrap py-2 my-4 flex-col md:flex-row items-center bg-white rounded-xl w-full">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <img src={logo} alt="main-logo" className="" />
          </a>
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-black md:hidden"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:flex flex-wrap md:ml-auto md:mr-auto flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}>
          <Link className="mr-5 text-black font-bold hover:text-green-500 cursor-pointer" to="services" smooth={true} duration={500}>Services</Link>
          <Link className="mr-5 font-bold hover:text-green-500 cursor-pointer" to="media" smooth={true} duration={500}>Media</Link>
          <Link className="mr-5 font-bold hover:text-green-500 cursor-pointer" to="cases" smooth={true} duration={500}>Cases</Link>
          <Link className="mr-5 font-bold hover:text-green-500 cursor-pointer" to="faq" smooth={true} duration={500}>FAQ</Link>
          <Link className="mr-5 font-bold hover:text-green-500 cursor-pointer" to="contact" smooth={true} duration={500}>Contact</Link>
        </nav>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto`}>
          <div className='flex justify-center items-center space-x-8'>
            <div className='flex items-center space-x-2'>
              <img src={mobile} alt='mobile' className='w-6'/>
              <span className='text-green-500'>+91 7798865333</span>
            </div>
            <div className='flex items-center space-x-2'>
              <img src={mail} alt='mail' className='w-6'/>
              <span className='text-green-500'>demo@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
