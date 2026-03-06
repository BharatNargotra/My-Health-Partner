import Workout from "../models/Workout.js";

/* ===============================
   Add Workout
================================ */
export const addWorkout = async (req, res) => {
  try {
    const { exercise, sets, reps, duration } = req.body;

    const workout = await Workout.create({
      user: req.user,
      exercise,
      sets,
      reps,
      duration
    });

    res.status(201).json(workout);

  } catch (error) {
    res.status(500).json({ message: "Error adding workout" });
  }
};


/* ===============================
   Get Today's Workouts
================================ */
export const getTodayWorkouts = async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const workouts = await Workout.find({
      user: req.user,
      date: { $gte: start, $lte: end }
    }).sort({ date: -1 });

    res.json(workouts);

  } catch (error) {
    res.status(500).json({ message: "Error fetching workouts" });
  }
};