import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import MySwiper from "./MySwiper";
import Typewriter from "typewriter-effect/dist/core";
import "animate.css";
import { BorderBeam } from "@stianlarsen/border-beam";

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: ["Keep Your Pets Warm This Winter", "With Care and Comfort"],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
    });
  }, []);

  return (
    <>
      <section className="w-11/12 mx-auto my-20 rounded-xl bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1
              ref={typewriterRef}
              className="text-4xl md:text-5xl font-bold text-gray-800 h-20"
            ></h1>

            <p className="text-gray-600 text-lg md:text-xl">
              Discover cozy clothing, grooming tips, and expert care services
              for your furry friends.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
              {/* Explore Services Button */}
              <Link
                to="/services"
                className="relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-xl shadow-lg overflow-hidden group flex items-center justify-center w-full sm:w-auto"
              >
                <BorderBeam
                  size={80}
                  duration={8}
                  colors={["#4f46e5", "#22d3ee", "#facc15"]}
                  strokeWidth={8}
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
                />
                <span className="relative z-10 font-semibold text-lg text-center">
                  Explore Services
                </span>
              </Link>

              {/* Join Now Button */}
              <Link
                to="/services"
                className="relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-xl shadow-lg overflow-hidden group flex items-center justify-center w-full sm:w-auto"
              >
                <BorderBeam
                  size={80}
                  duration={10}
                  colors={["#facc15", "#22d3ee", "#4f46e5"]}
                  strokeWidth={8}
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
                />
                <span className="relative z-10 font-semibold text-lg text-center">
                  Book Now
                </span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center animate__animated animate__pulse animate__infinite animate__slower">
            <img
              src="https://i.ibb.co/Df0zCz2p/Orange-Yellow-Illustration-Pet-Shop-Presentation-1.png"
              alt="Cozy Pet"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <MySwiper />
    </>
  );
};

export default Hero;
