import { useEffect, useState } from 'react';
import { getProducts } from '../api/products'; // Asume que getProducts trae todos los productos
import { Link } from 'react-router-dom';

// Función para obtener 'n' productos aleatorios sin incluir el actual
const getRandomProducts = (allProducts, excludeId, count = 5) => {
    const filtered = allProducts.filter(p => p._id !== excludeId);
    
    // Si hay menos de 'count' productos, devuelve todos los disponibles
    if (filtered.length <= count) return filtered; 

    // Mezclar el array (algoritmo de Fisher-Yates)
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    
    // Devolver solo los primeros 'count' elementos
    return filtered.slice(0, count);
};

export default function ProductCarousel({ currentProductId }) {
    const [randomProducts, setRandomProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandom = async () => {
            try {
                // Aquí usamos la misma función getProducts que usaste en Home
                const data = await getProducts(); 
                
                if (data.ok && data.products) {
                    const products = getRandomProducts(data.products, currentProductId, 5);
                    setRandomProducts(products);
                }
            } catch (error) {
                console.error("Error al cargar productos randoms:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRandom();
    }, [currentProductId]); // Re-ejecutar si el producto actual cambia

    if (loading) return <div className="text-center text-neutral-500">Cargando sugerencias...</div>;
    if (randomProducts.length === 0) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6 border-b pb-2">
                Productos Relacionados
            </h3>
            
            {/* Carrusel horizontal con scroll */}
            <div className="flex space-x-6 overflow-x-scroll pb-4 scrollbar-hide">
                {randomProducts.map((product) => (
                    <Link 
                        key={product._id} 
                        to={`/products/${product._id}`} 
                        className="flex-shrink-0 w-60 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
                    >
                        <img 
                            src={product.image || "https://placehold.co/300x400"} 
                            alt={product.name}
                            className="w-full h-48 object-cover group-hover:opacity-85 transition duration-300"
                        />
                        <div className="p-4">
                            <h4 className="font-semibold text-neutral-800 line-clamp-1 mb-1">{product.name}</h4>
                            <p className="text-lg font-bold text-blue-600">
                                ${parseFloat(product.cost).toLocaleString('es-CO')}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}