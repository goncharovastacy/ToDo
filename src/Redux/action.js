export const addNewTask = (task) => ({ type: "ADD", payload: task });

export const completeTask = (id) => ({ type: "COMPLETE", payload: id });
