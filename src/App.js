import React from "react";
import Testiminial from "./Components/Testiminial";
import reviews from "./data";

const App = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200 text-center ">
      <h1 className=" text-4xl font-bold ">Our Testimonials</h1>
      <div className=" h-[4px] w-[100px] bg-violet-400 mt-1 "></div>
      <Testiminial reviews={reviews} />
    </div>
  );
};

export default App;
