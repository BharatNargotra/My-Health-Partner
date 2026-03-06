import { useState, useEffect } from "react";
import API from "../api";

function MealForm() {
  const [meal, setMeal] = useState({
    mealName: "",
    calories: "",
    protein: "",
    carbs: "",
    fats: ""
  });

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    const res = await API.get("/meals/today");
    setMeals(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/meals", meal);

    setMeal({
      mealName: "",
      calories: "",
      protein: "",
      carbs: "",
      fats: ""
    });

    fetchMeals();
  };

  const totalCalories = meals.reduce((acc, m) => acc + m.calories, 0);
  const totalProtein = meals.reduce((acc, m) => acc + m.protein, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Add Meal</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Meal Name"
          value={meal.mealName}
          onChange={e => setMeal({ ...meal, mealName: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Calories"
          value={meal.calories}
          onChange={e => setMeal({ ...meal, calories: Number(e.target.value) })}
          required
        />

        <input
          type="number"
          placeholder="Protein (g)"
          value={meal.protein}
          onChange={e => setMeal({ ...meal, protein: Number(e.target.value) })}
        />

        <input
          type="number"
          placeholder="Carbs (g)"
          value={meal.carbs}
          onChange={e => setMeal({ ...meal, carbs: Number(e.target.value) })}
        />

        <input
          type="number"
          placeholder="Fats (g)"
          value={meal.fats}
          onChange={e => setMeal({ ...meal, fats: Number(e.target.value) })}
        />

        <button type="submit">Add Meal</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h4>Today's Summary</h4>
        <p>Total Calories: {totalCalories}</p>
        <p>Total Protein: {totalProtein}g</p>
      </div>

      <ul>
        {meals.map((m) => (
          <li key={m._id}>
            {m.mealName} - {m.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealForm;