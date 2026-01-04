import React, { useState } from "react";
import api from "../services/api";
import { Modal } from "bootstrap";


const CreateProjectModal = ({ refresh }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createProject = async () => {
    if (!form.title.trim()) {
      return alert("Project title is required");
    }

    try {
      setLoading(true);

      await api.post("/projects", form);

      setForm({
        title: "",
        description: "",
        start_date: "",
        end_date: "",
      });

      refresh();

      // Close modal properly
        const modalEl = document.getElementById("createProjectModal");
        const modal = Modal.getInstance(modalEl);
        modal.hide();
        // ✅ CLEANUP (important)
modalEl.addEventListener(
  "hidden.bs.modal",
  () => {
    modal.dispose();
  },
  { once: true }
);
    } catch (err) {
      alert(err);
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
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                  value={form.description}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="start_date"
                    value={form.start_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="end_date"
                    value={form.end_date}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={createProject}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Project"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProjectModal;
