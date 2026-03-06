import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  height: Number,
  weight: Number,
  age: Number,
  gender: String,
  goal: { type: String, enum: ["cutting", "bulking", "maintaining"] }
}, { timestamps: true });

export default mongoose.model("User", userSchema);