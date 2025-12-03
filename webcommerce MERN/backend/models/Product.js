import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      default: "",
    },
    availableSizes: [{
    // Usamos 'availableSizes' para distinguir el propósito
    sizeName: {
      type: String,
      required: true,
      trim: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    }
  }],
    cost: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    image:{
      type: String
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    availableColors: [{
    // Esquema anidado para cada combinación de Color y Cantidad
    colorName: {
      type: String,
      required: true,
      trim: true // Elimina espacios en blanco al inicio/final
    },
    quantity: {
      type: Number,
      required: true,
      min: 0, // Asegura que la cantidad no sea negativa
      default: 0
    }
  }],
  
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
