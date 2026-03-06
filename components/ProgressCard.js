import { useEffect, useState } from "react";
import API from "../api";

function ProgressCard() {
  const [summary, setSummary] = useState({
    weeklyCalories: 0,
    weeklyProtein: 0,
    workoutCount: 0
  });

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    const res = await API.get("/progress/weekly");
    setSummary(res.data);
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    >
      <h3>Weekly Progress</h3>

      <p>Total Calories This Week: {summary.weeklyCalories}</p>
      <p>Total Protein This Week: {summary.weeklyProtein} g</p>
      <p>Total Workouts: {summary.workoutCount}</p>
    </div>
  );
}

export default ProgressCard;