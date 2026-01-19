import React, { useState } from "react";
import useServices from "../Hooks/useServices";
import { useNavigate } from "react-router";
import { BiStar } from "react-icons/bi";
import "aos/dist/aos.css";
import SnowSpinner from "../Components/SnowSpinner";

const Services = () => {
  const { services, loading } = useServices();
  const [btnLoading, setBtnLoading] = useState(false);
  const [loadingServiceId, setLoadingServiceId] = useState(null);
  const navigate = useNavigate();

  // 🌀 Show spinner while data loading initially
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <SnowSpinner />
      </div>
    );
  }

  // 🎯 Handle Book Now click
  const handleBookNow = (id) => {
    setBtnLoading(true);
    setLoadingServiceId(id);

    // simulate small delay before navigation
    setTimeout(() => {
      navigate(`/services/${id}`);
      setBtnLoading(false);
      setLoadingServiceId(null);
    }, 800); // 0.8s smooth transition
  };

  return (
    <div className="relative">
      <title>WarmPaws | Services</title>
      {/* 🌀 Full-screen overlay spinner when booking */}
      {btnLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <SnowSpinner />
        </div>
      )}

      <section className="py-16 bg-gray-50 my-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Winter Care Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.serviceId}
                className="bg-white rounded-xl shadow hover:shadow-2xl transform hover:scale-105 transition-all duration-800 ease-in-out p-4 flex flex-col justify-between"
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
                  <span className="text-yellow-500 font-semibold flex items-center gap-1">
                    <BiStar size={20} />
                    {service.rating}
                  </span>
                </div>

                <button
                  onClick={() => handleBookNow(service.serviceId)}
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-60"
                  disabled={
                    btnLoading && loadingServiceId === service.serviceId
                  }
                >
                  {btnLoading && loadingServiceId === service.serviceId
                    ? "Loading..."
                    : "View Details"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
