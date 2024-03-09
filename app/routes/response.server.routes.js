const express = require("express");
const router = express.Router();

const { getResponses, getResponse, createResponse, updateResponse, deleteResponse } = require("../controllers/response.server.controller")

router.get("/", getResponses);

router.get("/:id", getResponse);

router.post("/", createResponse);

router.put("/:id", updateResponse);

router.delete("/:id", deleteResponse);

module.exports = ResponseRouter;
