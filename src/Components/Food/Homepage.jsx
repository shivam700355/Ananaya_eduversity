import React from "react";
import bg from "./bg.png";

const Homepage = () => {
  return (
    <div
      className="
        fixed
        top-0
        left-1/2
        -translate-x-1/2
        w-[1600px]
        h-[802px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="background"
        className="w-[1600px] h-[802px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Welcome
        </h1>
      </div>
    </div>
  );
};

export default Homepage;