import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  const addTask = () => {
    if (!task || !date || !time) {
      alert("Please enter task, date and time");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        date,
        time,
        status: "pending"
      }
    ]);

    setTask("");
    setDate("");
    setTime("");
  };

  const completeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
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
          {tasks.map((t) => (
            <li key={t.id} className="task-item">
              <div className="task-info">
                <strong>{t.text}</strong>
                <span>📅 {t.date}</span>
                <span>⏰ {t.time}</span>
              </div>

              <div className="task-actions">
                <span className="pending">⚠️ Pending</span>
                <button onClick={() => completeTask(t.id)}>
                  ✅ Completed
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
