import { useState, useEffect } from "react";
import API from "../api";

function Workout() {
  const [workout, setWorkout] = useState({
    exercise: "",
    sets: "",
    reps: "",
    duration: ""
  });

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const res = await API.get("/workouts/today");
    setWorkouts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/workouts", workout);

    setWorkout({
      exercise: "",
      sets: "",
      reps: "",
      duration: ""
    });

    fetchWorkouts();
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Add Workout</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Exercise Name"
          value={workout.exercise}
          onChange={e => setWorkout({ ...workout, exercise: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Sets"
          value={workout.sets}
          onChange={e => setWorkout({ ...workout, sets: Number(e.target.value) })}
        />

        <input
          type="number"
          placeholder="Reps"
          value={workout.reps}
          onChange={e => setWorkout({ ...workout, reps: Number(e.target.value) })}
        />

        <input
          type="number"
          placeholder="Duration (minutes)"
          value={workout.duration}
          onChange={e => setWorkout({ ...workout, duration: Number(e.target.value) })}
        />

        <button type="submit">Add Workout</button>
      </form>

      <ul style={{ marginTop: "20px" }}>
        {workouts.map((w) => (
          <li key={w._id}>
            {w.exercise} - {w.sets}x{w.reps} ({w.duration} min)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workout;