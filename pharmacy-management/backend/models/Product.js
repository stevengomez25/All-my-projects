import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name:{
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    presentation:{
        type: String,
        required:true
    },
    UM:{
        type:String,
        required:true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type:String,
        required: true,
        enum:['Disponible','Inventario Agotado', 'En Tránsito', 'Descontinuado']
    },
    expiration:{
        type: Date,
        required: true
    },

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
},{timestamps:true});

const Product = mongoose.model('Product',productSchema);

export default Product;