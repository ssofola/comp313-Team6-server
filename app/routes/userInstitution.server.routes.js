const express = require("express");
const router = express.Router();

const { getUserInstitutions, getUserInstitution, createUserInstitution, updateUserInstitution, deleteUserInstitution } = require("../controllers/userInstitution.server.controller")

router.get("/", getUserInstitutions);

router.get("/:id", getUserInstitution);

router.post("/", createUserInstitution);

router.put("/:id", updateUserInstitution);

router.delete("/:id", deleteUserInstitution);

module.exports = router;