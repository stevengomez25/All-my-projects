// src/components/ProductModal.jsx (CÓDIGO BASE)

import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';
import { FaShoppingCart, FaCheckCircle, FaTimes } from 'react-icons/fa';
// Asumimos que useCart y los demás imports están accesibles

// --- Componente principal del Modal ---
export default function ProductModal({ productId, onClose }) {
    // Si no hay ID, no renderizamos nada o mostramos un error
    if (!productId) return null;

    // --- Lógica de Estados Locales ---
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [isAdded, setIsAdded] = useState(false);
    
    // const { addToCart } = useCart(); // Descomentar si usas el carrito

    // --- LÓGICA DE FETCHING (Refactorizada del useEffect de ProductPage) ---
    useEffect(() => {
        let isMounted = true;

        async function fetchProduct() {
            setLoading(true);
            setError(null);
            setProduct(null); // Limpiar producto previo al cargar uno nuevo
            
            try {
                const data = await getProductById(productId);

                if (isMounted) {
                    if (data && data.ok) {
                        setProduct(data.product);
                        // Resetear las selecciones al cargar un nuevo producto
                        setSelectedSize(null); 
                        setSelectedColor(null);
                    } else {
                        setError('Producto no encontrado.');
                    }
                }
            } catch (err) {
                console.error("Fetch error:", err);
                if (isMounted) {
                    setError('Error al conectar con el servidor.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchProduct();

        return () => {
            isMounted = false;
        };
    }, [productId]); // Se ejecuta cada vez que el ID del producto cambie

    // --- MANEJO DE ADD TO CART ---
    const handleAddToCart = () => {
        if (!product || !selectedSize || !selectedColor) {
            alert("Por favor, selecciona TALLA y COLOR.");
            return;
        }
        // Lógica de añadir al carrito aquí...
        
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2500);
    };

    // Data dummy para opciones
    const availableSizes = product?.sizes || ['XS', 'S', 'M', 'L', 'XL'];
    const availableColors = product?.colors || ['BLACK', 'WHITE', 'GRAY', 'NAVY'];

    // --- Renderizado Condicional del Modal ---
    if (loading) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-2xl">
                    <p className="text-xl text-neutral-800 font-light uppercase tracking-widest">Cargando...</p>
                </div>
            </div>
        );
    }
    
    if (error || !product) {
         return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-2xl">
                    <p className="text-xl text-red-600 font-light uppercase">{error || 'Producto no disponible.'}</p>
                    <button onClick={onClose} className="mt-4 text-sm text-neutral-600 hover:text-neutral-800">Cerrar</button>
                </div>
            </div>
        );
    }

    // --- Renderizado del Producto (El estilo que me pediste) ---
    return (
        // Overlay (Fondo oscuro)
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            
            {/* Contenedor del Modal */}
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">
                
                {/* Botón de Cierre */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-neutral-700 hover:text-neutral-900 z-50 p-2 bg-white rounded-full shadow-md transition"
                    aria-label="Cerrar ventana de producto"
                >
                    <FaTimes className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    
                    {/* COLUMNA IZQUIERDA: IMAGEN */}
                    <div>
                        <img
                            src={product.image || "https://placehold.co/800x600"}
                            alt={product.name}
                            className="w-full h-[400px] object-cover rounded-md border border-neutral-200"
                        />
                    </div>

                    {/* COLUMNA DERECHA: INFORMACIÓN Y OPCIONES */}
                    <div className="flex flex-col justify-start">
                        
                        {/* TÍTULO Y PRECIO */}
                        <p className="text-sm font-light text-neutral-500 uppercase tracking-widest mb-1">
                            {product.category || "Ropa Casual"}
                        </p>
                        <h1 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-4 uppercase tracking-wider">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-semibold text-neutral-800 mb-6 border-b pb-4 border-neutral-100">
                            ${parseFloat(product.cost).toLocaleString('es-CO')}
                        </p>

                        {/* SELECCIÓN DE TALLA */}
                        <div className="mb-4">
                            <h3 className="font-light text-neutral-800 mb-3 tracking-widest uppercase text-sm">
                                TALLA: <span className="font-semibold">{selectedSize || 'SELECCIONAR'}</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {availableSizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-10 border text-sm font-light uppercase transition duration-200 
                                            ${selectedSize === size 
                                                ? 'bg-neutral-800 text-white border-neutral-800' 
                                                : 'bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-300'}`
                                        }
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* SELECCIÓN DE COLOR */}
                        <div className="mb-8">
                            <h3 className="font-light text-neutral-800 mb-3 tracking-widest uppercase text-sm">
                                COLOR: <span className="font-semibold">{selectedColor || 'SELECCIONAR'}</span>
                            </h3>
                            <div className="flex gap-3">
                                {availableColors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-7 h-7 rounded-full border-2 transition duration-200 shadow-sm 
                                            ${selectedColor === color ? 'ring-2 ring-neutral-800 ring-offset-2' : 'hover:ring-1 ring-neutral-300'}`
                                        }
                                        style={{ 
                                            backgroundColor: {
                                                'BLACK': '#000000',
                                                'WHITE': '#ffffff',
                                                'GRAY': '#9ca3af',
                                                'NAVY': '#000080'
                                            }[color] || color.toLowerCase() 
                                        }}
                                        aria-label={`Seleccionar color ${color}`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        {/* DESCRIPCIÓN DETALLADA */}
                        <div className="mt-auto pt-6 border-t border-neutral-100">
                            <h2 className="text-lg font-light text-neutral-800 mb-3 uppercase tracking-wider">Descripción</h2>
                            <p className="text-gray-600 leading-relaxed text-base font-light mb-8">
                                {product.description || "Este es un artículo de alta calidad, diseñado para ofrecer durabilidad y estilo minimalista, con una composición de materiales premium."}
                            </p>

                             {/* BOTÓN AÑADIR AL CARRITO */}
                            <button 
                                onClick={handleAddToCart}
                                disabled={!selectedSize || !selectedColor}
                                className={`w-full flex items-center justify-center space-x-3 py-3 px-8 rounded-full text-lg font-medium uppercase tracking-wider transition duration-300 shadow-lg 
                                    ${isAdded 
                                        ? 'bg-green-600 text-white' 
                                        : (!selectedSize || !selectedColor 
                                            ? 'bg-neutral-300 text-neutral-600 cursor-not-allowed' 
                                            : 'bg-neutral-800 text-white hover:bg-neutral-600')
                                    }`}
                            >
                                {isAdded ? (
                                    <><FaCheckCircle className="w-5 h-5" /> <span>PRODUCTO AÑADIDO</span></>
                                ) : (
                                    <><FaShoppingCart className="w-5 h-5" /> <span>Añadir al Carrito</span></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}