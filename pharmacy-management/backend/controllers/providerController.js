import Provider from "../models/Provider.js";
import generateToken from "../utils/generateToken.js";

const registerProvider = async(req, res)=>{
    const {name, nit, address, email, phone} = req.body;
    try{
        const ifProviderExists = await Provider.findOne({ nit });
        if (ifProviderExists){
            return res.status(400).json({message: "Provider already exists"});
        }
        
        const provider = await Provider.create({
            name,
            nit,
            address,
            email,
            phone
        });

        res.status(201).json({
            _id: provider._id,
            nit: provider.nit,
            address: provider.address,
            email: provider.email,
            phone: provider.phone,
            token: generateToken(provider),
        })
    }catch(e){
        console.error(e);
        return res.status(500).json({message: "error while registering provider"})
    }
};

const getProvider = async (req,res)=>{
    try{
    const provider = await Provider.findById(req.provider._id);
    if(provider){
        res.json({
            _id: provider._id,
            nit: provider.nit,
            address: provider.address,
            email: provider.email,
            phone: provider.phone,
        })
    }else{
        res.status(404).json({message:'Provider not found'});
    }}catch(e){
        console.error(e);
        return res.status(500).json({message: 'Error while getting Provider'})
    }
};

const updateProvider = async (req,res)=>{
    const {nit, name, address, email, phone} = req.body;
    try{
        const provider = await Provider.findById(req.params.id);
        console.log(provider);
        if(provider){
            provider.nit = nit || provider.nit;
            provider.name = name || provider.name;
            provider.address = address || provider.address;
            provider.email = email || provider.email;
            provider.phone = phone || provider.phone
            const updatedProvider = await provider.save();
            res.json({
               _id: updatedProvider._id,
               nit: updatedProvider.nit,
               name: updatedProvider.name,
               address: updatedProvider.address,
               email: updatedProvider.email,
               phone: updatedProvider.phone
            });
        }else{
            res.status(404).json({message: 'User not found'});
        }
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Server error while updating provider'});
    }
};

const deleteProvider = async (req,res)=>{
    try{
        const providerToDelete = await Provider.findById(req.params.id);
        if(!providerToDelete){
            return res.status(404).json({message: 'User not found'});
        }
        if(req.user.role!=='admin'){
            return res.status(403).json({message: 'Not authorized to remove this provider'});
        }
        await Provider.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Provider deleted'});
    }catch(error){
        console.error(error);
        return res.status(500).json({message: 'Error on server while deleting user'})
    }
};

const getProviders = async(req,res)=>{
    try{
        const providers = await Provider.find({});
        res.status(200).json(providers);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: 'Error while getting all providers on server side'});
    }
}

export {registerProvider, getProvider, getProviders, updateProvider,deleteProvider};