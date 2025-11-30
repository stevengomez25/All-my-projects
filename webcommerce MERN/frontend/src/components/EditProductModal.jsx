import { useState, useEffect } from "react";
// ASUME que crearás esta función de API
import { updateProduct } from "../api/products"; 

// Recibe el objeto del producto y las funciones de control
export default function EditProductModal({ close, reload, productToEdit }) {
  const [form, setForm] = useState(productToEdit); // Usar datos del producto como estado inicial
  const [message, setMessage] = useState("");

  // Usar useEffect si los datos iniciales pudieran cambiar, pero con un objeto
  // directo como prop, usar el estado inicial es suficiente.
  // Es crucial desestructurar los props directamente en el useState.

  const handleChange = (e) => {
    // Maneja los tipos de entrada (string para name, number para cost/stock)
    const value = e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Llama a la función de API para actualizar, incluyendo el _id del producto
      const data = await updateProduct(productToEdit._id, form); 

      if (data.ok) {
        setMessage("Product updated successfully!");
        reload(); // Recargar la lista de productos
        setTimeout(() => close(), 800);
      } else {
        // En caso de errores devueltos por la API
        setMessage(data.message || "Error updating product");
      }
    } catch (err) {
      setMessage("Server error during update");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 animate-fadeIn">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Edit Product: {productToEdit.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Los inputs usan el atributo 'value' para mostrar el estado actual del 'form' */}
          <input
            name="name"
            placeholder="Product Name"
            value={form.name || ""} 
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="code"
            placeholder="Product Code"
            value={form.code || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="cost"
            type="number"
            placeholder="Cost"
            value={form.cost || 0}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="stock"
            type="number"
            placeholder="Stock"
            value={form.stock || 0}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={3}
            value={form.description || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <input
            name="image"
            placeholder="Image URL (optional)"
            value={form.image || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Update Product
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