// WinterCareTips.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaSnowflake,
  FaThermometerHalf,
  FaBath,
  FaHeart,
} from "react-icons/fa";

const tips = [
  {
    icon: <FaThermometerHalf />,
    title: "Keep Warm",
    desc: "Provide cozy blankets and warm bedding for your pets.",
    color: "bg-red-100 text-red-500",
  },
  {
    icon: <FaBath />,
    title: "Groom Regularly",
    desc: "Brush their fur to avoid mats and maintain insulation.",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: <FaSnowflake />,
    title: "Avoid Cold Floors",
    desc: "Use rugs or heating pads to prevent cold paw pads.",
    color: "bg-purple-100 text-purple-500",
  },
  {
    icon: <FaHeart />,
    title: "Health Check",
    desc: "Monitor their health and check for signs of hypothermia.",
    color: "bg-green-100 text-green-500",
  },
];

const WinterCareTips = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12  ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Winter Care Tips for Pets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transform transition duration-500"
          >
            <div
              className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${tip.color}`}
            >
              {tip.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
