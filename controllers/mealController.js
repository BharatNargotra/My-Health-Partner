import Meal from "../models/Meal.js";

/* ===============================
   Add Meal
================================ */
export const addMeal = async (req, res) => {
  try {
    const { mealName, calories, protein, carbs, fats } = req.body;

    const meal = await Meal.create({
      user: req.user,
      mealName,
      calories,
      protein,
      carbs,
      fats
    });

    res.status(201).json(meal);

  } catch (error) {
    res.status(500).json({ message: "Error adding meal" });
  }
};


/* ===============================
   Get Today's Meals
================================ */
export const getTodayMeals = async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const meals = await Meal.find({
      user: req.user,
      date: { $gte: start, $lte: end }
    }).sort({ date: -1 });

    res.json(meals);

  } catch (error) {
    res.status(500).json({ message: "Error fetching meals" });
  }
};