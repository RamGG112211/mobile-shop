const express = require("express");
const {createProduct, updateProduct, deleteProduct, getAllProducts} = require("../controller/productController");




const router = express.Router();

router.post("/new", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/", getAllProducts);

module.exports = router