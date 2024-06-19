import express from "express";
import {
  addToCart,
  hello,
  login,
  register,
} from "../controllers/UserController.js";
import checkIsUserAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/hello", checkIsUserAuthenticated, hello);
router.post("/add", checkIsUserAuthenticated, addToCart);

export default router;
