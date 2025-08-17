import User from "../models/User.js";
import generateToken from "../utils/generateToken.js"

const registerUser = async (req, res) => {
    let { username, email, password, role } = req.body;
    try {
        const ifUserExists = await User.findOne({ email });
        if (ifUserExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        if (!req.user) {
            role = 'user';
        }

        const user = await User.create({
            username,
            email,
            password,
            role,
        });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: generateToken(user),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        if (await user.matchPassword(password)) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getProfile = async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

const updateProfile = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.username = username || user.username;
            user.email = email || user.email;
            if (password) {
                user.password = password;
            }
            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                role: updatedUser.role,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteUser = async (req,res) => {
    try{
    const userToDelete = await User.findById(req.params.id);
    if(!userToDelete){
        return res.status(404).json({message: 'User not found'});
    }
    if(userToDelete.role === "admin" && req.user.role !=='admin'){
        return res.status(403).json({message:'Not authorized to delete this user'});
    }
    if(req.user._id.toString() === userToDelete._id.toString()){
        return res.status(400).json({message:'You cannot delete yourself'});
    }
    await userToDelete.remove();
    res.json({message: 'User removed'});
}catch(error){
    console.log(error);
    res.status(500).json({message: 'Server error while deleting user'});
}
};

const getUsers = async (req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);

        //Validate if customer is Admin or Supervisor

    }catch(error){
        res.status(500).json({message: 'Error while fetching users'})
    }
}

const updateUser = async (req,res) =>{
    try{
    const userToUpdate = await User.findById(req.params.id);
    if (!userToUpdate){
        return res.status(404).json({message: 'User not found '});
    }
    if (userToUpdate.role === 'admin' && req.user.role !== 'admin'){
        return res.status(403).json({message: 'Not authorized to update admin users'});
    }
    userToUpdate.username = req.body.username || userToUpdate.username;
    userToUpdate.email = req.body.email || userToUpdate.email;

    if (req.body.role && req.user.role === 'admin'){
        userToUpdate.role = req.body.role;
    }
    
    const updatedUser = await userToUpdate.save();
    res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role
    });
}catch(error){
    console.log(error);
    res.status(500).json({message: 'Server error while updating user'})
    }
};


export {deleteUser,registerUser, getProfile, loginUser, updateProfile, getUsers, updateUser};