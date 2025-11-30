import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importamos tu hook de autenticación

export default function Logout() {
    const navigate = useNavigate();
    const { logout } = useAuth(); // Obtenemos la función de cierre de sesión

    useEffect(() => {
        // 1. Ejecutar la función de cierre de sesión (API call)
        logout();

        // 2. Configurar el temporizador para la redirección
        const timer = setTimeout(() => {
            // 3. Redirigir al usuario a la ruta deseada (ej. home o login)
            navigate('/'); 
        }, 1000);

        // 4. Función de limpieza (Cleanup function)
        // Esto detiene el temporizador si el componente se desmonta antes de que se complete el tiempo.
        return () => clearTimeout(timer); 

    }, [navigate, logout]); // Dependencias: navigate y logout deben estar en el array

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-700">
                Cerrando Sesión... Por favor, espera
            </h1>
        </div>
    );
}   