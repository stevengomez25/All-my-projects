import { query } from "express-validator";

export const productSearchValidation = [
  query("search")
    .optional()
    .isString().withMessage("Search must be a string")
    .trim(),

  query("page")
    .optional()
    .isInt({ min: 1 }).withMessage("Page must be a positive number"),

  query("limit")
    .optional()
    .isInt({ min: 1 }).withMessage("Limit must be a positive number"),

  query("minCost")
    .optional()
    .isFloat({ min: 0 }).withMessage("minCost must be a non-negative number"),

  query("maxCost")
    .optional()
    .isFloat({ min: 0 }).withMessage("maxCost must be a non-negative number"),

  query("sort")
    .optional()
    .isString().withMessage("Sort must be a string")
    .isIn(["name", "cost", "stock", "-name", "-cost", "-stock"])
    .withMessage("Invalid sort option"),
];
