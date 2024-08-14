import express from "express";
import home, { register } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/:message", home);
router.post("/register", register);

export default router;