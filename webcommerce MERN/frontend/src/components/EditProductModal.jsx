import { useState, useEffect } from "react";
// ASUME que crearás esta función de API
import { updateProduct } from "../api/products";

// Recibe el objeto del producto y las funciones de control
export default function EditProductModal({ close, reload, productToEdit }) {
  // 1. Estados Iniciales: Cargar los datos simples del producto
  const [form, setForm] = useState({
    name: productToEdit.name || "",
    code: productToEdit.code || "",
    cost: productToEdit.cost || 0,
    description: productToEdit.description || "",
    image: productToEdit.image || "",
    // stock simple ya no se usa si gestionamos por variantes
    // Los campos 'availableSizes' y 'availableColors' se manejan por separado
  });

  // 2. Estados para listas dinámicas (cargando datos existentes)
  const [availableSizes, setAvailableSizes] = useState(productToEdit.availableSizes || []);
  const [availableColors, setAvailableColors] = useState(productToEdit.availableColors || []);

  // Estados temporales para añadir nuevos ítems
  const [newSizeData, setNewSizeData] = useState({ sizeName: "", quantity: 0 });
  const [newColorData, setNewColorData] = useState({ colorName: "", quantity: 0 });

  const [message, setMessage] = useState("");

  // Utilizar useEffect para sincronizar si la prop productToEdit cambia (útil en casos complejos)
  // aunque para un modal simple el estado inicial es suficiente.
  useEffect(() => {
    setForm({
      name: productToEdit.name || "",
      code: productToEdit.code || "",
      cost: productToEdit.cost || 0,
      description: productToEdit.description || "",
      image: productToEdit.image || "",
    });
    setAvailableSizes(productToEdit.availableSizes || []);
    setAvailableColors(productToEdit.availableColors || []);
  }, [productToEdit]);


  // --- Funciones de Manejo General ---
  const handleChange = (e) => {
    const value = e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };
  
  // --- Funciones de Tallas (Size) con Stock ---

  const handleNewSizeChange = (e) => {
    const value = e.target.name === 'quantity'
      ? parseInt(e.target.value, 10) || 0
      : e.target.value;
    setNewSizeData({ ...newSizeData, [e.target.name]: value });
  };

  const handleAddSize = () => {
    const { sizeName, quantity } = newSizeData;
    const trimmedSize = sizeName.trim().toUpperCase();

    if (trimmedSize && quantity >= 0) {
      const existingSize = availableSizes.find(s => s.sizeName === trimmedSize);
      if (!existingSize) {
        setAvailableSizes([...availableSizes, { sizeName: trimmedSize, quantity: quantity }]);
        setNewSizeData({ sizeName: "", quantity: 0 });
      } else {
        setMessage(`La talla ${trimmedSize} ya existe. Edita su stock directamente en la lista.`);
      }
    }
  };

  const handleRemoveSize = (sizeNameToRemove) => {
    setAvailableSizes(availableSizes.filter(s => s.sizeName !== sizeNameToRemove));
  };
  
  // Función para editar el stock de una talla existente directamente
  const handleEditSizeQuantity = (sizeName, newQuantity) => {
    setAvailableSizes(availableSizes.map(s => 
      s.sizeName === sizeName ? { ...s, quantity: parseInt(newQuantity, 10) || 0 } : s
    ));
  };


  // --- Funciones de Colores con Stock ---

  const handleNewColorChange = (e) => {
    const value = e.target.name === 'quantity'
      ? parseInt(e.target.value, 10) || 0
      : e.target.value;
    setNewColorData({ ...newColorData, [e.target.name]: value });
  };

  const handleAddColor = () => {
    const { colorName, quantity } = newColorData;
    const trimmedColor = colorName.trim();

    if (trimmedColor && quantity >= 0) {
      const existingColor = availableColors.find(c => c.colorName.toUpperCase() === trimmedColor.toUpperCase());
      if (!existingColor) {
        setAvailableColors([...availableColors, { colorName: trimmedColor, quantity: quantity }]);
        setNewColorData({ colorName: "", quantity: 0 });
      } else {
        setMessage(`El color ${trimmedColor} ya existe. Edita su stock directamente en la lista.`);
      }
    }
  };

  const handleRemoveColor = (colorNameToRemove) => {
    setAvailableColors(availableColors.filter(c => c.colorName !== colorNameToRemove));
  };
  
  // Función para editar el stock de un color existente directamente
  const handleEditColorQuantity = (colorName, newQuantity) => {
    setAvailableColors(availableColors.map(c => 
      c.colorName === colorName ? { ...c, quantity: parseInt(newQuantity, 10) || 0 } : c
    ));
  };

  // --- Función de Envío Final ---

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 3. Sincronizar: Incluir los arrays editados al objeto de envío
      const productData = {
        ...form,
        availableSizes: availableSizes,
        availableColors: availableColors,
      };

      const data = await updateProduct(productToEdit._id, productData); // Usamos productData

      if (data.ok) {
        setMessage("Product updated successfully!");
        reload();
        setTimeout(() => close(), 800);
      } else {
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

          {/* CAMPOS PRINCIPALES */}
          <input name="name" placeholder="Product Name" value={form.name || ""} onChange={handleChange} className="w-full border p-2 rounded-md" />
          <input name="code" placeholder="Product Code" value={form.code || ""} onChange={handleChange} className="w-full border p-2 rounded-md" />
          <input name="cost" type="number" placeholder="Cost" value={form.cost || 0} onChange={handleChange} className="w-full border p-2 rounded-md" />
          
          {/* Eliminamos el input 'stock' simple */}
          {/* Eliminamos el input 'size' simple */}

          <textarea name="description" placeholder="Description" rows={3} value={form.description || ""} onChange={handleChange} className="w-full border p-2 rounded-md" />

          {/* === CAMPO DINÁMICO DE TALLAS CON STOCK (EDITAR/AÑADIR) === */}
          <div className="border border-gray-300 p-3 rounded-md bg-gray-50">
            <label className="block text-base font-semibold text-gray-800 mb-2">📐 Tallas y Stock por Talla:</label>

            {/* Lista de Tallas Añadidas/Existentes */}
            <div className="flex flex-col gap-2 max-h-40 overflow-y-auto mb-3">
              {availableSizes.map((s) => (
                <div
                  key={s.sizeName}
                  className="flex justify-between items-center bg-white border border-dashed text-gray-800 text-sm px-3 py-1 rounded-md shadow-sm"
                >
                  <span className="font-medium">Talla: {s.sizeName}</span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={s.quantity}
                      min="0"
                      onChange={(e) => handleEditSizeQuantity(s.sizeName, e.target.value)}
                      className="w-16 border p-1 rounded-md text-right"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSize(s.sizeName)}
                      className="text-red-500 hover:text-red-700 font-bold text-lg"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input para AÑADIR NUEVA TALLA */}
            <div className="flex space-x-2 items-end pt-2 border-t border-gray-200">
              <div className="flex-grow">
                <input
                  type="text"
                  name="sizeName"
                  value={newSizeData.sizeName}
                  onChange={handleNewSizeChange}
                  placeholder="Nueva Talla (Ej: XS)"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="w-24">
                <input
                  type="number"
                  name="quantity"
                  value={newSizeData.quantity}
                  onChange={handleNewSizeChange}
                  placeholder="Stock"
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
          </div>
          {/* ========================================================= */}
          
          {/* === CAMPO DINÁMICO DE COLORES CON STOCK (EDITAR/AÑADIR) === */}
          <div className="border border-gray-300 p-3 rounded-md bg-gray-50">
            <label className="block text-base font-semibold text-gray-800 mb-2">🎨 Colores y Stock por Color:</label>
            
            {/* Lista de Colores Añadidos/Existentes */}
            <div className="flex flex-col gap-2 max-h-40 overflow-y-auto mb-3">
              {availableColors.map((c) => (
                <div
                  key={c.colorName}
                  className="flex justify-between items-center bg-white border border-dashed text-gray-800 text-sm px-3 py-1 rounded-md shadow-sm"
                >
                  <span className="font-medium">Color: {c.colorName}</span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={c.quantity}
                      min="0"
                      onChange={(e) => handleEditColorQuantity(c.colorName, e.target.value)}
                      className="w-16 border p-1 rounded-md text-right"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(c.colorName)}
                      className="text-red-500 hover:text-red-700 font-bold text-lg"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Input para AÑADIR NUEVO COLOR */}
            <div className="flex space-x-2 items-end pt-2 border-t border-gray-200">
              <div className="flex-grow">
                <input
                  type="text"
                  name="colorName"
                  value={newColorData.colorName}
                  onChange={handleNewColorChange}
                  placeholder="Nuevo Color (Ej: Amarillo)"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="w-24">
                <input
                  type="number"
                  name="quantity"
                  value={newColorData.quantity}
                  onChange={handleNewColorChange}
                  placeholder="Stock"
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
          </div>
          {/* ========================================================= */}

          <input name="image" placeholder="Image URL (optional)" value={form.image || ""} onChange={handleChange} className="w-full border p-2 rounded-md" />

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mt-6">
            Update Product
          </button>
        </form>

        {message && (
          <p className={`text-center mt-3 font-medium ${message.includes('Error') || message.includes('existe') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>
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