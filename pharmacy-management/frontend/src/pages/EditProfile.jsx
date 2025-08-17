import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUser) {
      setUser(storedUser);
      setUsername(storedUser.username);
      setEmail(storedUser.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = user.token;

    try {
      const res = await fetch(`http://localhost:5000/api/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ username, email })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Error updating profile');

      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/profile');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border shadow rounded">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
