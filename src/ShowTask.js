import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  //   const tasks = [
  //     { id: 100, name: "Task A", time: "2:09:01 AM 9/14/2030" },
  //     { id: 101, name: "Task B", time: "2:09:01 AM 9/14/2030" },
  //     { id: 102, name: "Task C", time: "2:09:01 AM 9/14/2030" },
  //   ];
  const handleEdit = (id) => {
    //console.log(id);
    const selectedTask = taskList.find((todo, i) => {
      return todo.id === id;
    });
    //onsole.log(selectedTask.name);
    setTask(selectedTask);
  };
  const handleDelete = (id) => {
    const temp = taskList.filter((val, i) => {
      return val.id !== id;
    });

    setTaskList(temp);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        {taskList?.map((task, i) => {
          return (
            <>
              <li key={task.i}>
                <p>
                  <span className="name">{task.name}</span>
                  <span className="time">{task.time}</span>
                </p>
                <EditIcon onClick={(e) => handleEdit(task.id)} />
                <DeleteOutlineIcon onClick={(e) => handleDelete(task.id)} />
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default ShowTask;
