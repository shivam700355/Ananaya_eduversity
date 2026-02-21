import React from "react";

import img1 from "../assets/bng_1.png";
import img2 from "../assets/alumni/girl.jpg";
import img3 from "../assets/alumni/girl2.jpg";
import ktlLogo from "../assets/KTL.png";

function AlumniSection() {
  const alumniData = [
    { id: 1, name: "Riya Sharma", image: img1, company: "SLMG Beverages", logo: "/images/slmg.png" },
    { id: 2, name: "Amit Verma", image: img3, company: "KTL Automobile", logo: ktlLogo },
    { id: 3, name: "Neha Singh", image: img2, company: "Surya SGF", logo: "/images/surya.png" },
    { id: 4, name: "Anchal Chaubey", image: img3, company: "Greenland ", logo: "/images/greenland.png" },
    { id: 5, name: "Rose Patwa", image: img1, company: "Greenland Pvt Ltd", logo: "/images/greenland.png" },
    { id: 6, name: "Divya Mishra", image: img3, company: "Gramik Pvt Ltd", logo: "/images/greenland.png" },
    { id: 7, name: "Rohit Kumar", image: img3, company: "HCL", logo: "/images/greenland.png" },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Proud <span className="text-red-500">Alumni</span>
        </h2>

        {/* Infinite Scroll Wrapper */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 w-max">

            {/* Duplicate data for infinite effect */}
            {[...alumniData, ...alumniData].map((alumni, index) => (
              <div
                key={index}
                className="w-[280px] flex-shrink-0"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition duration-300 hover:scale-105">

                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-24 h-24 rounded-full border-4 border-red-500 object-cover mb-4"
                  />

                  <h3 className="font-semibold text-lg text-gray-800">
                    {alumni.name}
                  </h3>

                  <img
                    src={alumni.logo}
                    alt="company logo"
                    className="h-10 mt-3 object-contain"
                  />

                  <p className="mt-2 text-sm text-gray-600 font-medium">
                    {alumni.company}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default AlumniSection;