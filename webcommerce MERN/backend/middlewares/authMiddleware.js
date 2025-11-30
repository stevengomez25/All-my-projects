  import jwt from "jsonwebtoken";
  import {User} from "../models/User.js";

  export const protect = async (req, res, next) => {
    try {
      const token = req.cookies.token;

      if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ success: false, message: "User not found" });
      }

      next();
    } catch (err) {
      return res.status(401).json({ success: false, message: "Token invalid" });
    }
  };


  export const adminOnly = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admins only."
      });
    }

    next();
  };
