const express = require("express");
const router = express.Router();
const {
  getAdverts,
  getAdvert,
  createAdvert,
  updateAdvert,
  deleteAdvert,
} = require("../controllers/advert.server.controller");

router.post("/", createAdvert);
router.get("/", getAdverts);
router.get("/:id", getAdvert);

router.put("/:id", updateAdvert);
router.delete("/:id", deleteAdvert);

module.exports = router;