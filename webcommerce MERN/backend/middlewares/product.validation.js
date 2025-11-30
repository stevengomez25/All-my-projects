import { body } from "express-validator";

export const productValidation = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isString().withMessage("Name must be a string")
    .trim(),

  body("code")
    .notEmpty().withMessage("Code is required")
    .isString().withMessage("Code must be a string"),
    
  body("cost")
    .notEmpty().withMessage("Cost is required")
    .isFloat({ min: 0 }).withMessage("Cost must be a positive number"),

  body("stock")
    .optional()
    .isInt({ min: 0 }).withMessage("Stock must be a non-negative integer"),
];
