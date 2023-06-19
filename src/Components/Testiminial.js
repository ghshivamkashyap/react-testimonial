import React, { useState } from "react";
import Card from "./Card";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

function Testiminial(props) {
  let reviews = props.reviews;
  const [index, setindex] = useState(0);

  function lefthandler() {
    if (index - 1 < 0) {
      setindex(reviews.length - 1);
    } else {
      setindex(index - 1);
    }
  }

  function righthandler() {
    if (index + 1 >= reviews.length) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }

  function randomhandler() {
    let idx = Math.floor(Math.random() * reviews.length);
    setindex(idx);
  }

  return (
    <div className=" max-w-[600px] bg-white pb-10 px-10 mt-10 rounded-md shadow-md ">
      <Card review={reviews[index]} />

      <div className=" text-violet-700 text-3xl mt-5 font-bold">
        <button onClick={lefthandler}>{<HiOutlineChevronLeft />}</button>
        <button onClick={righthandler}>{<HiOutlineChevronRight />}</button>
      </div>
      <button
        onClick={randomhandler}
        className=" font-bold text-white mt-5 py-2 px-5 bg-violet-500 hover:bg-violet-600 w-[130px] rounded-md text-center mx-auto "
      >
        Random
      </button>
    </div>
  );
}

export default Testiminial;
