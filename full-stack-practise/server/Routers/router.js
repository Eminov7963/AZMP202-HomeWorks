const express = require("express");
const {
  getAllProducts,
  getDataById,
  searchById,
  deleteProduct,
  postProduct,
  editProduct,
} = require("../Controllers/controller");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/search", searchById);
router.get("/:id", getDataById);
router.delete("/:id", deleteProduct);
router.post("/", postProduct);
router.put("/:id", editProduct);

module.exports = router;
