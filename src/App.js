import Header from "./Header.js";
import ShowTask from "./ShowTask.js";
import AddTask from "./AddTask.js";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState([]);
  const [updatedTask, setUpdatedTask] = useState("");

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
      />
    </div>
  );
}

export default App;
