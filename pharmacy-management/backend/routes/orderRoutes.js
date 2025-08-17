import express from 'express';
import {protect} from '../middlewares/authMiddleware.js';
import {createOrder, GetOrders, updateOrder, deleteOrder, getOrderById, filterOrders, getOrderReport} from '../controllers/orderController.js';


const router = express.Router();

router.post('/', protect, createOrder);

router.get('/', protect, GetOrders);

router.put('/:id', protect, updateOrder);

router.delete('/:id', protect, deleteOrder);

router.get('/:id',protect,getOrderById);

router.get('/filter',protect,filterOrders);

router.get('/report',protect,getOrderReport);

export default router;

