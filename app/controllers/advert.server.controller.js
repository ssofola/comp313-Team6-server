const Advert = require("../models/advert.server.model");


const createAdvert = async (req, res) => {
  try {
    const advert = await Advert.create(req.body);
    res.status(200).json(advert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdverts = async (req, res) => {
  try {
    const adverts = await Advert.find({});
    res.status(200).json(adverts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdvert = async (req, res) => {
  try {
    const { id } = req.params;
    const advert = await Advert.findById(id);
    res.status(200).json(advert);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const updateAdvert = async (req, res) => {
  try {
    const { id } = req.params;
    const advert = await Advert.findByIdAndUpdate(id, req.body);
    if (!advert) {
      return res.status(404).json({ message: "Advert not found" });
    }
    const updatedAdvert = await Advert.findById(id);
    res.status(200).json(updatedAdvert);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdvert = async (req, res) => {
    try{ 
        const { id } = req.params;
        const advert = await Advert.findByIdAndDelete(id);
        if(!advert){
            return res.status(404).json({message: "Advert not found"});
        }
        res.status(200).json({message: "Advert deleted successfully"})
    } catch{
        res.status(500).json({message: error.message});
    }
};

module.exports = {
  getAdverts,
  getAdvert,
  createAdvert,
  updateAdvert,
  deleteAdvert
};
