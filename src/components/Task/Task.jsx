import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask } from "../../Redux/action";
function Task(props) {
  const { task, id } = props;
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleCheck = (e) => {
    setChecked(true);
    dispatch(completeTask(id));
  };
  return (
    <div className="task">
      <p>{task}</p>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
    </div>
  );
}

export default Task;
