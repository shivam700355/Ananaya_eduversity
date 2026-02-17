import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600">
          We are a team dedicated to building great online educational platform.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full">
              <img
                className="h-full w-full object-cover"
                aria-hidden="true"
                src="src/assets/bng_1.png"
              ></img>
            </div>
            <h3 className="text-xl font-medium text-gray-800">
              Divyanshi Patwa
            </h3>
            <p className="text-blue-500">CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full">
              <img
                class="h-full w-full object-cover"
                aria-hidden="true"
                src="src/assets/bng_2.jpg"
              ></img>
            </div>
            <h3 className="text-xl font-medium text-gray-800">Satyam Singh</h3>
            <p className="text-blue-500">Java Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full">
              <img
                class="h-full w-full object-cover"
                aria-hidden="true"
                src="src/assets/bng_3.jpg"
              ></img>
            </div>
            <h3 className="text-xl font-medium text-gray-800">Gaurav Gupta</h3>
            <p className="text-blue-500">Backend Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
