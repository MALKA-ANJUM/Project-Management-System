import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5>{project.title}</h5>
          <p>{project.description}</p>

          <button
            className="btn btn-outline-primary"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
