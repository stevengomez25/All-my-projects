import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);

    if (res.success) {
      alert("Logged in!");
     Navigate('/');
    } else {
      setMessage(res.message || "Error logging in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

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

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-lg 
              bg-blue-600 text-white font-semibold 
              hover:bg-blue-700 transition
            "
          >
            Login
          </button>
        </form>
        <button className="m-2" ><a href="/"><FaRegArrowAltCircleLeft />volver</a></button>

        {/* Message */}
        {message && (
          <p
            className="
              mt-4 text-center 
              text-sm font-medium
              text-red-600
            "
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
