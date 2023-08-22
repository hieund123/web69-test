import React from "react";

const Form = ({ addTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const taskTitle = event.target.elements.task.value;
    if (taskTitle) {
      addTask(taskTitle);
      event.target.reset();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="task" placeholder="Enter task ..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
