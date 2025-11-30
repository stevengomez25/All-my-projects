import { useAuth } from "../context/AuthContext";

export default function AdminPanel() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {user?.name}. You have admin privileges.</p>
    </div>
  );
}
