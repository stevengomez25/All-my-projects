import express from "express";
import {
    getProfile,
    loginUser,
    logoutUser,
    registerUser
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/admin-check", protect, adminOnly, (req, res) => {
  res.json({ success: true, message: "Admin confirmed" });
});


router.get("/profile", protect, getProfile);

export default router;
