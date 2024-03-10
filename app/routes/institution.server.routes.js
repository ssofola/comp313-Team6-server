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
router.get("/:institutionId", getInstitution);
router.put("/:institutionId", updateInstitution);
router.delete("/:institutionId", deleteInstitution);

module.exports = router;