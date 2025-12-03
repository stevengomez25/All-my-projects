// src/components/ProductModal.jsx

import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';
import { FaShoppingCart, FaCheckCircle, FaTimes } from 'react-icons/fa';

// --- Función Auxiliar para obtener el stock de una variante específica ---
const getStockForSelection = (product, sizeName, colorName) => {
    // Si no hay selecciones, el stock es 0
    if (!product || !sizeName || !colorName) return 0;

    // Buscar el stock de la talla
    const sizeStock = product.availableSizes?.find(s => s.sizeName === sizeName)?.quantity || 0;
    
    // Buscar el stock del color
    const colorStock = product.availableColors?.find(c => c.colorName === colorName)?.quantity || 0;
    
    // NOTA: Si tu backend gestiona stock combinado (ej: solo 10 camisetas Talla M, Color Rojo), 
    // deberías tener un array de combinaciones [ {size: 'M', color: 'Rojo', quantity: 10} ].
    // PERO, si tu esquema actual es stock por Talla Y stock por Color, el stock disponible
    // es el MÍNIMO entre el stock de la talla y el stock del color (asumiendo que ambos
    // limitan el inventario de la combinación).
    
    // Asumimos que el stock disponible es el mínimo (el recurso más limitado)
    return Math.min(sizeStock, colorStock);
};
// ------------------------------------------------------------------------


