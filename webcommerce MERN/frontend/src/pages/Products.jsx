import { useEffect, useState } from "react";
import CreateProductModal from "../components/CreateProductModal";
import { deleteProduct, getProducts } from "../api/products";
import EditProductModal from "../components/EditProductModal";

// --- Función Auxiliar para Calcular Stock Total ---
const calculateTotalStock = (product) => {
  let totalStock = 0;

  // Sumar stock de availableSizes
  if (Array.isArray(product.availableSizes)) {
    totalStock += product.availableSizes.reduce((sum, size) => sum + (size.quantity || 0), 0);
  }

  // Sumar stock de availableColors
  if (Array.isArray(product.availableColors)) {
    totalStock += product.availableColors.reduce((sum, color) => sum + (color.quantity || 0), 0);
  }
  
  // Si no hay variantes definidas, asumimos 0
  return totalStock;
};
// ----------------------------------------------------


export default function Products() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      if (data.ok) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error("Error loading products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openEditModalHandler = (product) => {
    setProductToEdit(product);
  };

  const handleCancel = async (productId) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar el producto?")) {
      return;
    }

    try {
      await deleteProduct(productId); // Asegúrate de pasar el ID, no el objeto completo
      alert('¡Producto eliminado exitosamente!');
      fetchProducts();
    } catch (err) {
      console.error("Error al eliminar:", err);
      alert("Fallo al eliminar el producto.");
    }
  };

  const closeEditModalHandler = () => {
    setProductToEdit(null);
  };
  
  // --- Función Auxiliar para mostrar variantes en la tabla ---
  const formatVariants = (sizes, colors) => {
      const sizeCount = Array.isArray(sizes) ? sizes.length : 0;
      const colorCount = Array.isArray(colors) ? colors.length : 0;

      let summary = [];
      if (sizeCount > 0) summary.push(`${sizeCount} Talla(s)`);
      if (colorCount > 0) summary.push(`${colorCount} Color(es)`);

      return summary.join(' / ') || 'N/A';
  };
  // -----------------------------------------------------------


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Products Manager</h2>

        <button
          onClick={() => setOpenModal(true)}
          className="p-2 bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-200 transition duration-300 flex items-center space-x-1"
        >
          + Create Product
        </button>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Code</th>
              <th className="p-3">Cost</th>
              <th className="p-3">Total Stock</th>
              <th className="p-3">Variants</th> {/* Nueva columna */}
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500"> {/* Colspan ajustado a 7 */}
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={
                        product.image ||
                        "https://via.placeholder.com/50x50.png?text=No+Img"
                      }
                      alt="product"
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 font-semibold text-gray-800">
                    {product.name}
                  </td>
                  <td className="p-3 text-gray-600">{product.code}</td>
                  
                  {/* Stock Total calculado */}
                  <td className="p-3 font-bold text-blue-600">
                    ${product.cost.toLocaleString()}
                  </td>

                  <td className="p-3 text-gray-600 font-bold">
                    {calculateTotalStock(product)} {/* Usamos la función de stock */}
                  </td>
                  
                  {/* Resumen de Variantes */}
                  <td className="p-3 text-sm text-gray-500">
                    {formatVariants(product.availableSizes, product.availableColors)}
                  </td>

                  <td className="p-3">
                    <button onClick={() => { openEditModalHandler(product) }} className="text-blue-600 font-medium hover:underline mr-3">
                      Edit
                    </button>
                    <button onClick={() => { handleCancel(product._id) }} className="text-red-600 font-medium hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de Creación */}
      {openModal && (
        <CreateProductModal
          close={() => setOpenModal(false)}
          reload={fetchProducts}
        />
      )}
      
      {/* MODAL DE EDICIÓN */}
      {productToEdit && (
        <EditProductModal
          productToEdit={productToEdit}
          close={closeEditModalHandler}
          reload={fetchProducts}
        />
      )}
    </div>
  );
}