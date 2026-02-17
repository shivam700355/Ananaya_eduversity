import React from "react";
import Image from "../assets/bng_1.png";

const GridPractice = () => {
  return (
    <div class="grid grid-cols-2 border gap-4 ">
      <div class="h-96 w-full border border-red-500">
        <img className=" h-96 w-full" alt="Professional" src={Image} />
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="h-96 w-full border border-red-500 text-center rounded-lg shadow-lg  font-black text-lg">
        <i class="fa-solid fa-bars"></i>
        Eduversity Educational platform
        <p class=" =mx-0 px-3 text-xs sm:text-left-sm md: text-base text-left items-center justify-center font-white p-120 m-8 flex">
          This is the educational platform. where we provided online education
          for study So I started to walk into the water.<br></br> I won't lie to
          you boys, I was terrified. But I pressed on, and as I made my way past
          the breakers a strange calm came over me. I don't know if it was
          divine intervention or the kinship of all living things but I tell you
          Jerry at that moment, I was a marine biologist.
        </p>
      </div>
    </div>
  );
};

export default GridPractice;
