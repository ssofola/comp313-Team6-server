const express = require('express');
const router = express.Router();
const {
    getLocations,
    getLocation,
    createLocation,
    updateLocation,
    deleteLocation
} = require('../controllers/location.server.controller');

router.post("/", createLocation);
router.get("/", getLocations);
router.get("/:id", getLocation);
router.put("/:id", updateLocation);
router.delete("/:id", deleteLocation);

module.exports = router;