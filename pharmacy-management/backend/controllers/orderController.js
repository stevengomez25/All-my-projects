import Order from '../models/Order.js';
import Product from "../models/Product.js";

const createOrder = async (req, res) => {
    try {
        const {orderType} = req.body;
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Order must have at least one item." });
        }

        let totalAmount = 0;
        const orderItems = [];

        for (const item of items) {
            const product = await Product.findById(item.productId);

            if (!product) {
                return res.status(404).json({ message: `Product with ID ${item.productId} not found.` });
            }

            if (product.quantity < item.quantity) {
                return res.status(400).json({ message: `Not enough stock for product: ${product.name}` });
            }

            const total = product.price * item.quantity; // price en Product = cost en Order
            totalAmount += total;

            orderItems.push({
                product: product._id,
                code: product.code,
                presentation: product.presentation,
                description: product.description,
                unit: product.UM,
                cost: product.price,
                quantity: item.quantity,
                total
            });

            product.quantity -= item.quantity;
            await product.save();
        }

        const newOrder = new Order({
            orderNumber: `ORD-${Date.now()}`,
            orderType: orderType,
            items: orderItems,
            totalAmount,
            createdBy: req.user._id,
            ...(req.body.branch && { branch: req.body.branch })
        });

        await newOrder.save();

        res.status(201).json({
            message: "Order created successfully.",
            order: newOrder
        });

    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message:`server error: ${error}` });
    }
};

const GetOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        .populate('createdBy','username email');
        res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

const updateOrder = async (req, res) => {
    try {
    const { id } = req.params;
    const { customerName, customerId, items, status } = req.body;

    // Verificar si la orden existe
    const existingOrder = await Order.findById(id);
    if (!existingOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Actualizar campos
    if (customerName) existingOrder.customerName = customerName;
    if (customerId) existingOrder.customerId = customerId;
    if (status) existingOrder.status = status;

    // Si se envían nuevos items, recalcular el total
    if (items && Array.isArray(items)) {
      existingOrder.items = items;
      existingOrder.totalCost = items.reduce(
        (total, item) => total + (item.cost * item.quantity),
        0
      );
    }

    const updatedOrder = await existingOrder.save();
    res.json(updatedOrder);

  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error: error.message });
  }
};

const deleteOrder = async (req,res) =>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.id);
        if(!order){
            return res.status(404).json({message: 'Order not found'})
        }

        await order.deleteOne();
        res.json({message:  'Order deleted successfully'});
    }catch(error){
        res.status(500).json({message: 'Server error while  deleting the order'});
    }
};

const getOrderById = async (req, res)=>{
    try{
        const order = await Order.findById(req.params.id);
        if (!order){
            return res.status(494).json({message: 'Order not found'})
        }
        res.json(order);
    }catch(error){
        res.status(500).json({message: 'Server error while fetching order'});
    }
};

const filterOrders = async (req, res) =>{
    try{
        const {type, startDate, endDate} = req.body;

        let query = {};

        if(type){
            query.type = type;
        }
        if(startDate && endDate){
            query.createdAt = {
                $gte: new Date(startDate),
                $lte: new Date(endDate),
            };
        }
        const orders = await Order.find(query);
        res.json(orders);
    }catch(error){
        res.status(500).json({message:'Server error while filtering orders.'});
    }
};

const getOrderReport = async (req,res)=>{
    const {start,end,type} = req.query;
    try{
        const query = {};
        if (start && end){
            query.createdAt ={
                $gte : new Date(start),
                $lte : new Date(end)
            };
        }
        if (type){
            query.type = type;
        }
        const orders = await Order.find(query);
        res.json(orders);
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Error while generating report.'})
    }
};

export { createOrder, GetOrders, updateOrder, deleteOrder, getOrderById, filterOrders, getOrderReport};
