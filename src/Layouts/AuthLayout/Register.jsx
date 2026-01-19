import React, { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!validatePassword(password)) return;

    try {
      // ✅ Step 1: Create user
      const result = await createUser(email, password);

      // ✅ Step 2: Wait for user and update profile safely
      if (result.user) {
        await updateUserProfile(name, photoURL);
      }

      toast.success("Registration Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      // Handle Firebase errors
      switch (err.code) {
        case "auth/email-already-in-use":
          toast.error("This email is already in use. Try logging in.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email address!");
          break;
        case "auth/weak-password":
          toast.error("Password is too weak. Minimum 6 characters required.");
          break;
        default:
          toast.error(err.message || "Something went wrong. Please try again.");
      }
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleSignIn();
      toast.success("Google Registration Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        toast.error("Google login popup closed by user.");
      } else if (err.code === "auth/cancelled-popup-request") {
        toast.error("Google login cancelled. Try again.");
      } else {
        toast.error(err.message || "Google login failed. Please try again.");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-blue-200 via-blue-500 to-white overflow-hidden ">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="z-10 max-w-md w-full p-8 bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg my-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Sign Up
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="p-3 rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-blue-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-3 w-full rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-blue-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="bg-blue-500/80 text-white py-3 rounded-lg hover:bg-blue-600/90 transition font-semibold">
            Sign Up
          </button>
        </form>

        <p className="text-center my-4 text-blue-900 font-medium">or</p>

        <button
          onClick={handleGoogleRegister}
          className="bg-red-500/80 text-white py-3 w-full rounded-lg hover:bg-red-600/90 transition font-semibold mb-4"
        >
          Sign Up with Google
        </button>

        <p className="text-center text-blue-900">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
