import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.name, // tu backend espera "username"
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Error al registrar usuario');
        return;
      }

      alert('Usuario registrado con éxito');
      navigate('/login');
    } catch (err) {
      alert('Error de conexión con el servidor');
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-start h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/98/81/40/360_F_198814073_1Ou5wprYWhldGzS6AWzPuSvx4L9E2TEt.jpg)' }}>
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md text-black ml-3">
          <h2 className="text-2xl font-bold mb-4 text-center">Crear cuenta</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder='Nombre'
              className="w-full p-2 rounded mb-4 text-black bg-blue-300 border-b border-white"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder='Correo Electrónico'
              className="w-full p-2 rounded mb-4 text-black bg-blue-300 border-b border-white"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label className="block mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder='Contraseña'
              className="w-full p-2 rounded mb-4  text-black bg-blue-300 border-b border-white"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200">
              Registrarse
            </button>
          </form>
          <button onClick={() => navigate('/login')} className="mt-4 text-sm underline hover:text-gray-200">¿Ya tienes cuenta? Inicia sesión</button>
        </div>
      </div>
    </>

  );
};

export default Register;
