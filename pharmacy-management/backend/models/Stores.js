import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    }
    },
    capacity:{
        type: Number,
        required: true,
    }


},{timestamp:true});

const Store = mongoose.model('Store',StoreSchema);

export default Store;