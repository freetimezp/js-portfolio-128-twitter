import express from "express";

import { protectRoute } from "../middleware/protectRoute.js";
import {
    createPost,
    deletePost,
    commentOnPost,
    likeUnlikePost
} from "../controllers/post.controller.js";

const router = express.Router();

//get post controllers
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/delete/:id", protectRoute, deletePost);


export default router;
