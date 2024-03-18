const UserInstitution = require('../models/userInstitution.server.model');

const getUserInstitutions = async (req, res) => {
    try {
        const userInstitutions = await UserInstitution.find({});
        res.status(200).json(userInstitutions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserInstitution = async (req, res) => {
    try {
        const { id } = req.params;
        const userInstitution = await UserInstitution.findById(id);
        if (!userInstitution) {
            return res.status(404).json({ message: 'UserInstitution not found' });
        }
        res.status(200).json(userInstitution);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createUserInstitution = async (req, res) => {
    try {
        const userInstitution = await UserInstitution.create(req.body);
        res.status(201).json(userInstitution);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUserInstitution = async (req, res) => {
    try {
        const { id } = req.params;
        const userInstitution = await UserInstitution.findByIdAndUpdate(id, req.body
            , { new: true });
        if (!userInstitution) {
            return res.status(404).json({ message: 'UserInstitution not found' });
        }
        res.status(200).json(userInstitution);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUserInstitution = async (req, res) => {
    try {
        const { id } = req.params;
        const userInstitution = await UserInstitution.findByIdAndDelete(id);
        if (!userInstitution) {
            return res.status(404).json({ message: 'UserInstitution not found' });
        }
        res.status(200).json({ message: 'UserInstitution deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getUserInstitutions, getUserInstitution, createUserInstitution, updateUserInstitution, deleteUserInstitution };