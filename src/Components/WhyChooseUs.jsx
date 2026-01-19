import React from "react";
import { FaClock, FaHandshake, FaStar, FaVideo } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaHandshake />,
      title: "Friendly Service",
      desc: "Our staff treats every pet like family, ensuring a warm and caring experience.",
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      icon: <FaStar />,
      title: "Top Quality Products",
      desc: "We offer only trusted brands of pet food, toys, and accessories.",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: <FaClock />,
      title: "Quick & Reliable Delivery",
      desc: "Your pet’s essentials delivered right to your doorstep—fast and safe.",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: <FaVideo />,
      title: "Pet Care Guidance",
      desc: "Get expert advice on grooming, training, and keeping your pets happy.",
      color: "bg-pink-100 text-pink-500",
    },
  ];

  return (
    <section className="w-11/12 mx-auto max-w-6xl my-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Why Choose <span className="text-blue-600">Us?</span>
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 bg-white shadow-xl rounded-3xl text-center transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl opacity-0 animate-fadeIn`}
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: "forwards",
            }}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-full ${feature.color} text-3xl`}
            >
              {feature.icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* TailwindCSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
