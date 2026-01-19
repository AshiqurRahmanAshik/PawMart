import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BiStar } from "react-icons/bi";
import Hero from "../Components/Hero";
import useServices from "../Hooks/useServices";
import MeetOurVets from "../Components/MeetOurVets";
import SnowSpinner from "../Components/SnowSpinner";
import WhyChooseUs from "../Components/WhyChooseUs";
import { FaCat, FaPeopleCarry } from "react-icons/fa";
import WinterCareTips from "../Components/WinterCareTips";

const Home = () => {
  const { services, loading } = useServices();
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const bestServices = services.slice(0, 6);

  if (loading) return <SnowSpinner />;

  const handleBookNow = (id) => {
    setBtnLoading(true); // show spinner
    // optional: small delay to show spinner
    setTimeout(() => {
      navigate(`/services/${id}`);
    }, 300);
  };

  return (
    <div>
      <title>WarmPaws | Home</title>
      <section>
        <Hero />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Popular Winter Care Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestServices.map((service) => (
              <div
                key={service.serviceId}
                className="bg-white rounded-xl shadow hover:shadow-2xl transform hover:scale-105 transition-all duration-800 ease-in-out p-4"
              >
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {service.serviceName}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-500">
                    ${service.price}
                  </span>
                  <span className="text-yellow-500 font-semibold flex items-center justify-center gap-1">
                    <BiStar size={20} />
                    {service.rating}
                  </span>
                </div>
                <div className="w-full flex items-center text-center">
                  <button
                    onClick={() => handleBookNow(service.serviceId)}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    {btnLoading ? <SnowSpinner /> : "View Details"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-full flex justify-center">
            <Link
              to="/services"
              className="my-20 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section>
        <MeetOurVets />
      </section>

      <section>
        <WhyChooseUs />
      </section>
      <section>
        <WinterCareTips />
      </section>
    </div>
  );
};

export default Home;
