import React, { useState } from "react";

export default function CreateOrderForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    product: "",
    code: "",
    presentation: "",
    description: "",
    unit: "",
    cost: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Aquí llamas a tu función del backend
    setFormData({
      product: "",
      code: "",
      presentation: "",
      description: "",
      unit: "",
      cost: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Crear Nueva Orden
        </h2>

        {/* Producto */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Producto</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nombre del producto"
            required
          />
        </div>

        {/* Código */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Código</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Código del producto"
            required
          />
        </div>

        {/* Presentación */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Presentación</label>
          <input
            type="text"
            name="presentation"
            value={formData.presentation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ej. Caja, Botella, Blíster"
            required
          />
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Breve descripción"
            required
          />
        </div>

        {/* Unidad de medida */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Unidad de medida</label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ej. ml, g, unidades"
            required
          />
        </div>

        {/* Costo */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-1">Costo</label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Costo en $"
            required
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Crear Orden
        </button>
      </form>
    </div>
  );
}
