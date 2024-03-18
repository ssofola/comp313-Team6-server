const User= require('../models/user.server.model')
const {compare} = require("bcrypt");

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

// Retrieve a list of users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

// Retrieve a single user by ID
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user= await User.findOne({ email });
    if(!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Check if the password is correct
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

// Update an existing user
const updateUser = async (req, res)=> {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if(!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedUser = await User.findById(id);
    res.status(203).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

// Delete an existing user
const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      if(!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(204).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  userLogin,
  updateUser,
  deleteUser
}
