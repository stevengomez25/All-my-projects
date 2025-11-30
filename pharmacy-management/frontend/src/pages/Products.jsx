import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalEditProduct from '../components/EditProduct';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;




const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = async (updatedProduct) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      const res = await fetch(
        `${BACKEND_URL}/api/products/${updatedProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to update product");
      }

      const saved = await res.json();

      // Actualiza el estado local con el producto editado
      setProducts((prev) =>
        prev.map((p) => (p._id === saved._id ? saved : p))
      );

      setIsModalOpen(false);
      setSelectedProduct(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      navigate('/login');
      return;
    }
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/products`, {
          headers: {
            'Authorization': `Bearer ${userInfo?.token}`,
          },
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Failed to fetch products');
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, [navigate]);

  const handleDelete = async (id) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo) {
      navigate('/login');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete product');
      }

      // Filtrar el producto eliminado
      setProducts((prev) => prev.filter((p) => p._id !== id));

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Productos</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No se encontraron productos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 group"
            >
              <h1 className="text-xs text-gray-500">Código: {product.code}</h1>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">Estado: {product.status}</p>
              <p className="text-sm text-gray-600">
                Cantidad: {product.quantity}
              </p>
              <p className="text-sm text-gray-600">
                Vence: {product.expiration}
              </p>
              <p className="text-blue-600 font-bold text-lg">
                ${product.price.toLocaleString()}
              </p>
              <div className=" top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => handleEditClick(product)} className="cursor-pointer bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  {/* Icono de editar, por ejemplo: */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <ModalEditProduct
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  product={selectedProduct}
                  onSave={handleSaveProduct}
                />
                <button onClick={() => { handleDelete(product._id) }} className="cursor-pointer bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  {/* Icono de eliminar, por ejemplo: */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
