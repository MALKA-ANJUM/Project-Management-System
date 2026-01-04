import api from "../services/api";

const TaskCard = ({ task, refresh }) => {
    const updateStatus = async (status) => {
        await api.put(`/tasks/${task.id}`, { status });
        refresh();
    };

    const deleteTask = async () => {
        await api.delete(`/tasks/${task.id}`);
        refresh();
    };

    return (
        <div className="col-md-4 mb-3">
        <div className="card">
            <div className="card-body">
            <h5>{task.title}</h5>
            <p>Status: {task.status}</p>

            <select
                className="form-select mb-2"
                onChange={(e) => updateStatus(e.target.value)}
            >
                <option>todo</option>
                <option>in-progress</option>
                <option>completed</option>
            </select>

            <button className="btn btn-danger btn-sm" onClick={deleteTask}>
                Delete
            </button>
            </div>
        </div>
        </div>
    );
};

export default TaskCard;
