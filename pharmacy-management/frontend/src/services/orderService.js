import axios from "axios";

const API_URL = "http://localhost:5000/api/orders"; // tu endpoint

export const updateOrder = async (orderId, orderData) => {
  return axios.put(`${API_URL}/${orderId}`, orderData);
};

export const getOrders = async () => {
  return axios.get(API_URL);
};