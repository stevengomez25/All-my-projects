import React, { useState, useEffect } from "react";

export default function CreateOrder({ onClose }) {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([{ product: undefined, quantity: 1 }]);

    // Fetch products from backend
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
        if (!token) return;
        fetch("http://localhost:5000/api/products", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }

        })
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    // Add new row for product
    const addItem = () => {
        setItems([...items, { productId: "", quantity: 1 }]);
    };

    // Handle change in product or quantity
    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        if (field === "product") {
            newItems[index]["productId"] = value; // 👈 usa productId
        } else {
            newItems[index][field] = value;
        }
        setItems(newItems);
    };

    // Submit order
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('userInfo'))?.token;
        console.log("Items que se envían:", items); // 👈 Verifica aquí

        fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
            body: JSON.stringify({ items }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Order created:", data);
                onClose();
            })
            .catch((err) => console.error("Error creating order:", err));
    };

    return (
        <div className="fixed inset-0 bg-cyan-300/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Create Order</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg shadow-sm"
                        >
                            <select
                                value={item.product}
                                onChange={(e) =>
                                    handleItemChange(index, "product", e.target.value)
                                }
                                required
                                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select product</option>
                                {products.map((p) => (
                                    <option key={p._id} value={p._id}>
                                        {p.name} - {p.presentation} - {p.quantity}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleItemChange(index, "quantity", e.target.value)
                                }
                                required
                                className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addItem}
                        className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                        + Add Item
                    </button>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Create Order
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
