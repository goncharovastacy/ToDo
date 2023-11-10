import Task from "./components/Task/Task";
import AddTask from "./components/AddTask/AddTask";
import "./style/style.scss";

function App() {
  const tasks = ["сделать что-то", "еще что-то сделать"];
  return (
    <div className="container">
      <AddTask />
      <div className="task-container">
        {tasks.map((el) => (
          <Task task={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
