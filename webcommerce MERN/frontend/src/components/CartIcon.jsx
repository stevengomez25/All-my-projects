// src/components/CartIcon.jsx (MODIFICADO)

import { useCart } from '../context/cartContext';
import { FaShoppingCart } from 'react-icons/fa';

// Aceptamos la prop onClickCart, que será la función para abrir el sidebar
export default function CartIcon({ onClickCart }) {
    const { totalItems, isCartLoading } = useCart();
    
    if (isCartLoading) {
        return <span>...</span>;
    }

    return (
        // Usamos la función pasada por props en el evento onClick
        <button 
            onClick={onClickCart} 
            className="relative p-2 rounded-full hover:bg-neutral-100 transition" // Añadimos estilos de hover
            aria-label="Abrir Carrito"
        >
            <FaShoppingCart className="text-xl text-neutral-800" />
            
            {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                    {totalItems}
                </span>
            )}
        </button>
    );
}