import React from "react";

const Header = ({ tasks, toggleShowNotFinished }) => {
  const tasksRemaining = tasks.filter((task) => !task.done).length;
  return (
    <div className="header">
      <div>You have {tasksRemaining} tasks left!</div>
      <div className="notFinishOnly">
        <input
          type="checkbox"
          id="notFinishedCheckbox"
          onChange={toggleShowNotFinished}
        />
        <label htmlFor="notFinishedCheckbox">
          <div>Not finished only</div>
        </label>
      </div>
    </div>
  );
};

export default Header;
