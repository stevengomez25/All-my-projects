import { useAuth } from "../context/AuthContext";

export default function AdminPanel() {
  const { user } = useAuth();

  return (
    <div className="flex flex-row w-full justify-around my-2">
      <h1 className="px-4 py-2 bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-200 transition duration-300 flex items-center space-x-1">Admin Panel</h1>
      <button className="px-4 py-2 bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-200 transition duration-300 flex items-center space-x-1"><a href="/">Tienda</a></button>
      <p>Welcome, {user?.name}. You have admin privileges.</p>
    </div>
  );
}
