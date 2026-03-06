import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  exercise: String,
  sets: Number,
  reps: Number,
  duration: Number
}, { timestamps: true });

export default mongoose.model("Workout", workoutSchema);