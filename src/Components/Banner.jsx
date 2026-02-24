import { useState, useEffect } from "react";
import Banner_4 from "../assets/companies/Banner_4.jpg";
import Banner_2 from "../assets/companies/Banner_2.jpg"; // add second image

export default function Banner() {
  const banners = [Banner_4, Banner_2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={banner}
              alt="Banner"
              className="w-full h-full object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}