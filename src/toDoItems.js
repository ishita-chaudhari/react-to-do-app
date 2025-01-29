
import React from 'react';

function TodoItems({ tasks, toggleComplete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
