import {  useState } from "react";
import api from "../services/api";

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get(`/tasks/project/${projectId}`);
    setTasks(res.data.tasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="card mb-2">
          <div className="card-body d-flex justify-content-between">
            <div>
              <h6>{task.title}</h6>
              <span>
                {task.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskList;