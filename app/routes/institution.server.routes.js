const express = require("express");
const router = express.Router();
const {
    getInstitutions,
    getInstitution,
    createInstitution,
    updateInstitution,
    deleteInstitution
} = require("../controllers/institution.server.controller");

router.post("/", createInstitution);
router.get("/", getInstitutions);
router.get("/:id", getInstitution);
router.put("/:id", updateInstitution);
router.delete("/:id", deleteInstitution);

module.exports = router;