import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-100 to-blue-300 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-700 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
        Oops! Page Not Found
      </h2>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
