import { useEffect, useState } from 'react';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo?.token) return setError('Unauthorized');

      try {
        const res = await fetch(`${BACKEND_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!user) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border shadow rounded">
      <h2 className="text-xl font-bold mb-4">Bienvenid@ {user.username}</h2>
      <p><strong>Usuario:</strong> {user.username}</p>
      <p><strong>Correo Electrónico:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.role}</p>
    </div>
  );
};

export default Profile;
