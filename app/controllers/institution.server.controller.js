const Institution = require('../models/institution.server.model');

const createInstitution = async (req, res) => {
  try {
    const institution = await Institution.create(req.body);
    res.status(201).json(institution);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

const getInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find({});
    res.status(200).json(institutions);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

const getInstitution = async (req, res) => {
  try {
    const { id } = req.params;
    const institution = await Institution.findById(id);
    res.status(200).json(institution);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

const updateInstitution = async (req, res) => {
  try {
    const { id } = req.params;
    const institution = await Institution.findByIdAndUpdate(id, req.body);
    if(!institution) {
      return res.status(404).json({ error: 'Institution not found' });
    }
    const updatedInstitution = await Institution.findById(id);
    res.status(203).json(updatedInstitution);
  }
  catch (error) {
    res.status(500).json({ message: error.message});
  }
}

const deleteInstitution = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInstitution = await Institution.findByIdAndDelete(id);
    if(!deletedInstitution) {
      res.status(404).json({ error: 'Institution not found'})
    }
    res.status(204).json({ message: 'Institution deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message});
  }
};


module.exports = { createInstitution, getInstitutions, getInstitution, updateInstitution, deleteInstitution }