// --- Componente principal del Modal ---
export default function ProductModal({ productId, onClose }) {
    if (!productId) return null;

    // --- Lógica de Estados Locales ---
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Almacena el nombre de la variante seleccionada, no el objeto completo
    const [selectedSizeName, setSelectedSizeName] = useState(null);
    const [selectedColorName, setSelectedColorName] = useState(null);
    
    const [isAdded, setIsAdded] = useState(false);
    
    // Stock actual de la combinación seleccionada
    const currentStock = getStockForSelection(product, selectedSizeName, selectedColorName);
    const isAvailable = currentStock > 0;
    
    // const { addToCart } = useCart(); // Descomentar si usas el carrito

    // --- LÓGICA DE FETCHING ---
    useEffect(() => {
        let isMounted = true;

        async function fetchProduct() {
            setLoading(true);
            setError(null);
            setProduct(null);
            
            try {
                const data = await getProductById(productId);

                if (isMounted) {
                    if (data && data.ok) {
                        setProduct(data.product);
                        // Limpiar selecciones
                        setSelectedSizeName(null); 
                        setSelectedColorName(null);
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
    }, [productId]);

    // --- MANEJO DE ADD TO CART ---
    const handleAddToCart = () => {
        if (!product || !selectedSizeName || !selectedColorName || !isAvailable) {
            alert("Por favor, selecciona una combinación de TALLA y COLOR disponible.");
            return;
        }
        
        // Aquí iría la llamada a addToCart con la variante seleccionada
        /*
        addToCart({
            productId: product._id,
            name: product.name,
            size: selectedSizeName,
            color: selectedColorName,
            price: product.cost,
            quantity: 1 // o la cantidad seleccionada por el usuario
        });
        */

        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2500);
    };


    // --- Renderizado Condicional de Estados ---
    if (loading) {
        // ... (Tu código de loading se mantiene) ...
        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-2xl">
                    <p className="text-xl text-neutral-800 font-light uppercase tracking-widest">Cargando...</p>
                </div>
            </div>
        );
    }
    
    if (error || !product) {
         // ... (Tu código de error se mantiene) ...
         return (
             <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                 <div className="bg-white p-10 rounded-lg shadow-2xl">
                     <p className="text-xl text-red-600 font-light uppercase">{error || 'Producto no disponible.'}</p>
                     <button onClick={onClose} className="mt-4 text-sm text-neutral-600 hover:text-neutral-800">Cerrar</button>
                 </div>
             </div>
         );
    }

    // Datos que vienen del backend
    const availableSizes = product.availableSizes || [];
    const availableColors = product.availableColors || [];
    
    // --- Renderizado del Producto ---
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
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
                        
                        {/* ESTADO DE STOCK (VISIBLE) */}
                        <p className={`mb-4 text-md font-semibold ${isAvailable ? 'text-green-600' : 'text-gray-600'}`}>
                            {selectedSizeName && selectedColorName 
                                ? (isAvailable ? `Stock: Ultimas 5 unidades!` : 'AGOTADO para esta combinación')
                                : 'Selecciona talla y color para ver stock'}
                        </p>


                        {/* SELECCIÓN DE TALLA (Iterando sobre availableSizes) */}
                        <div className="mb-4">
                            <h3 className="font-light text-neutral-800 mb-3 tracking-widest uppercase text-sm">
                                TALLA: <span className="font-semibold">{selectedSizeName || 'SELECCIONAR'}</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {availableSizes.map(({ sizeName, quantity }) => {
                                    const isSizeAvailable = quantity > 0;
                                    return (
                                        <button
                                            key={sizeName}
                                            onClick={() => setSelectedSizeName(sizeName)}
                                            disabled={!isSizeAvailable}
                                            className={`w-12 h-10 border text-sm font-light uppercase transition duration-200 
                                                ${!isSizeAvailable 
                                                    ? 'bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed line-through'
                                                    : selectedSizeName === sizeName 
                                                        ? 'bg-neutral-800 text-white border-neutral-800' 
                                                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-300'
                                                }`}
                                        >
                                            {sizeName}
                                        </button>
                                    );
                                })}
                                {!availableSizes.length && <p className="text-sm text-gray-400">No hay tallas disponibles.</p>}
                            </div>
                        </div>

                        {/* SELECCIÓN DE COLOR (Iterando sobre availableColors) */}
                        <div className="mb-8">
                            <h3 className="font-light text-neutral-800 mb-3 tracking-widest uppercase text-sm">
                                COLOR: <span className="font-semibold">{selectedColorName || 'SELECCIONAR'}</span>
                            </h3>
                            <div className="flex gap-3">
                                {availableColors.map(({ colorName, quantity }) => {
                                    const isColorAvailable = quantity > 0;
                                    
                                    // Función simple para mapear el nombre a un código CSS de color (mejora si usas HEX en backend)
                                    const getColorCode = (name) => {
                                        const colorMap = {
                                            'NEGRO': '#000000', 'BLANCO': '#ffffff', 'GRIS': '#9ca3af', 'NAVY': '#000080',
                                            'ROJO': '#dc2626', 'AZUL': '#3b82f6', 'VERDE': '#10b981', 'AMARILLO': '#facc15'
                                        };
                                        return colorMap[name.toUpperCase()] || name.toLowerCase();
                                    };

                                    return (
                                        <button
                                            key={colorName}
                                            onClick={() => setSelectedColorName(colorName)}
                                            disabled={!isColorAvailable}
                                            className={`w-7 h-7 rounded-full border-2 transition duration-200 shadow-sm relative 
                                                ${selectedColorName === colorName 
                                                    ? 'ring-2 ring-neutral-800 ring-offset-2' 
                                                    : 'hover:ring-1 ring-neutral-300'
                                                }`}
                                            style={{ 
                                                backgroundColor: getColorCode(colorName),
                                                opacity: isColorAvailable ? 1 : 0.5, // Opacidad para agotado
                                                borderColor: getColorCode(colorName) === '#ffffff' ? '#d1d5db' : getColorCode(colorName) // Borde para el blanco
                                            }}
                                            aria-label={`Seleccionar color ${colorName} (${isColorAvailable ? 'Disponible' : 'Agotado'})`}
                                        >
                                            {!isColorAvailable && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-full h-px bg-red-600 rotate-45 transform"></div>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                                {!availableColors.length && <p className="text-sm text-gray-400">No hay colores disponibles.</p>}
                            </div>
                        </div>
                        
                        {/* DESCRIPCIÓN DETALLADA Y BOTÓN DE CARRITO */}
                        <div className="mt-auto pt-6 border-t border-neutral-100">
                            <h2 className="text-lg font-light text-neutral-800 mb-3 uppercase tracking-wider">Descripción</h2>
                            <p className="text-gray-600 leading-relaxed text-base font-light mb-8">
                                {product.description || "Este es un artículo de alta calidad, diseñado para ofrecer durabilidad y estilo minimalista, con una composición de materiales premium."}
                            </p>

                            {/* BOTÓN AÑADIR AL CARRITO */}
                            <button 
                                onClick={handleAddToCart}
                                disabled={!selectedSizeName || !selectedColorName || !isAvailable} // Desactivado si no hay selección o si está agotado
                                className={`w-full flex items-center justify-center space-x-3 py-3 px-8 rounded-full text-lg font-medium uppercase tracking-wider transition duration-300 shadow-lg 
                                    ${isAdded 
                                        ? 'bg-green-600 text-white' 
                                        : (!selectedSizeName || !selectedColorName || !isAvailable
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