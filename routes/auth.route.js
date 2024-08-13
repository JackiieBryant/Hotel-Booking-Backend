import express from "express";
import home from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/:message", home)

export default router;