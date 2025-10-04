import { useState, useEffect } from "react";

const ModalEditProduct = ({ isOpen, onClose, product, onSave }) => {
  const [formData, setFormData] = useState(product || {});

  useEffect(() => {
    setFormData(product || {});
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

        {/* Campos según tu schema */}
        <input name="code" value={formData.code || ""} onChange={handleChange} placeholder="Code" className="w-full border p-2 rounded mb-3" />
        <input name="name" value={formData.name || ""} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded mb-3" />
        <textarea name="description" value={formData.description || ""} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded mb-3" />
        <input name="presentation" value={formData.presentation || ""} onChange={handleChange} placeholder="Presentation" className="w-full border p-2 rounded mb-3" />
        <input name="UM" value={formData.UM || ""} onChange={handleChange} placeholder="Unit of Measure" className="w-full border p-2 rounded mb-3" />
        <input type="number" name="quantity" value={formData.quantity || ""} onChange={handleChange} placeholder="Quantity" className="w-full border p-2 rounded mb-3" />
        <input type="number" name="price" value={formData.price || ""} onChange={handleChange} placeholder="Price" className="w-full border p-2 rounded mb-3" />
        <input type="date" name="expiration" value={formData.expiration || ""} onChange={handleChange} placeholder="Expiration" className="w-full border p-2 rounded mb-3" />

        
        <select name="status" value={formData.status || ""} onChange={handleChange} className="w-full border p-2 rounded mb-3">
          <option value="">Seleccionar Estado</option>
          <option value="Disponible">Disponible</option>
          <option value="Inventario Agotado">Inventario Agotado</option>
          <option value="En Tránsito">En Tránsito</option>
          <option value="Descontinuado">Descontinuado</option>
        </select>

        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditProduct;
