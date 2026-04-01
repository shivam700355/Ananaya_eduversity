import React, { useEffect, useRef, useState } from "react";

const UNIVERSITY_BASE_URL =
  "https://manage.eduversityedutech.com/app-assets/images/university/";

const CERTIFICATION_BASE_URL =
  "https://manage.eduversityedutech.com/app-assets/images/certifications/";

export default function UniversitiesCoursesCardsTailwind() {
  const [courses, setCourses] = useState([]);
  const sliderRef = useRef(null);

  // FETCH API
  useEffect(() => {
    fetch("http://eduversityedutech.com/api/universities-courses")
      .then((response) => response.json())
      .then((data) => {
        const finalData = data.data || [];

        console.log("API Data:", finalData);

        // duplicate for infinite scroll
        setCourses([...finalData, ...finalData]);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // TRUE INFINITE SMOOTH SCROLL
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || courses.length === 0) return;

    let animationFrameId;
    const speed = 0.5;

    const scroll = () => {
      const halfWidth = slider.scrollWidth / 2;

      if (slider.scrollLeft >= halfWidth) {
        slider.scrollLeft -= halfWidth;
      }

      slider.scrollLeft += speed;

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [courses]);

  return (
    <div className="bg-gray-50 py-20 flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar"
        >
          {courses.map((course, index) => {

            /* CONVERT API STRING TO ARRAY */
            let certList = [];

            if (course.mg_certification_names) {
              certList =
                course.mg_certification_names.split(",");
            }

            return (
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

                {/* UNIVERSITY IMAGE */}
                <img
                  src={
                    course.uni_pic
                      ? `${UNIVERSITY_BASE_URL}${course.uni_pic}`
                      : "/default-university.jpg"
                  }
                  alt={course.university_name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "/default-university.jpg";
                  }}
                />

                {/* CONTENT */}
                <div className="p-5">

                  {/* UNIVERSITY NAME */}
                  <h2 className="
                    text-lg
                    font-semibold
                    text-gray-800
                    mb-4
                    truncate
                  ">
                    {course.university_name}
                  </h2>

                  {/* SPECIALIZATION + FEE */}
                  <div className="
                    flex
                    justify-between
                    text-sm
                    text-gray-500
                    mb-3
                  ">
                    <div>
                      <p className="font-medium">
                        Specializations
                      </p>
                      <p className="
                        text-gray-400
                        font-semibold
                      ">
                        {course.specialization_count || 0}+
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-medium">
                        Starting Fee
                      </p>
                      <p className="
                        text-gray-800
                        font-semibold
                      ">
                        ₹
                        {course.starting_fee
                          ? parseFloat(
                              course.starting_fee
                            ).toLocaleString()
                          : "0"}
                      </p>
                    </div>
                  </div>

                  {/* CERTIFICATION LOGOS */}
                  <div className="
                    flex
                    items-center
                    gap-2
                    mb-4
                    flex-wrap
                  ">
                    {certList.length > 0 ? (
                      certList.map((cert, i) => (
                        <img
                          key={i}
                          src={`${CERTIFICATION_BASE_URL}${cert.trim()}`}
                          alt="Certification"
                          className="
                            w-8
                            h-8
                            object-contain
                          "
                          loading="lazy"
                          onError={(e) => {
                            e.target.src =
                              `${CERTIFICATION_BASE_URL}c-naac.jpg`;
                          }}
                        />
                      ))
                    ) : (
                      /* DEFAULT ICONS IF API EMPTY */
                      <>
                        <img
                          src={`${CERTIFICATION_BASE_URL}c-naac.jpg`}
                          className="w-8 h-8"
                          alt="NAAC"
                        />
                        <img
                          src={`${CERTIFICATION_BASE_URL}AICTE-logo.png`}
                          className="w-8 h-8"
                          alt="AICTE"
                        />
                        <img
                          src={`${CERTIFICATION_BASE_URL}wes.jpg`}
                          className="w-8 h-8"
                          alt="WES"
                        />
                        <img
                          src={`${CERTIFICATION_BASE_URL}c-ugc.jpg`}
                          className="w-8 h-8"
                          alt="UGC"
                        />
                        <img
                          src={`${CERTIFICATION_BASE_URL}c-nirf.jpg`}
                          className="w-8 h-8"
                          alt="NIRF"
                        />
                      </>
                    )}
                  </div>

                  {/* BUTTON */}
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
            );
          })}
        </div>

      </div>
    </div>
  );
}