import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const CreateProduct = () => {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    price: '',
    status: 'Disponible',
    expiration: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('userInfo'))?.token;

      await axios.post(
        `${BACKEND_URL}/api/products`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/products');
    } catch (error) {
      alert('Error creating product');
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="code"
          placeholder="código"
          value={form.code}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Nombre Producto"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción producto"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="presentation"
          placeholder="Presentación"
          value={form.presentation}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="UM"
          placeholder="UM"
          value={form.UM}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={form.quantity}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Precio Unidad"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="expiration"
          placeholder="Precio Unidad"
          value={form.expiration}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Disponible">Disponible</option>
          <option value="Inventario Agotado">Inventario Agotado</option>
          <option value="En Tránsito">En Tránsito</option>
          <option value="Descontinuado">Descontinuado</option>

        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
