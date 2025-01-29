import React from "react";

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? "line-through text-gray-500" : ""}>
        {todo.text}
      </span>
    </div>
  );
};

export default toDoItems;  
