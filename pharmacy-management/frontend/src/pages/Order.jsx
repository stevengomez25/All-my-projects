import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateOrder from "../components/CreateOrder";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;




const Orders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const fetchOrders = async () => {
        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if (!userInfo) {
                navigate("/login");
                return;
            }
            const res = await fetch(`${BACKEND_URL}/api/orders`, {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Failed to fetch orders");
            }

            const data = await res.json();
            console.log(data)
            setOrders(data);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {


        fetchOrders();
    }, [navigate]);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800">Ordenes</h2>

            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    {error}
                </div>
            )}
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                + Crear Orden
            </button>

            {isModalOpen && (
                <CreateOrder onClose={() => {
                    setIsModalOpen(false);
                    fetchOrders()
                }} />
            )}
            {orders.length === 0 ? (
                <p className="text-gray-500 text-center">No hay ordenes encontradas.</p>
            ) : (
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                                <th className="px-6 py-3 text-left">Order #</th>
                                <th className="px-6 py-3 text-left">Tipo</th>
                                <th className="px-6 py-3 text-left">Creado por</th>
                                <th className="px-6 py-3 text-left">Creado en</th>
                                <th className="px-6 py-3 text-left">Cantidad Productos</th>
                                <th className="px-6 py-3 text-left">Costo Total</th>
                                <th className="px-6 py-3 text-left">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr
                                    key={order._id}
                                    className="border-b hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-3 font-medium text-gray-800">
                                        {order.orderNumber || order._id.slice(-6)}
                                    </td>
                                    <td className="px-6 py-3">{order.orderType || "NA"}</td>
                                    
                                    <td className="px-6 py-3" title={order.createdBy?.email || "unknown"}>{order.createdBy?.username || "N/A"} </td>
                                    
                                    <td className="px-6 py-3">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-3">{order.items?.length || 0}</td>
                                    <td className="px-6 py-3 text-blue-600 font-semibold">
                                        ${order.totalAmount.toLocaleString() || 0}
                                    </td>
                                    <td className="px-6 py-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === "completed"
                                                ? "bg-green-100 text-green-700"
                                                : order.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {order.status || "pending"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Orders;
