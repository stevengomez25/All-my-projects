import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  // Still checking token
  if (loading) return <p>Loading...</p>;

  // Not logged in
  if (!user) return <Navigate to="/login" replace />;

  // Logged in but not admin
  if (user.role !== "admin") return <Navigate to="/not-authorized" replace />;

  // User is admin → access granted
  return children;
}
