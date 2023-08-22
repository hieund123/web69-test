import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ tasks, toggleDone }) => {
  return (
    <div className="todo-list-container">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`todo-item-container ${task.done ? "done" : ""}`}
        >
          <div className="item-done-button" onClick={() => toggleDone(index)}>
            {task.done ? (
              <FaRegCheckCircle className="item-done-button" color="#9a9a9a" />
            ) : (
              <FaRegCircle className="item-done-button" color="#9a9a9a" />
            )}
          </div>
          <div className="item-title">{task.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
