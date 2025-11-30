import Product from "../models/Product.js";

export const uniqueCodeValidator = async (req, res, next) => {
  try {
    const { code } = req.body;
    const productId = req.params.id; // for update

    if (!code) return next(); // validation handled elsewhere

    // Check if another product already uses this code
    const existing = await Product.findOne({ code });

    if (existing && existing._id.toString() !== productId) {
      return res.status(400).json({
        ok: false,
        message: "Product code already exists",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};
