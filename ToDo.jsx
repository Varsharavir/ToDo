import React, { useState } from "react";
import "./ToDo.css"; 

function ToDo() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  
  const handleAddOrEditTask = () => {
    if (task.trim() !== "") {
      if (isEditing) {
        const updatedList = [...todoList];
        updatedList[currentTaskIndex] = task;
        setTodoList(updatedList);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTodoList([...todoList, task]);
      }
      setTask(""); 
    }
  };

  
  const handleDeleteTask = (index) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  
  const handleEditTask = (index) => {
    setTask(todoList[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddOrEditTask}>
          {isEditing ? "Update" : "Add Task"}
        </button>
      </div>

      
      {todoList.length > 0 && (
        <table className="todo-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td>
                  <button onClick={() => handleEditTask(index)}>Edit</button>
                  <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ToDo;
