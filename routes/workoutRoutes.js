import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addWorkout, getTodayWorkouts } from "../controllers/workoutController.js";

const router = express.Router();

router.post("/", protect, addWorkout);
router.get("/today", protect, getTodayWorkouts);

export default router;