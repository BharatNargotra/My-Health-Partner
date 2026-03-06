import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  mealName: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number
}, { timestamps: true });

export default mongoose.model("Meal", mealSchema);