import React from "react";
import reviews from "../data";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let review = props.review;
  return (
    <div className=" flex flex-col md:relative">
      <div className="absolute -top-[3rem] -left-[1rem] z-10 mx-auto ">
        <img
          className=" aspect-square rounded-full w-[140px] h-[140px] z-[20]  "
          src={review.image}
          alt=""
        />
        <div className="rounded-full w-[140px] h-[140px]  bg-violet-500 absolute top-[-6px] -z-10 left-[10px]"></div>
      </div>

      <p className=" tex mt-7 font-bold text-2xl capitalize ">{review.name}</p>
      <p className=" text-center mt-2  text-violet-300 uppercase text-sm ">
        {review.job}
      </p>
      <FaQuoteLeft className="text-violet-600 mx-auto mt-5 " />
      <p className=" text-center mt-4 text-slate-500 ">{review.text}</p>
      <FaQuoteRight className="text-violet-600 mx-auto mt-5 " />
    </div>
  );
}

export default Card;
