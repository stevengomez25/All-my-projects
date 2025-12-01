import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
    // Campo para invitados (opcional)
    guestId: { type: String, required: false, unique: true },              
    items: [ /* ... */ ],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Cart',CartSchema);