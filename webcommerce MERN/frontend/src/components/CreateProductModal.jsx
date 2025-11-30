import { useState } from "react";
import { createProduct } from "../api/products";

export default function CreateProductModal({ close, reload }) {
  const [form, setForm] = useState({
    name: "",
    code: "",
    cost: "",
    description: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await createProduct(form);

      if (data.ok) {
        setMessage("Product created successfully!");
        reload();
        setTimeout(() => close(), 800);
      } else {
        setMessage(data.message || "Error creating product");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 animate-fadeIn">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Create Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="code"
            placeholder="Product Code"
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="cost"
            type="number"
            placeholder="Cost"
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="stock"
            type="number"
            placeholder="stock"
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={3}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="image"
            placeholder="Image URL (optional)"
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Create
          </button>
        </form>

        {message && (
          <p className="text-center mt-3 text-gray-700 font-medium">{message}</p>
        )}

        <button
          onClick={close}
          className="mt-4 text-center w-full text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
