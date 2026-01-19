import React, { useState, useContext } from "react";
import { useParams } from "react-router";
import useServices from "../Hooks/useServices";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import SnowSpinner from "../Components/SnowSpinner"; // import spinner

const ServiceDetails = () => {
  const { id } = useParams();
  const { services, loading } = useServices();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  const [btnLoading, setBtnLoading] = useState(false); // button spinner state

  if (loading) return <p className="text-center py-10">Loading...</p>;

  const service = services.find((s) => s.serviceId === parseInt(id));

  if (!service) return <p className="text-center py-10">Service not found</p>;

  const {
    serviceName,
    description,
    image,
    price,
    rating,
    providerName,
    slotsAvailable,
  } = service;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookNow = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields!");
      return;
    }

    setBtnLoading(true); // show spinner
    setTimeout(() => {
      toast.success(`🎉 ${serviceName} booked successfully!`);
      setFormData({ name: "", email: "" });
      setBtnLoading(false); // hide spinner
    }, 1000); // simulate API call delay
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 my-10">
      <title>WarmPaws | service</title>
      <img
        src={image}
        alt={serviceName}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{serviceName}</h1>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="font-semibold mb-2">Price: ${price}</p>
      <p className="font-semibold mb-2">Rating: {rating}⭐</p>
      <p className="mb-2">Provider: {providerName}</p>
      <p className="mb-8">Slots Available: {slotsAvailable}</p>

      {/* Book Service Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Book This Service</h2>
        <form onSubmit={handleBookNow} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition flex justify-center items-center w-full"
            disabled={btnLoading}
          >
            {btnLoading ? <SnowSpinner /> : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
