import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addMeal, getTodayMeals } from "../controllers/mealController.js";

const router = express.Router();

router.post("/", protect, addMeal);
router.get("/today", protect, getTodayMeals);

export default router;