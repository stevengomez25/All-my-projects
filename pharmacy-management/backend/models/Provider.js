import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    nit:{
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type: String,
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
    phone:{
        type: Number,
        required: true,
        unique: true
    }
},{timestamp:true});

const Provider = mongoose.model('Provider',ProviderSchema);

export default Provider;