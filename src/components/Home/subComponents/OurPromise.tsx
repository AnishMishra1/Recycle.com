//dependices
import { BsCollectionFill } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiGoogleearth } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaNfcDirectional } from "react-icons/fa6";

// Local Files
import Card from "../../../globalSubComponents/Card";

// Define your data as a JSON object
const servicesData = [
  {
    photo: BsCollectionFill,
    title: "Waste Collection",
    description: "Say goodbye to Waste Product! We've perfected our process to make it as smooth as a breeze.",
  },
  {
    photo: FaRecycle,
    title: "Recycling Services",
    description:
      "At Tripcanny, we understand that every traveler is unique, which is why we pride ourselves on offering tailored experiences to each of our customers.",
  },
  {
    photo: FaEarthAmericas,
    title: "Environmental",
    description:
      "Extensive Worldwide Network: Access diverse travel options worldwide with our extensive network of providers",
  },
  {
    photo: SiGoogleearth,
    title: "Quality Audits",
    description:
      "Explore the world without breaking the bank! Discover unbeatable prices on flights, accommodations, and more for your next journey.",
  },
  {
    photo: BsFillFuelPumpFill,
    title: "BIO Fuel Production",
    description:
      "Our team of booking experts is dedicated to ensuring your travel dreams become reality. Let us ignite your wanderlust through our booking platform, where seamless planning meets unforgettable adventures. ",
  },
  {
    photo: FaNfcDirectional,
    title: "Sustainability",
    description:
      "At our booking website, we are dedicated to delivering unparalleled quality in every aspect of your travel experience.",
  },
];

const OurPromise = () => {
  return (
    <div className="bg-white w-full md:p-[3rem] py-[2rem] h-auto">
      <div className="flex flex-col items-center py-[3rem]">
        <h1 className="text-center text-4xl sm:text-5xl text-black font-bold ">
          Services & <span className="text-[#22AA86]">Solutions</span>
        </h1>
        <div className="px-[4rem] py-[1rem]">
          <h3 className="text-2xl font-thin text-gray-600 text-center">
            We offer comprehensive recycling, industry-specific waste management, quality control & sustainability
            solutions for businesses and corporations.
          </h3>
        </div>
      </div>
      <div className="bg-white h-full text-black md:mx-[8rem] mx-[2rem] rounded-sm">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          {servicesData.map((service, index) => (
            <Card key={index} photo={service.photo} title={service.title} des={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
