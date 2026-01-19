import React, { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    if (!password) {
      toast.error("Please enter your password!");
      return;
    }

    try {
      setLoading(true);
      await loginUser(email, password);
      toast.success("Login Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        toast.error("User not found! Please register first.");
      } else if (err.code === "auth/invalid-credential") {
        toast.error("Incorrect password! Please try again.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address!");
      } else if (err.code === "auth/user-disabled") {
        toast.error("This user has been disabled.");
      } else {
        toast.error(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await googleSignIn();
      toast.success("Google Login Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        toast.error("Google login popup closed by user.");
      } else if (err.code === "auth/cancelled-popup-request") {
        toast.error("Google login cancelled. Try again.");
      } else {
        toast.error(err.message || "Google login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-blue-200 via-blue-500 to-white overflow-hidden">
      {/* Floating particles background */}
      <title>WarmPaws | Login</title>
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

      {/* Login Card */}
      <div className="z-10 max-w-md w-full p-8 bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email Field */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <Link
              to="/forgot-password"
              state={{ email }}
              className="text-sm text-blue-700 font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500/80 text-white py-3 rounded-lg font-semibold transition ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600/90"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center my-4 text-blue-900 font-medium">or</p>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className={`bg-red-500/80 text-white py-3 w-full rounded-lg font-semibold transition ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-red-600/90"
          }`}
        >
          {loading ? "Please wait..." : "Login with Google"}
        </button>

        {/* Register Link */}
        <p className="text-center text-blue-900 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* Background Animation */}
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

export default Login;
