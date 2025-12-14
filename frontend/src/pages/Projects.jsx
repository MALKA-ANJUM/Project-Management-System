import React, { useEffect, useState } from 'react'
import api from '../services/api';
import ProjectCard from '../components/ProjectCard';
import CreateProjectModal from '../components/CreateProjectModal';

const Projects = () => {
    const [projects, setProjects] = useState([]);

  
    const fetchProjects = async () => {
        const res = await api.get("/projects");
        setProjects(res.data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h3>My Projects</h3>
                <CreateProjectModal refresh={fetchProjects} />
            </div>
            <div className="row">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </>
    )
}

export default Projects
