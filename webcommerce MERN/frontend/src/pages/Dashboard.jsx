import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div
        className="
          bg-white 
          p-8 
          md:p-12 
          rounded-xl 
          shadow-2xl 
          text-center 
          max-w-lg 
          w-full 
          transform 
          hover:scale-[1.02] 
          transition 
          duration-300
        "
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 tracking-tight">
          Hello there, <span className="text-purple-700">{user?.name}!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          You've successfully logged in and accessed your personalized dashboard. 🎉
        </p>

        {/* Optional: Add a cute animated badge for status */}
        <div className="mt-6 flex justify-center">
          <span
            className="
              inline-flex 
              items-center 
              px-4 
              py-2 
              bg-green-100 
              text-green-800 
              text-sm 
              font-semibold 
              rounded-full 
              shadow-md 
              animate-pulse
            "
          >
            <svg
              className="w-3 h-3 mr-2 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" />
            </svg>
            Status: Active
          </span>
        </div>
        <button className="px-4 mx-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <a href="/logout">Log out</a> 
        </button>
        <button className="px-4 mx-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <a href="/admin">Products Inventory</a>
        </button>
        <button className="px-4 mx-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <a href="/orders">Orders</a>
        </button>
      </div>
    </div>
  );
}