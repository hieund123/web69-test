import React, { useState, useEffect } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const withDoneParam = queryParams.get("withDone");

  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskTitle) => {
    setTasks([...tasks, { title: taskTitle, done: false }]);
  };

  const toggleDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const navigate = useNavigate();
  const [showNotFinishedOnly, setShowNotFinishedOnly] = useState(
    withDoneParam === "1"
  );

  const toggleShowNotFinished = () => {
    setShowNotFinishedOnly(!showNotFinishedOnly);
    const newWithDoneParam = showNotFinishedOnly ? "0" : "1";
    navigate(`?withDone=${newWithDoneParam}`);
  };

  const filteredTasks = showNotFinishedOnly
    ? tasks.filter((task) => !task.done)
    : tasks;

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader
          tasks={tasks}
          toggleShowNotFinished={toggleShowNotFinished}
        />
        <TodoList tasks={filteredTasks} toggleDone={toggleDone} />
        <Form addTask={addTask} />
      </div>
      <Footer />
    </div>
  );
};
