import { useState } from "react";
import { createProduct } from "../api/products";

export default function CreateProductModal({ close, reload }) {
  // 1. Estado para el formulario principal (campos simples)
  const [form, setForm] = useState({
    name: "",
    code: "",
    cost: "",
    description: "",
    // stock (total) se elimina, ya que se maneja por talla/color
    image: "",
  });

  // 2. Estado para la lista dinámica de Tallas (Array de objetos {sizeName, quantity})
  const [availableSizes, setAvailableSizes] = useState([]);
  // Estado temporal para la nueva talla a agregar
  const [newSizeData, setNewSizeData] = useState({
    sizeName: "",
    quantity: 0
  });

  // 3. Estado para la lista dinámica de Colores (Array de objetos {colorName, quantity})
  const [availableColors, setAvailableColors] = useState([]);
  // Estado temporal para el nuevo color a agregar
  const [newColorData, setNewColorData] = useState({
    colorName: "",
    quantity: 0
  });

  const [message, setMessage] = useState("");

  // --- Funciones de Manejo General ---
  const handleChange = (e) => {
    // Manejo de inputs del formulario principal
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  // --- Funciones de Tallas con Stock ---

  const handleNewSizeChange = (e) => {
    const value = e.target.name === 'quantity'
      ? parseInt(e.target.value, 10) || 0
      : e.target.value;

    setNewSizeData({
      ...newSizeData,
      [e.target.name]: value
    });
  };

  const handleAddSize = () => {
    const { sizeName, quantity } = newSizeData;
    const trimmedSize = sizeName.trim().toUpperCase();

    if (trimmedSize && quantity >= 0) {
      const existingSize = availableSizes.find(s => s.sizeName === trimmedSize);

      if (!existingSize) {
        setAvailableSizes([
          ...availableSizes,
          { sizeName: trimmedSize, quantity: quantity }
        ]);
        setNewSizeData({ sizeName: "", quantity: 0 });
      } else {
        setMessage(`La talla ${trimmedSize} ya ha sido agregada.`);
      }
    }
  };

  const handleRemoveSize = (sizeNameToRemove) => {
    setAvailableSizes(availableSizes.filter(s => s.sizeName !== sizeNameToRemove));
  };
  
  // --- Funciones de Colores con Stock ---

  const handleNewColorChange = (e) => {
    const value = e.target.name === 'quantity'
      ? parseInt(e.target.value, 10) || 0
      : e.target.value;

    setNewColorData({
      ...newColorData,
      [e.target.name]: value
    });
  };

  const handleAddColor = () => {
    const { colorName, quantity } = newColorData;
    const trimmedColor = colorName.trim();

    if (trimmedColor && quantity >= 0) {
      const existingColor = availableColors.find(c => c.colorName.toUpperCase() === trimmedColor.toUpperCase());

      if (!existingColor) {
        setAvailableColors([
          ...availableColors,
          { colorName: trimmedColor, quantity: quantity }
        ]);
        setNewColorData({ colorName: "", quantity: 0 });
      } else {
        setMessage(`El color ${trimmedColor} ya ha sido agregado.`);
      }
    }
  };

  const handleRemoveColor = (colorNameToRemove) => {
    setAvailableColors(availableColors.filter(c => c.colorName !== colorNameToRemove));
  };

  // --- Función de Envío Final ---

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (availableSizes.length === 0 && availableColors.length === 0) {
        setMessage("Debes agregar al menos una talla O un color con su respectivo stock.");
        return;
    }

    try {
      const productData = {
        ...form,
        // Enviamos los arrays de objetos, que Mongoose guardará como subdocumentos
        availableSizes: availableSizes,
        availableColors: availableColors,
      };

      const data = await createProduct(productData);

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

          {/* CAMPOS PRINCIPALES */}
          <input name="name" placeholder="Product Name" onChange={handleChange} className="w-full border p-2 rounded-md" />
          <input name="code" placeholder="Product Code" onChange={handleChange} className="w-full border p-2 rounded-md" />
          <input name="cost" type="number" placeholder="Cost" onChange={handleChange} className="w-full border p-2 rounded-md" />
          <textarea name="description" placeholder="Description" rows={3} onChange={handleChange} className="w-full border p-2 rounded-md" />
          
          {/* === CAMPO DINÁMICO DE TALLAS CON STOCK === */}
          <div className="border border-gray-300 p-3 rounded-md bg-gray-50">
            <label className="block text-base font-semibold text-gray-800 mb-2">📐 Tallas y Stock por Talla:</label>

            <div className="flex space-x-2 mb-3 items-end">
              <div className="flex-grow">
                <label className="text-xs text-gray-500 block">Talla (Ej: S, M)</label>
                <input
                  type="text"
                  name="sizeName"
                  value={newSizeData.sizeName}
                  onChange={handleNewSizeChange}
                  placeholder="Talla"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="w-24">
                <label className="text-xs text-gray-500 block">Stock</label>
                <input
                  type="number"
                  name="quantity"
                  value={newSizeData.quantity}
                  onChange={handleNewSizeChange}
                  placeholder="0"
                  min="0"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleAddSize}
                className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition h-[42px]"
              >
                ➕
              </button>
            </div>

            {/* Lista de Tallas Añadidas */}
            <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
              {availableSizes.map((s) => (
                <div
                  key={s.sizeName}
                  className="flex justify-between items-center bg-white border border-dashed text-gray-800 text-sm px-3 py-2 rounded-md shadow-sm"
                >
                  <span className="font-medium">
                    Talla: {s.sizeName} | Stock: {s.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSize(s.sizeName)}
                    className="text-red-500 hover:text-red-700 font-bold ml-4 text-lg"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            {availableSizes.length === 0 && (
              <p className="text-sm text-gray-500 italic mt-2 text-center">Añade al menos una talla con su stock.</p>
            )}
          </div>
          {/* ========================================================= */}
          
          {/* === CAMPO DINÁMICO DE COLORES CON STOCK === */}
          <div className="border border-gray-300 p-3 rounded-md bg-gray-50">
            <label className="block text-base font-semibold text-gray-800 mb-2">🎨 Colores y Stock por Color:</label>

            <div className="flex space-x-2 mb-3 items-end">
              <div className="flex-grow">
                <label className="text-xs text-gray-500 block">Color (Ej: Rojo, #00FF00)</label>
                <input
                  type="text"
                  name="colorName"
                  value={newColorData.colorName}
                  onChange={handleNewColorChange}
                  placeholder="Color"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="w-24">
                <label className="text-xs text-gray-500 block">Stock</label>
                <input
                  type="number"
                  name="quantity"
                  value={newColorData.quantity}
                  onChange={handleNewColorChange}
                  placeholder="0"
                  min="0"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleAddColor}
                className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition h-[42px]"
              >
                ➕
              </button>
            </div>

            {/* Lista de Colores Añadidos */}
            <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
              {availableColors.map((c) => (
                <div
                  key={c.colorName}
                  className="flex justify-between items-center bg-white border border-dashed text-gray-800 text-sm px-3 py-2 rounded-md shadow-sm"
                >
                  <span className="font-medium">
                    Color: {c.colorName} | Stock: {c.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveColor(c.colorName)}
                    className="text-red-500 hover:text-red-700 font-bold ml-4 text-lg"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            {availableColors.length === 0 && (
              <p className="text-sm text-gray-500 italic mt-2 text-center">Añade al menos un color con su stock.</p>
            )}
          </div>
          {/* ========================================================= */}
          
          <input name="image" placeholder="Image URL (optional)" onChange={handleChange} className="w-full border p-2 rounded-md" />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-6">
            Create Product
          </button>
        </form>

        {/* Mensaje de estado */}
        {message && (
          <p className={`text-center mt-3 font-medium ${message.includes('Error') || message.includes('ya ha sido agregada') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>
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