import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);

  // Get today's date (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  const addTask = () => {
    if (!task || !date || !time) {
      alert("Please enter task, date and time");
      return;
    }

    setTasks([
      ...tasks,
      { text: task, date, time }
    ]);

    setTask("");
    setDate("");
    setTime("");
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>📝 My To-Do App</h1>

        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="date"
          value={date}
          min={today}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>

        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <strong>{t.text}</strong>
              <span>📅 {t.date}</span>
              <span>⏰ {t.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
