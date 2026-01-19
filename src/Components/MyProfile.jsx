import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    // Validation
    if (!name.trim()) {
      toast.error("Name cannot be empty!");
      return;
    }

    if (photoURL && !isValidUrl(photoURL)) {
      toast.error("Invalid Photo URL!");
      return;
    }

    setLoading(true);
    try {
      await updateProfile(user, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      toast.error(err.message || "Failed to update profile");
    }
    setLoading(false);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">My Profile</h2>

        <div className="flex flex-col items-center gap-4">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-blue-300"
          />

          {editing ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Full Name"
              />
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Photo URL"
              />
              <button
                onClick={handleUpdateProfile}
                disabled={loading}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
              <button
                onClick={() => setEditing(false)}
                className="text-gray-700 underline mt-2"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="text-xl font-medium text-gray-700">
                {user?.displayName || "No Name"}
              </p>
              <p className="text-gray-500">{user?.email}</p>
              <button
                onClick={() => setEditing(true)}
                className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                Update Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
