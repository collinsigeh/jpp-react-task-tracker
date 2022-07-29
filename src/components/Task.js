const Task = ({ task }) => {
  return (
    <>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
    </>
  )
}

export default Task