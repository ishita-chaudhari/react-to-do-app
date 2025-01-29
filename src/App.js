
import React, { useState } from 'react';
import './App.css';
import TodoItems from './TodoItems';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>React To-Do App</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <TodoItems tasks={tasks} toggleComplete={toggleComplete} />

      <button onClick={clearAll} className="clear-all">
        Clear All Tasks
      </button>
    </div>
  );
}

export default App;
