import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import TaskCard from "../components/TaskCard";
import CreateTaskModal from "../components/CreateProjectModal";

const ProjectDetails = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get(`/tasks/${id}`);
    setTasks(res.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3>Tasks</h3>
        <CreateTaskModal projectId={id} refresh={fetchTasks} />
      </div>

      <div className="row">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} refresh={fetchTasks} />
        ))}
      </div>
    </>
  );
};

export default ProjectDetails;
