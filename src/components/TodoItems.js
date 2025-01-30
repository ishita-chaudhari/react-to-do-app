
import React from "react";

function TodoItems({ tasks, toggleTask, deleteTask }) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              margin: "0 10px",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
