import React, { useState } from "react";
import { Tasks } from "./Tasks";

const Todolist = () => {
  const [Task, setTask] = useState("");
  const [showtask, setshowtask] = useState([]);

  const inputTask = (event) => {
    setTask(event.target.value);
    console.log(event.target.value);
  };

  const AddTask = (event) => {
    setshowtask((oldtasks) => {
      return [...oldtasks, Task];
    });
    setTask("");
    event.preventDefault();
  };

  const deleteTask = (id) => {
    console.log("deleted");
    setshowtask((Tasks) => {
      return Tasks.filter((Alltasks, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_list">
          <br />
          <h1 className="center_div_heading">Add a new task</h1>
          <input
            className="input"
            type="text"
            size="30"
            placeholder="Add Task Here"
            onChange={inputTask}
            value={Task}
            
          />

          <button className="btn" onClick={AddTask}>
            Add Task
          </button>
          <br />
          <br />
          <hr />

          <ol className="orderedList">
            {showtask.map((AllTask, index, arr) => {
              return (
                <>
                  <Tasks
                    task={AllTask}
                    key={index}
                    id={index}
                    onSelect={deleteTask}
                  />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export { Todolist };
