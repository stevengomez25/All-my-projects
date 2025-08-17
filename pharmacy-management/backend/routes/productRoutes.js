import express from 'express';
import {registerProduct, getProducts, updateProduct, deleteProduct, getProductById, filterProducts} from "../controllers/productController.js";
import { protect, AllowedRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();


//Create product 
router.post('/',protect,registerProduct);
//Get all products
router.get('/',protect,getProducts);
//Update product
router.put('/:id',protect, AllowedRoles('supervisor','admin'), updateProduct);
//Delete product
router.delete('/:id',protect, AllowedRoles('admin'), deleteProduct);
//Get product by ID
router.get('/:id',protect, getProductById);
//Filter products
router.get('/filter',protect,filterProducts);

export default router;