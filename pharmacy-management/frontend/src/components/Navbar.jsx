// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <div>
        <Link to="/" className="font-bold text-lg">Pharmacy App</Link>
      </div>

      <div className="space-x-4">
        {userInfo && (
          <>
            <Link to="/create-product" className="hover:underline">
              Add Product
            </Link>
            <Link to="/orders" className='hover:underline'>
              Orders
            </Link>
          </>
        )}
        {userInfo ? (
          <>
            <Link to="/users/profile" className='over:underline'>Profile</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
