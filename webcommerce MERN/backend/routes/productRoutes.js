import express from "express";
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
} from "../controllers/productController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { productValidation } from "../middlewares/product.validation.js";
import { productSearchValidation } from "../middlewares/productSearch.validation.js";
import { validateFields } from "../middlewares/validateFields.js";
import { uniqueCodeValidator } from "../middlewares/uniqueCode.validator.js";

const router = express.Router();

// GET all products
router.get(
  "/",
  getProducts
);

// CREATE product

router.post(
  "/",
  productValidation,
  validateFields,
  uniqueCodeValidator,
  protect,
  createProduct
);

// GET product by id

router.get("/:id", protect, getProduct);

// UPDATE product

router.put(
  "/:id",
  protect,
  productValidation,
  uniqueCodeValidator,
  validateFields,
  updateProduct
);

// DELETE product
router.delete(
  "/:id",
  protect,
  deleteProduct
);

export default router;
