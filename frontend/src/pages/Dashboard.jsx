import React from 'react';
import Navbar from "../components/Navbar";
import Projects from "./Projects";

const Dashboard = () => {
	return (
		<>
		<Navbar />
		<div className="container mt-4">
			<Projects />
		</div>
		</>
	)
}

export default Dashboard
