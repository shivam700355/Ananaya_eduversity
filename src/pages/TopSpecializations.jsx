import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaDatabase,
  FaBullhorn,
  FaMoneyBillWave,
  FaLaptopCode,
  FaUserTie,
  FaHeartbeat,
  FaChartLine,
} from "react-icons/fa";

export default function TopSpecializations() {
  const [data, setData] = useState([]);

  // API CALL + FILTER "GENERAL"
  useEffect(() => {
    fetch("https://eduversityedutech.com/api/specializations")
      .then((res) => res.json())
      .then((result) => {
        const finalData = result.data || result;

        // REMOVE "GENERAL"
        const filteredData = finalData.filter((item) => {
          const name = item.name?.toLowerCase() || "";
          return !name.includes("general");
        });

        setData(filteredData);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  // SPLIT INTO 4 PARTS
  const part = Math.ceil(data.length / 4);
  const col1 = data.slice(0, part);
  const col2 = data.slice(part, part * 2);
  const col3 = data.slice(part * 2, part * 3);
  const col4 = data.slice(part * 3);

  // ICON LOGIC
  const iconClass = "text-red-500";

  const getIcon = (name = "") => {
    const lower = name.toLowerCase();

    if (lower.includes("data"))
      return <FaDatabase className={iconClass} />;
    if (lower.includes("marketing"))
      return <FaBullhorn className={iconClass} />;
    if (lower.includes("finance"))
      return <FaMoneyBillWave className={iconClass} />;
    if (lower.includes("hr"))
      return <FaUserTie className={iconClass} />;
    if (lower.includes("health"))
      return <FaHeartbeat className={iconClass} />;
    if (lower.includes("it"))
      return <FaLaptopCode className={iconClass} />;

    return <FaChartLine className={iconClass} />;
  };

  return (
    <div className="bg-gray-50 min-h-[10vh] flex items-center justify-center px-0 py-0">
      {/* MAIN BOX */}
      <div className="w-full bg-white rounded-xl shadow-lg p-6 overflow-hidden">
        
        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Top <span className="text-red-500">Specializations</span>
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-2">
            Unlock your potential with career-focused specializations designed
            to help you stay ahead in a competitive world.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-h-[400px] md:max-h-[320px] overflow-hidden">

          {[col1, col2, col3, col4].map((column, colIndex) => (
            <div
              key={colIndex}
              className="overflow-hidden group"
            >
              {/* SCROLL CONTAINER */}
              <div className="animate-scrollUp group-hover:[animation-play-state:paused] flex flex-col gap-4">

                {column.map((item, index) => {
                  const name =
                    item.name || item.title || item.specialization;

                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 border rounded-lg px-4 py-3 hover:shadow-md transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg text-lg">
                          {getIcon(name)}
                        </div>

                        <p className="text-sm font-medium text-gray-800">
                          {name}
                        </p>
                      </div>

                      <FaArrowRight className="text-red-400 text-sm" />
                    </div>
                  );
                })}

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}