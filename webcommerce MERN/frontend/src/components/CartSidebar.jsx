import React from 'react';
import { useCart } from '../context/cartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

export default function CartSidebar({ isOpen, close }) {
    const { cartItems, subtotal, updateQuantity, removeItem, clearCart } = useCart();
    
    // Si la barra no está abierta, no renderizar nada
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay: Se cierra al hacer clic fuera del sidebar */}
            <div 
                onClick={close} 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            />

            {/* Sidebar Contenedor Principal */}
            <div className={`
                fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white 
                shadow-2xl z-50 transition-transform duration-300 ease-in-out
                flex flex-col 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                
                {/* Header del Sidebar */}
                <div className="p-5 border-b flex justify-between items-center">
                    <h3 className="text-2xl font-semibold text-neutral-800">Tu Carrito</h3>
                    <button onClick={close} className="text-neutral-500 hover:text-neutral-900 transition text-2xl" aria-label="Cerrar">
                        &times;
                    </button>
                </div>

                {/* Contenido/Items del Carrito */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-neutral-500 mt-10">Tu carrito está vacío.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex items-center border-b pb-4">
                                <img src={item.image || "https://via.placeholder.com/60"} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                                
                                <div className="flex-1">
                                    <h4 className="font-medium text-neutral-800 line-clamp-1">{item.name}</h4>
                                    <p className="text-sm text-neutral-600">${item.cost.toLocaleString()}</p>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                    {/* Control de Cantidad */}
                                    <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="p-1 border rounded-full hover:bg-neutral-100 transition text-sm">
                                        <FaMinus className="w-3 h-3"/>
                                    </button>
                                    <span className="font-medium w-6 text-center">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="p-1 border rounded-full hover:bg-neutral-100 transition text-sm">
                                        <FaPlus className="w-3 h-3"/>
                                    </button>
                                    
                                    {/* Eliminar Item */}
                                    <button onClick={() => removeItem(item._id)} className="ml-3 text-red-500 hover:text-red-700 transition" aria-label="Eliminar">
                                        <FaTrash className="w-4 h-4"/>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer/Checkout */}
                <div className="p-5 border-t bg-neutral-50">
                    <div className="flex justify-between font-bold text-xl mb-4">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                    </div>
                    
                    <button 
                        // Aquí iría la lógica para navegar a la página de Checkout
                        onClick={() => { alert('Navegando a Checkout!'); close(); }} 
                        disabled={cartItems.length === 0}
                        className={`w-full py-3 text-white rounded-lg font-semibold transition duration-300
                            ${cartItems.length > 0 ? 'bg-neutral-900 hover:bg-neutral-700' : 'bg-neutral-400 cursor-not-allowed'}
                        `}
                    >
                        Proceder al Checkout
                    </button>

                    {cartItems.length > 0 && (
                         <button 
                            onClick={clearCart} 
                            className="w-full mt-2 text-sm text-neutral-500 hover:text-red-600 transition"
                         >
                            Vaciar Carrito
                         </button>
                    )}
                </div>
            </div>
        </>
    );
}