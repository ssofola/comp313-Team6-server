const express = require("express");
const router = express.Router();
const {
  getAdverts,
  getAdvert,
  createAdvert,
  updateAdvert,
  deleteAdvert,
} = require("../controllers/advert.server.controller");

router.get("/", getAdverts);

router.get("/:id", getAdvert);

router.post("/", createAdvert);

router.put("/:id", updateAdvert);

router.delete("/:id", deleteAdvert);

module.exports = router;
