import React, { useEffect, useRef, useState } from "react";

export default function UniversitiesCoursesCardsTailwind() {
  const [courses, setCourses] = useState([]);
  const sliderRef = useRef(null);

  // FETCH API
  useEffect(() => {
    fetch("https://eduversityedutech.com/api/universities-courses")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Data:", data);

        const finalData = data.data || [];

        // Duplicate data for infinite loop
        setCourses([...finalData, ...finalData]);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({
          left: slider.offsetWidth / 3,
          behavior: "smooth",
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [courses]);

  return (
    <div className="bg-gray-50 py-20 flex justify-center">
      {/* CENTER CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex
            gap-6
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            no-scrollbar
            justify-center
          "
        >
          {courses.map((course, index) => (
            <div
              key={`${course.university_id}-${index}`}
              className="
                min-w-full
                sm:min-w-[48%]
                md:min-w-[48%]
                lg:min-w-[32%]
                bg-white
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                overflow-hidden
              "
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={
                    course.uni_pic
                      ? `https://manage.eduversityedutech.com/app-assets/images/university/${course.uni_pic}`
                      : "/default-university.jpg"
                  }
                  alt={course.university_name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/default-university.jpg";
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {course.university_name}
                </h2>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div>
                    <p className="font-medium">
                      Specializations
                    </p>
                    <p className="text-gray-400 font-semibold">
                      {course.specialization_count || 0}+
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-medium">
                      Starting Fee
                    </p>
                    <p className="text-gray-800 font-semibold">
                      ₹
                      {course.starting_fee
                        ? parseFloat(
                            course.starting_fee
                          ).toLocaleString()
                        : "0"}
                    </p>
                  </div>
                </div>

                {/* EXPLORE BUTTON */}
                <button
                  onClick={() =>
                    window.open(
                      `https://eduversityedutech.com/explore-university/${course.slug}`,
                      "_blank"
                    )
                  }
                  className="
                    w-full
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-medium
                    py-2
                    rounded-xl
                    transition
                  "
                >
                  Explore Programs
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}