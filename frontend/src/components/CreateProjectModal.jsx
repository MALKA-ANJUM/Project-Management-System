import React, { useState } from "react";
import api from "../services/api";

const CreateProjectModal = ({ refresh }) => {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const createProject = async () => {
        if (!title.trim()) return alert("Project title is required");

        try {
        setLoading(true);
        await api.post("/projects", { title });

        setTitle("");
        refresh(); // 🔄 reload projects

        // ✅ Close modal manually
        const modal = document.getElementById("createProjectModal");
        const backdrop = document.querySelector(".modal-backdrop");

        modal.classList.remove("show");
        modal.style.display = "none";
        backdrop?.remove();
        document.body.classList.remove("modal-open");

        } catch (err) {
        alert("Failed to create project");
        } finally {
        setLoading(false);
        }
    };

    return (
        <>
            <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#createProjectModal"
            >
                + New Project
            </button>

            <div className="modal fade" id="createProjectModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                        <h5 className="modal-title">Create Project</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Project title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        </div>

                        <div className="modal-footer">
                        <button
                            className="btn btn-primary"
                            onClick={createProject}
                            disabled={loading}
                        >
                            {loading ? "Creating..." : "Create"}
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateProjectModal;
