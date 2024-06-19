import express from "express";
// import { hello, login, register } from "../controllers/UserController.js";
// import checkIsUserAuthenticated from "../middleware/authMiddleware.js";
import {
  addProduct,
  getAllProducts,
} from "../controllers/ProductController.js";

const router = express.Router();

router.post("/add", addProduct);
router.get("/all", getAllProducts);

export default router;
