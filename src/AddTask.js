import React, { useState } from "react";
const AddTask = ({
  taskList,
  setTaskList,
  task,
  setTask,
  updatedTask,
  setUpdatedTask,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      //console.log(task);
      const date = new Date();
      const updateTask = taskList.map((todo, i) => {
        if (task.id !== todo.id) {
          return todo;
        } else {
          console.log(task.name);
          const newTask = {
            id: date.getDate(),
            name: task.name,
            time: `${date.toLocaleTimeString()}${date.toLocaleDateString()} `,
          };
          //console.log(task.name);
          return newTask;
        }
      });
      setTask({ name: "" });
      console.log(updateTask);
      setTaskList(updateTask);
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()}${date.toLocaleDateString()} `,
      };
      //console.log(newTask);
      setTaskList([...taskList, newTask]);
      setTask({ name: "" });
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          maxLength={25}
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        ></input>
        {task.id ? (
          <button type="submit">Update</button>
        ) : (
          <button type="submit">Add</button>
        )}
      </form>
    </section>
  );
};

export default AddTask;
