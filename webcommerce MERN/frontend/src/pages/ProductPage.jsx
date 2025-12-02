import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../api/products';
// import { useCart } from '../context/cartContext'; // Descomentar para usar el carrito
import { FaShoppingCart, FaCheckCircle } from 'react-icons/fa';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // --- ESTADOS PARA OPCIONES ---
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [isAdded, setIsAdded] = useState(false);
    
    // const { addToCart } = useCart(); // Descomentar si usas el carrito

    // Data dummy para opciones (usaremos mayúsculas y colores básicos para mantener la estética)
    const availableSizes = product?.sizes || ['XS', 'S', 'M', 'L', 'XL'];
    const availableColors = product?.colors || ['BLACK', 'WHITE', 'GRAY', 'NAVY'];

    // --- EFECTO DE CARGA (Mantenemos tu lógica funcional) ---
    useEffect(() => {
        let isMounted = true;
        if (!id) {
            setLoading(false);
            return;
        }

        async function fetchProduct() {
            setLoading(true);
            setError(null);

            try {
                const data = await getProductById(id);
                // console.log("Respuesta de la API:", data);

                if (isMounted) {
                    if (data && data.ok) {
                        setProduct(data.product);
                    } else {
                        setError('Producto no encontrado o error del servidor.');
                        setProduct(null);
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
    }, [id]);

    // --- MANEJO DE ADD TO CART ---
    const handleAddToCart = () => {
        if (!product || !selectedSize || !selectedColor) {
            alert("Por favor, selecciona TALLA y COLOR.");
            return;
        }
        
        // Simulación de adición o lógica real si 'addToCart' está descomentado
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2500);
    };

    // --- Renderizado Condicional de Estados ---
    if (loading) return <div className="p-10 text-center text-xl text-neutral-800 font-light tracking-widest uppercase">Cargando producto...</div>;
    if (error) return <div className="p-10 text-center text-red-600">ERROR: {error}</div>;
    if (!product) return <div className="p-10 text-center text-gray-500">Producto no disponible.</div>;

    // --- Renderizado del Producto Estilizado ---
    return (
        <div className="min-h-screen bg-neutral-50 font-sans py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* GRID PRINCIPAL: IMAGEN Y DETALLES */}
                <div className="bg-white shadow-xl rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-12">
                    
                    {/* COLUMNA IZQUIERDA: IMAGEN (Estética clean y sin bordes llamativos) */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <img
                            src={product?.image || "https://placehold.co/800x600"}
                            alt={product?.name}
                            className="w-full h-[500px] object-cover rounded-md border border-neutral-200"
                        />
                    </div>

                    {/* COLUMNA DERECHA: INFORMACIÓN Y OPCIONES */}
                    <div className="flex flex-col justify-start">
                        
                        {/* TÍTULO Y CATEGORÍA */}
                        <p className="text-sm font-light text-neutral-500 uppercase tracking-widest mb-1">
                            {product?.category || "Ropa Casual"}
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-4 uppercase tracking-wider">
                            {product?.name}
                        </h1>
                        <p className="text-3xl font-semibold text-neutral-800 mb-8 border-b pb-4 border-neutral-100">
                            ${parseFloat(product?.cost || 0).toLocaleString('es-CO')}
                        </p>

                        {/* SELECCIÓN DE TALLA */}
                        <div className="mb-6">
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
                                        className={`w-8 h-8 rounded-full border-2 transition duration-200 shadow-sm 
                                            ${selectedColor === color ? 'ring-2 ring-neutral-800 ring-offset-2' : 'hover:ring-1 ring-neutral-300'}`
                                        }
                                        // Usamos un switch simple para simular colores basados en el nombre
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
                        
                        {/* DESCRIPCIÓN DETALLADA (Estilo minimalista) */}
                        <div className="mt-6 pt-6 border-t border-neutral-100">
                            <h2 className="text-lg font-light text-neutral-800 mb-3 uppercase tracking-wider">Descripción</h2>
                            <p className="text-gray-600 leading-relaxed text-base font-light">
                                {product?.description || "Descripción detallada del producto no disponible. Este es un artículo de alta calidad, diseñado para ofrecer durabilidad y estilo minimalista, siguiendo las últimas tendencias de la moda casual."}
                            </p>
                        </div>
                        
                        <div className="mt-8">
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