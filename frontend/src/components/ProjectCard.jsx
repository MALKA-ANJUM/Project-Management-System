import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>

                    <Link to={`/projects/${project.id}`} className='btn btn-primary btn-sm'>
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
