import { useState, useContext, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "/logo.png";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.warning("Log Out is successful");
        setDropdownOpen(false);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-60 bg-white bg-linear-to-r from-blue-200 via-white to-sky-100 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center justify-center gap-2">
            <img className="w-10" src={logo} alt="Logo" />
            <Link to="/" className="text-2xl font-bold text-gray-800">
              WarmPaws
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="text-gray-700 hover:text-blue-500"
            >
              Services
            </NavLink>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* 👇 Hover name show */}
                <div
                  className="relative group flex items-center"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer border border-blue-400 hover:scale-105 transition"
                  />
                  {/* hover name */}
                  <span className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 text-sm bg-blue-600 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {user.displayName || "User"}
                  </span>
                </div>

                {dropdownOpen && (
                  <div className="absolute -right-20 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                    <div className="px-4 py-3 border-b text-gray-800">
                      <p className="text-sm truncate">{user.displayName}</p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-800">
                      <NavLink
                        to="/my-profile"
                        onClick={() => setDropdownOpen(false)}
                      >
                        My Profile
                      </NavLink>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white text-gray-800"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                className="text-gray-700 border rounded-xl px-5 hover:text-blue-500"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 space-y-1 bg-white shadow-md">
          <NavLink to="/" className="block text-gray-700 hover:text-blue-500">
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="block text-gray-700 hover:text-blue-500"
          >
            Services
          </NavLink>

          {user ? (
            <div className="flex flex-col space-y-2 p-2 border rounded bg-gray-100">
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-gray-800 text-sm truncate">
                    {user.displayName}
                  </span>
                  <span className="text-gray-600 text-xs truncate">
                    {user.email}
                  </span>
                </div>
              </div>
              <NavLink
                to="/my-profile"
                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-sm text-center"
              >
                My Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="block text-gray-700 hover:text-blue-500"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
