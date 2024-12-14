import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./taskSlice"; // Ensure this action is correctly implemented
import { useState } from "react";

const TaskForm = () => {
  const tasks = useSelector((state) => state.task.tasks) || []; // Fallback to empty array
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      status: 'pending',
    };
    dispatch(addTask(newTask)); // Dispatch the task to Redux
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('low');
  };

  let sno = 0;

  const taskList = tasks.map((task) => {
    sno++;
    return (
      <tr key={task.id}>
        <td>{sno}</td>
        <td>
          {task.status === "completed" ? (
            <span style={{ color: "red", textDecoration: "line-through" }}>
              {task.title}
            </span>
          ) : (
            task.title
          )}
        </td>
        <td>{task.description}</td>
        <td>{task.dueDate}</td>
        <td>{task.priority}</td>
        <td>
          <button>Mark Complete</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>Task Management System!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <br />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <hr size="4" color="blue" />
      <table border="1" width="600">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{taskList}</tbody>
      </table>
    </>
  );
};

export default TaskForm;
