import Product from "../models/Product.js";

const registerProduct = async (req, res) =>{
    const {code, name, description, presentation, UM, quantity, price, status, expiration} = req.body;
    try{
        if(!name || quantity == null || price == null || !status){
            return res.status(400).json({message: 'Please provide valid product data'});
        }

        const existingProduct = await Product.findOne({name});
        if(existingProduct){
            return res.status(409).json({message: 'Product already exists'});
        }
        const product = await Product.create({
            code,
            name: name.trim(),
            description,
            presentation,
            UM,
            quantity,
            price,
            status,
            expiration,
            createdBy: req.user._id
        });
        res.status(201).json({
            _id: product._id,
            code: product.code,
            name: product.name,
            description: product.description,
            presentation: product.presentation,
            UM: product.UM,
            quantity: product.quantity,
            price: product.price,
            status: product.status,
            expiration: product.expiration
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({message: 'Server Error'});
    }
};

const getProducts = async (req, res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        return res.status(500).json({message:'Server error', error});
    };
}

const updateProduct = async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:'Product not found'});
        }
        const {code, name, description,presentation, UM, quantity,price,status, expiration} = req.body;
        if(code) product.code = code;
        if(name) product.name = name;
        if(description) product.description = description;
        if(presentation) product.presentation = presentation;
        if(UM) product.UM = UM;
        if(quantity) product.quantity = quantity;
        if(price) product.price = price;
        if(status) product.status = status;
        if(expiration) product.expiration = expiration;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    }catch(error){
        res.status(500).json({message: 'Server error while updating the product'})
    }
}

const deleteProduct = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"product not found!"});
        }
        await product.deleteOne();
        res.json({message: 'Product deleted'})
    }catch(error){
        res.status(500).json({message:'Server error while deleting the product'});
    }
}

const getProductById = async (req, res) =>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:'Product not found'})
        }
        res.json(product);
    }catch(error){
        return res.status(500).json({message:'Server error while fetching product'})
    }
}

const filterProducts = async (req,res) =>{
    try{
        const {status, minPrice, maxPrice} = req.query;

        const query = {};

        if(status){
            query.status = status;
        }
        
        if(minPrice || maxPrice){
            query.price = {};
            if(minPrice) query.price.$gte = Number(minPrice);
            if(maxPrice) query.price.$lte = Number(maxPrice);
        }

        const Products = await Product.find(query);
        res.json(Products);
    }catch(error){
        res.status(500).json({message: "Server error while filtering products"})
    }
}

export {registerProduct, getProducts, updateProduct, deleteProduct, getProductById, filterProducts};