import { useState } from "react";
import { registerUser } from "../api/auth";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerUser(form);

    if (result.success) {
      setMessage("Account created successfully!");
    } else {
      setMessage(result.message || "Error registering");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="
              w-full p-3 rounded-lg 
              bg-gray-100 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              text-gray-800
            "
          />

          {/* Email */}
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="
              w-full p-3 rounded-lg 
              bg-gray-100 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              text-gray-800
            "
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="
              w-full p-3 rounded-lg 
              bg-gray-100 border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              text-gray-800
            "
          />

          {/* Submit button */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-lg 
              bg-blue-600 text-white font-semibold 
              hover:bg-blue-700 transition
            "
          >
            Register
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className="
              mt-4 text-center 
              text-sm font-medium
              text-green-600
            "
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
