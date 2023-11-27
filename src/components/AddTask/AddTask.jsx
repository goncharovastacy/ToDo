import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "./../../Redux/action";

function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const changeValue = (e) => {
    setTask(e.target.value);
  };
  const addTask = () => {
    dispatch(
      addNewTask({ task: task, id: Math.floor(Math.random() * 1000000) })
    );
    setTask("");
  };
  return (
    <div className="add-task-container">
      <input type="text" value={task} onChange={changeValue} />
      {task === "" ? (
        <button className="button-disabled" disabled>
          Добавить задачу
        </button>
      ) : (
        <button onClick={addTask}>Добавить задачу</button>
      )}
    </div>
  );
}

export default AddTask;
