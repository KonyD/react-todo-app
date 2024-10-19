import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks(t => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
        setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index !== tasks.length-1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
        setTasks(updatedTasks);
    }
  }

  return (
    <>
      <h2>React Todo App</h2>
      <div className="header">
        <input value={newTask} onChange={handleInputChange} type="text" id="taskInput" />
        <button onClick={addTask} className="addButton">
          Add
        </button>
      </div>
      <ul id="taskList">
        {tasks.map((task, index) => (
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete ❌</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>Move Down ⬇️</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>Move Up⬆️</button>
            </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
