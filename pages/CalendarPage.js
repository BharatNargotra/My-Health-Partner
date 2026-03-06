import Calendar from "react-calendar";
import { useState } from "react";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2>Progress Calendar</h2>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default CalendarPage;