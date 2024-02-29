import React from "react";






const Details = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-evenly md:p-[5rem] p-[2rem] gap-10 bg-slate-200">
      {/* content */}
      <div className="flex flex-col justify-center items-start">
        <div className="py-[2rem]">
          <h1 className=" font-bold text-4xl text-[#22AA86]">Welcome to Recycle</h1>
          <h2 className="font-semibold text-2xl text-gray-600 py-[0.5rem]">
            We are a Leading Global Waste Management Company, Committed to The Environment
          </h2>
        </div>
        <div className="py-[0.5rem] ">
          <p className="text-gray-600  font-normal ">
            "Welcome to Recycle! We're your go-to destination for all things sustainable. Our comprehensive recycling
            service ensures that your waste is managed responsibly, diverting materials from landfills and promoting a
            greener future. Join us in making a difference for the planet, one recyclable at a time."
          </p>
        </div>
        <div className="py-[1rem] ">
          <button className="py-[1rem] px-[2rem] bg-[#22AA86] text-white">Read More</button>
        </div>
      </div>

      {/* photo */}
      <div className="">
        <div>
          <img
            className="w-[100rem] h-[20rem]"
            src="https://img.freepik.com/free-photo/green-landscape-with-blurred-lights_1048-5312.jpg?w=826&t=st=1709203702~exp=1709204302~hmac=4871a8c722e191afacfd9f72b10c22451e5ea437767c3c7258d20cda311a4d6b"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
