import img1 from "../assets/bng_1.png";
import img2 from "../assets/bng_2.jpg";
import img3 from "../assets/bng_3.jpg";

export default function HeroSection() {
  const students = [
    { id: 1, name: "Rahul Sharma", company: "Google", image: img1 },
    { id: 2, name: "Priya Verma", company: "Microsoft", image: img2 },
    { id: 3, name: "Amit Singh", company: "Amazon", image: img3 },
    { id: 4, name: "Sneha Kapoor", company: "Infosys", image: img1 },
    { id: 5, name: "Ajit Gupta", company: "HCL", image: img2 },
  ];

  const duplicated = [...students, ...students];

  return (
    <section className="bg-[#071a2f] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400">
          999+
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Students Placed Successfully
        </p>

        {/* LEFT TO RIGHT */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-6 w-max animate-marqueeRight">
            {duplicated.map((student, index) => (
              <div
                key={`ltr-${index}`}
                className="min-w-[220px] bg-white text-black rounded-xl p-5 shadow-lg"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="h-20 w-20 mx-auto rounded-full object-cover mb-4"
                />
                <p className="font-semibold">{student.name}</p>
                <p className="text-sm text-gray-600">{student.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT TO LEFT */}
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-6 w-max animate-marqueeLeft">
            {duplicated.map((student, index) => (
              <div
                key={`rtl-${index}`}
                className="min-w-[220px] bg-blue-500 text-white rounded-xl p-5 shadow-lg"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="h-20 w-20 mx-auto rounded-full object-cover mb-4"
                />
                <p className="font-semibold">{student.name}</p>
                <p className="text-sm opacity-80">{student.company}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}