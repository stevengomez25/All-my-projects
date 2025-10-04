import React, { useState, useEffect } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function CreateOrder({ onClose }) {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([{ productId: "", quantity: 1 }]);
    const [orderType, setOrderType] = useState("Transferencia");
    const [loading, setLoading] = useState(false);
    const [BranchTo, setBranch] = useState("");

    const branches = [
        { id: "1", name: "Sucursal Norte" },
        { id: "2", name: "Sucursal Sur" },
        { id: "3", name: "Sucursal Centro" },
    ];

    // Fetch products from backend
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
        if (!token) return;

        fetch(`${BACKEND_URL}/api/products`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    // Add new row for product
    const addItem = () => {
        setItems((prev) => [...prev, { productId: "", quantity: 1 }]);
    };

    // Remove an item row
    const removeItem = (index) => {
        setItems((prev) => prev.filter((_, i) => i !== index));
    };

    // Handle change in product or quantity
    const handleItemChange = (index, field, value) => {
        setItems((prev) =>
            prev.map((it, i) =>
                i === index
                    ? {
                        ...it,
                        [field]: field === "quantity" ? Number(value) : value,
                    }
                    : it
            )
        );
    };

    // Submit order
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
        // Client-side validation
        if (items.length === 0) {
            return alert("Add at least one item");
        }
        if (items.some((it) => !it.productId)) {
            return alert("Please select a product for every item");
        }

        setLoading(true);
        try {
            // Ensure quantities are numbers and only send the fields the backend expects
            const payloadItems = items.map((it) => ({
                productId: it.productId,
                quantity: Number(it.quantity),
            }));

            const res = await fetch(`${BACKEND_URL}/api/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ orderType, BranchTo, items: payloadItems }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Error creating order");

            console.log("Order created:", data);
            onClose && onClose();
        } catch (err) {
            console.error("Error creating order:", err);
            alert(err.message || "Server error creating order");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-cyan-300/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Crear Orden</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* order type select (fixed) */}
                    <label className="block">
                        <span className="text-sm font-medium">Tipo de Orden</span>
                        <select
                            name="orderType"
                            value={orderType}
                            onChange={(e) => setOrderType(e.target.value)}
                            className="w-full border p-2 rounded mt-1"
                            required
                        >
                            <option value="Transferencia">Transferencia</option>
                            <option value="Pedido">Pedido</option>
                            <option value="Despacho">Despacho</option>
                            <option value="Compra">Compra</option>
                            <option value="Recibo">Recibo</option>
                        </select>
                    </label>
                    {orderType === "Transferencia" && (
                        <label className="block">
                            <span className="text-sm font-medium">Sucursal destino</span>
                            <select
                                name="branch"
                                value={BranchTo}
                                onChange={(e) => setBranch(e.target.value)}
                                className="w-full border p-2 rounded mt-1"
                                required
                            >
                                <option value="">Selecciona una sucursal</option>
                                {branches.map((b) => (
                                    <option key={b.id} value={b.id}>
                                        {b.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg shadow-sm"
                        >
                            <select
                                value={item.productId}
                                onChange={(e) => handleItemChange(index, "productId", e.target.value)}
                                required
                                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Selecciona un producto</option>
                                {products.map((p) => (
                                    <option key={p._id} value={p._id}>
                                        {p.name} - {p.presentation} - Inventario: {p.quantity} U
                                    </option>
                                ))}
                            </select>

                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                                required
                                className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="button"
                                onClick={() => removeItem(index)}
                                className="px-1 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Remover
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addItem}
                        className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                        + Agregar Producto
                    </button>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-60"
                        >
                            {loading ? "Creating..." : "Enviar"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
