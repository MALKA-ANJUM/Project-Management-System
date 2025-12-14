import React, { useState } from "react";
import api from "../services/api";

const CreateProjectModal = ({ refresh }) => {
    const [title, setTitle] = useState("");

    const createProject = async () => {
        await api.post("/projects", { title });
        refresh();
    };
    return (
        <>
            <button 
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#createProjectModal">
                        + New Project
            </button>

            <div className="modal fade" id="createProjectModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Create Project</h5>
                        </div>
                        <div className="modal-body">
                            <input type="text" 
                                className="form-control"
                                placeholder="title"
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={createProject}>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateProjectModal;
