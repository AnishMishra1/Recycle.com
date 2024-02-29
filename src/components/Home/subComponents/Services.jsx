import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto  bg-white">
      <div className="flex flex-col lg:flex-row h-auto md:p-[5rem] ">
        <div className="flex flex-col items-start justify-center bg-[#22AA86] p-[3rem] text-white">
          <h1 className="text-2xl font-bold">Industrial</h1>
          <h2 className="text-2xl font-semibold">Waste Management</h2>
          <div className="py-[1rem]">
            <p>We offer complete industrial waste management services, from collection to recycling.</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center bg-white p-[3rem] text-white">
          <h1 className="text-2xl font-bold text-[#22AA86]">SUSTAINABLE</h1>
          <h2 className="text-2xl font-semibold text-gray-600">Business Solutions</h2>
          <div className="py-[1rem] text--gray-600 text-gray-600">
            <p>We help business adopt sustainable and environmentally responsible recycling practices.</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center bg-white p-[3rem] text-white">
          <h1 className="text-2xl font-bold text-[#22AA86]">ENVIRONMENTAL</h1>
          <h2 className="text-2xl font-semibold text-gray-600">Quality Services</h2>
          <div className="py-[1rem] text-gray-600">
            <p>We focus on disposing of all waste sustainably and minimizing environmental impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
