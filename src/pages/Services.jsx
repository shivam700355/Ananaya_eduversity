import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            Online Courses
          </h2>
          <p className="text-gray-600">
            We provide high-quality online courses for students across various
            fields.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            Career Guidance
          </h2>
          <p className="text-gray-600">
            Get expert advice to choose the right university and right course.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            Distance Learning
          </h2>
          <p className="text-gray-600">
            Flexible and affordable distance learning programs for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
