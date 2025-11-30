import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";



dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(morgan("dev"));


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);



// Basic route
app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
