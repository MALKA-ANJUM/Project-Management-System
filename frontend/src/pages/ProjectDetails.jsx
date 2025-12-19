import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

const ProjectDetails = () => {
	const { id } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		api.get(`/projects/${id}`).then((res) => setProject(res.data));
	}, [id]);

	if (!project) return <p>No Project found</p>;
	return (
		<div>
			<Navbar />
			<div className="container mt-4">
				<h3>{project.title}</h3>

				<hr />

				<h5>Members</h5>
				<ul>
					{project.members.map((m) => (
					<li key={m.id}>{m.email}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectDetails;
