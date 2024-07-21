import React, { useState } from 'react';
import { Button } from '../ui/button';

const Contactform = () => {
  const[input,setinput]=useState({
    Name:"",
    Phone:"",
    Email:"",
    Business:""
  })
  const handlesubmit=()=>{
    console.log(input)
    setinput({
      Name:"",
      Phone:"",
      Email:"",
      Business:""
    })
  }
  return (
    <section className="body-font bg-white rounded-xl">
      <div className="container px-5 my-5 mx-auto flex flex-wrap items-center">
        <div className="lg:w-6/6 md:w-2/2 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-lg font-medium title-font mb-2" style={{ fontWeight: "700", lineHeight: "20px" }}>
            Leave your contacts and we will call you back within 30 minutes
          </h2>
          <div className="relative mb-4 flex flex-wrap justify-between items-center">
            <div className="w-full md:w-[48%] mb-4 md:mb-0">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input
              value={input.Name}
                type="text"
                id="full-name"
                name="full-name"
                 onChange={(e)=>{setinput({...input,Name:e.target.value})}}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full md:w-[48%] mb-4 md:mb-0">
              <label htmlFor="phone-number" className="leading-7 text-sm text-gray-600">Phone Number</label>
              <input
              value={input.Phone}
                type="tel"
                id="phone-number"
                name="phone-number"
                onChange={(e)=>setinput({...input,Phone:e.target.value})}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="relative mb-4 flex flex-wrap justify-between items-center">
            <div className="w-full md:w-[48%] mb-4 md:mb-0">
              <label htmlFor="Business-Name" className="leading-7 text-sm text-gray-600">Business Name</label>
              <input
              value={input.Business}
                type="text"
                id="Business-Name"
                onChange={(e)=>setinput({...input,Business:e.target.value})}
                name="Business-Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full md:w-[48%] mb-4 md:mb-0">
              <label htmlFor="Business-Email" className="leading-7 text-sm text-gray-600">Business Email</label>
              <input
              value={input.Email}
                type="email"
                id="Business-Email"
                name="Business-Email"
                onChange={(e)=>setinput({...input,Email:e.target.value})}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <Button variant="green" role="button" onClick={handlesubmit}>Submit</Button>
        </div>
      </div>
    </section>
  );
}

export default Contactform;
