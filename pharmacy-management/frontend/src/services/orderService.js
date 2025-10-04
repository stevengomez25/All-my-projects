import axios from "axios";
const BACKEND_URL = process.env.VITE_BACKEND_URL;


const API_URL = `${BACKEND_URL}/api/orders`; // endpoint

export const updateOrder = async (orderId, orderData) => {
  return axios.put(`${API_URL}/${orderId}`, orderData);
};

export const getOrders = async () => {
  return axios.get(API_URL);
};