import { useSelector } from "react-redux";
import Task from "../../components/Task/Task";
import AddTask from "../../components/AddTask/AddTask";

function List() {
  const tasks = useSelector((state) => state);
  return (
    <div className="container">
      <AddTask />
      <div className="task-container">
        {tasks.map((el) => (
          <Task task={el.task} />
        ))}
      </div>
    </div>
  );
}

export default List;
