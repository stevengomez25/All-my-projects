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
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center flex-col md:flex-row">
      <div>
        <Link to="/" className="font-bold text-lg">SAIF</Link>
      </div>

      <div className="space-x-4">
        {userInfo && (
          <>
            <Link to="/create-product" className="hover:underline ">
              Agregar Producto
            </Link>
            <Link to="/orders" className='hover:underline'>
              Ordenes
            </Link>
          </>
        )}
        {userInfo ? (
          <>
            <Link to='/providers' className='over:underline'>Proveedores</Link>
            <Link to="/users/profile" className='over:underline'>Perfil</Link>
            <Link to="/products" className="hover:underline">Productos</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Cerrar Sesión
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
