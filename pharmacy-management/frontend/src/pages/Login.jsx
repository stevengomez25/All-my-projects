import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Header from '../components/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/users/profile');
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <>
      <Header />
      <div
        className="h-[80vh] flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/01/98/81/40/360_F_198814073_1Ou5wprYWhldGzS6AWzPuSvx4L9E2TEt.jpg')", // Cambia esto según tu fondo
        }}
      >

        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-lg rounded-xl p-10 shadow-lg w-full max-w-md text-black ml-3"
        >
          <h2 className="text-3xl font-bold mb-6 text-center ">Iniciar Sesión</h2>

          {error && <p className="text-red-300 mb-4 text-sm text-center">{error}</p>}

          <div className="mb-4 ">
            <label className="block text-sm mb-1 ">Email</label>
            <div className="flex items-center border-b border-white rounded-lg py-2 bg-blue-300 ">
              <FaEnvelope className="m-2" />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="bg-transparent outline-none w-full text-white placeholder-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Contraseña</label>
            <div className="flex items-center border-b border-white rounded-lg py-2 bg-blue-300">
              <FaLock className="m-2" />
              <input
                type="password"
                placeholder="Contraseña"
                className="bg-transparent outline-none w-full text-white placeholder-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Recordar
            </label>
            <a href="/forgot-password" className="hover:underline">
              Olvidé mi contraseña
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Acceder
          </button>

          <p className="mt-6 text-center text-sm">
            ¿No tiene cuenta?
            <a href="/register" className="font-semibold underline ml-1">
              Crear una
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
