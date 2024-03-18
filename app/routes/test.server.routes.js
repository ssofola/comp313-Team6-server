const express = require("express");
const router = express.Router();

const { getTests, getTest, createTest, updateTest, deleteTest } = require("../controllers/test.server.controller")

router.get("/", getTests);

router.get("/:id", getTest);

router.post("/", createTest);

router.put("/:id", updateTest);

router.delete("/:id", deleteTest);

module.exports = router;