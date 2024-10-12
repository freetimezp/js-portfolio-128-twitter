import express from "express";

//import auth controllers
import { signup, login, logout, getMe } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

//signup
router.post("/signup", signup);

//login
router.post("/login", login);

//logout
router.post("/logout", logout);

//get me
router.get("/me", protectRoute, getMe);

export default router;
