import React, { useState } from "react";
import { useLocation } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);

  const handleReset = async () => {
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      // Open Gmail
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address!");
      } else {
        toast.error("Failed to send reset email. Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-200 via-blue-500 to-white">
      <div className="z-10 max-w-md w-full p-8 bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Reset Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg border border-white/30 bg-white/40 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full mb-4"
        />

        <button
          onClick={handleReset}
          className="bg-blue-500/80 text-white py-3 w-full rounded-lg font-semibold hover:bg-blue-600/90"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
