import React from "react";
import { IconType } from "react-icons";

type cardsProps = {
  photo: IconType;
  title: string;
  des: string;
};

const Card = (props: cardsProps) => {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-[1rem] bg-white  hover:scale-105 transition duration-150 ease-in-out px-[2rem] py-[3rem] cursor-pointer">
      <div className="text-6xl mb-[1rem] text-[#22AA86]">{<props.photo className="text-[#22AA86]" />}</div>
      <div className="text-2xl font-medium text-gray-600">{props.title}</div>
      <div className="text-1xl font-light text-gray-600 ">{props.des}</div>
    </div>
  );
};

export default Card;
