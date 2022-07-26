import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.length > 0
        ? tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))
        : "No task to display!"}
    </>
  );
};

export default Tasks;
