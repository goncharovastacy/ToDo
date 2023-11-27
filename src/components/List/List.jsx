import { useSelector } from "react-redux";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";

function List() {
  const tasks = useSelector((state) => state);
  return (
    <div className="container">
      <AddTask />
      <div className="task-container">
        {tasks.length !== 0 ? (
          tasks.map((el) => <Task task={el.task} key={el.id} id={el.id} />)
        ) : (
          <p>Задач нет</p>
        )}
      </div>
    </div>
  );
}

export default List;
