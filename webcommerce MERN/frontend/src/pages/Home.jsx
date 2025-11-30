import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { useAuth } from "../context/AuthContext";
import { TbLockUp } from "react-icons/tb";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { isAuthenticated, loading } = useAuth();

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      if (data.ok) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-light tracking-widest text-neutral-800 uppercase">
            WebCommerce
          </h1>
          {/* Renderizado Condicional del Botón */}
          {isAuthenticated ? (
            <a 
              href="/dashboard"
              className="px-6 py-2 bg-neutral-800 text-white rounded-full text-sm font-medium hover:bg-neutral-600 transition duration-300 shadow-lg"
            >
              Dashboard
            </a>
          ) : (
            <a 
              href="/login" 
              className="px-4 py-2 bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-200 transition duration-300 flex items-center space-x-1"
            >
              <TbLockUp className="text-lg"/>
              <span className="hidden sm:inline">Iniciar Sesión</span>
            </a>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-cover bg-center h-[60vh] md:h-[70vh] flex items-center" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542037104857-ff30cd1e4d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwxNXx8ZmFzaGlvbiUyMGJhbm5lcnxlbnwwfDB8fHwxNzAzNzYwMzU2fDA&ixlib=rb-4.0.3&q=80&w=1080')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left bg-black bg-opacity-30 p-8 md:p-12 rounded-lg ml-4 md:ml-12">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light mb-4 text-white uppercase tracking-wider leading-tight">
            Colección **Primavera 2025**
          </h2>
          <p className="text-white text-lg md:text-xl font-extralight mb-6 max-w-md">
            Descubre las texturas y estilos que definen la moda de esta temporada.
          </p>
          <a href="#products-grid" className="inline-block px-8 py-3 bg-white text-neutral-800 text-sm font-semibold uppercase tracking-wider rounded-full shadow-xl hover:bg-neutral-200 transition duration-300">
            Comprar Ahora
          </a>
        </div>
      </section>

      {/* Product Grid */}
      <main id="products-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-light text-center mb-12 text-neutral-800 uppercase tracking-widest">
          Productos Destacados
        </h3>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No hay productos disponibles en este momento.</p>
        ) : (
          <div className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-6 sm:gap-8
          ">
            {products.map((product) => (
              <div
                key={product._id}
                className="
                  bg-white rounded-lg group overflow-hidden 
                  shadow-lg 
                  hover:shadow-2xl 
                  transition duration-300 cursor-pointer 
                  transform hover:scale-[1.02]
                "
              >
                {/* Product Image */}
                <div className="w-full h-56 md:h-64 overflow-hidden relative">
                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/300x400.png?text=Fashion"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-85"
                  />
                  {/* Etiqueta de nuevo producto (opcional) */}
                  <span className="absolute top-3 left-3 bg-neutral-800 text-white text-xs font-medium px-3 py-1 rounded-full">NEW</span>
                </div>

                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg text-neutral-800 line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-neutral-500 text-sm mb-3">
                    {/* Placeholder para categoría */}
                    Ropa Casual
                  </p>
                  <p className="text-black font-semibold text-xl">
                    ${parseFloat(product.cost).toFixed(2)}
                  </p>
                  {/* Botón de añadir al carrito (añadido para estética) */}
                  <button className="mt-3 w-full bg-neutral-900 text-white py-2 text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-neutral-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 text-sm">
          <p className="mb-2">WebCommerce | Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-neutral-800 transition">Términos</a>
            <a href="#" className="hover:text-neutral-800 transition">Privacidad</a>
            <a href="#" className="hover:text-neutral-800 transition">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}