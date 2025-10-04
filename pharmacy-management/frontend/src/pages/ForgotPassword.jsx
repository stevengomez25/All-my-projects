import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;



const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URL}/api/users/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong');
        return;
      }

      setMessage('Check your email for password reset instructions');
      setError('');
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <>
    <Header />
    <div className="flex items-center justify-start h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/98/81/40/360_F_198814073_1Ou5wprYWhldGzS6AWzPuSvx4L9E2TEt.jpg)' }}>
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md text-black ml-3 ">
        <h2 className="text-2xl font-bold mb-4 text-center">¿Olvidaste tu contraseña?</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder='correo electrónico'
            className="w-full p-2 rounded-lg mb-4 bg-blue-300 text-black border-b border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 ">
            Enviar enlace de recuperación
          </button>
        </form>
        <button onClick={() => navigate('/login')} className="mt-4 text-sm underline hover:text-gray-200">Volver al login</button>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
