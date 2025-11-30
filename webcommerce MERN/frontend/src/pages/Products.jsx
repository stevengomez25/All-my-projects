import { useEffect, useState } from "react";
import CreateProductModal from "../components/CreateProductModal";
import { deleteProduct, getProducts } from "../api/products";
import EditProductModal from "../components/EditProductModal";

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


  const handleCancel = async (product) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar el producto?")) {
      return;
    }

    try {
      deleteProduct(product);
      alert('¡Producto eliminado exitosamente!');
      fetchProducts();
    } catch (err) {
      console.error("Error al eliminar:", err);
      alert("Fallo al eliminar el producto.");
    }
  };



  // 3. Función para cerrar el modal de edición
  const closeEditModalHandler = () => {
    setProductToEdit(null); // Esto también desactiva la renderización del modal
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Products Manager</h2>

        <button
          onClick={() => setOpenModal(true)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
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
                  <td className="p-3 text-gray-600">{product.stock}</td>

                  <td className="p-3 font-bold text-blue-600">
                    ${product.cost}
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

      {/* Modal */}
      {openModal && (
        <CreateProductModal
          close={() => setOpenModal(false)}
          reload={fetchProducts}
        />
      )}
      {/* MODAL DE EDICIÓN */}
      {/* Se renderiza solo si productToEdit no es null */}
      {productToEdit && (
        <EditProductModal
          productToEdit={productToEdit} // Pasa el objeto del producto
          close={closeEditModalHandler}
          reload={fetchProducts}
        />
      )}
    </div>
  );
}
