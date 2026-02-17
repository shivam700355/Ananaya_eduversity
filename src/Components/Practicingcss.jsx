import React from "react";
import Image from "../assets/bng_1.png";

const Practicingcss = () => {
  return (
    // <div className="w-80 border border-gray-500">
    //   <div class="mx-auto w-1/2 bg-yellow-200">Eduversity</div>
    //   <div class="mt-4 bg-green-200"> Good Morning eduversity...... </div>
    //   <div class="mr-4 bg-red-200">This is online education platform.</div>

    //   <div class="flex space-x-10">
    //     <div class="bg-gray-200 p-2">
    //       Bachler of Bussiness Administration(BBA)
    //     </div>
    //     <div class="bg-gray-200 p-2">
    //       Master of Bussioness Administration(MBA)
    //     </div>
    //   </div>

    //   <div class="p-20 "> </div>
    //   <div class="m-8 "> </div>
    //   <div class="mt-6"> </div>
    //   <div class="h-17 w-96 bg-sky-600 opacity-20 ..."></div>

    //   <h1 className="text-lg">Ananya Gupta.</h1>
    // </div>

    // <div class="grid grid-cols-2 gap-4">
    //   <div class="bg-blue-200">01</div>
    // </div>

    // div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img
          class="h-48 w-full object-cover md:h-full md:w-48"
          src={Image}
          alt="Modern building architecture"
        />
      </div>

      <div class="p-8">
        <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          Our Journey From Guidance to Growth
        </div>

        <a
          href="#"
          class="mt-1 block text-lg leading-tight font-medium text-black hover:underline "
        >
          Staffing Pro....
        </a>
        <p class="mt-2 text-gray-500">
          From guiding students to the Right University and Right Course, to
          collaboration with the top universities <br></br>
          like Amity University,Mangalayatan,and GLA Online, we have empowered
          5,000+ learners to build brighter careers.<br></br>
          With strong foundations in Kanpur and Lucknow,and 50+ counselling
          centers across U.P, M.P.,Bihar, and Rajsthan.<br></br>
          Eduversity continues to lead the way-- proudly aligned with NSDC Skill
          Development Programs under Central and State Government initiatives.
        </p>

        <div class="grid grid-flow-col grid-rows-3 gap-4">
          <div class="row-span-3 bg-rose-700"> </div>
          <div class="col-span-2 bg-red-500"> Explore Courses From Edutech</div>
          <div class="col-span-2 row-span-2 bg-black-400">
            <p>
              {" "}
              Our Vision<br></br>
              This is the online platform for education.<br></br>
              Here we provided all professional courses.<br></br>
              You can study from your Home.<br></br>
              To become a global platform that empowers learners everywhere with
              accessible,innovation,and high-quality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practicingcss;
