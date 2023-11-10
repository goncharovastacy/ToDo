function Task(props) {
  const { task } = props;
  return (
    <div className="task">
      <p>{task}</p>
      <input type="checkbox" />
    </div>
  );
}

export default Task;
