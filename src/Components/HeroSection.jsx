export default function HeroSection() {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "Google",
      image: "src/assets/bng_2.jpg",
    },
    {
      id: 2,
      name: "Priya Verma",
      company: "Microsoft",
      image: "src/assets/bng_1.png",
    },
    {
      id: 3,
      name: "Amit Singh",
      company: "Amazon",
      image: "src/assets/bng_3.jpg",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      company: "Infosys",
      image: "src/assets/bng_1.png",
    },


    {
      id: 5,
      name: "Ajit Gupta",
      company:"HCL",
      image:"src/assets/bng_2.jpg",
    }
  ];
  const duplicatedStudents = [...students, ...students];

  return (
    <section className="bg-[#071a2f] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400">
          999+
        </h1>

        <div className="mt-4 inline-block bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold">
          Students ne Chuna
        </div>

        <p className="mt-6 text-lg text-gray-300">
          Sahi Course, Sahi University aur Career Path
        </p>

        {/* Student Cards */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {duplicatedStudents.map((student, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white text-black rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="h-20 w-20 mx-auto rounded-full object-cover mb-4"
              />

              <p className="font-semibold text-md">
                {student.name}
              </p>

              <p className="text-sm text-gray-600">
                {student.company}
              </p>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
