import User from "../models/User.js";
import Product from "../models/Product.js";

const getDashboardOverview = async (req, res) => {
    try{
        const totalUsers = await User.countDocuments();
        const totalProducts = await Product.countDocuments();

        const availableProducts = await Product.countDocuments({status: 'available'});
        const outOfStock = await Product.countDocuments({status:'out of stock'});

        const mostRecentProducts = await Product.find().sort({createdAt: -1}).limit(5).select('name price status createdAt');

        res.status(200).json({
            totalUsers,
            totalProducts,
            availableProducts,
            outOfStock,
            mostRecentProducts
        })
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error while fetching dashboard data'});
    }
};

export {getDashboardOverview};