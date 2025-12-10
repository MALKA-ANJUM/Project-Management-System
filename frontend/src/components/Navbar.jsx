import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);
	return (
		<nav className='navbar navbar-dark bg-dark px-3'>
			<span className="navbar-brand">Project Manager</span>
			<div className="text-white">
				{user?.name}
				<button className='btn btn-sm btn-outline-light ms-3' onClick={logout}>
					Logout
				</button>
			</div>
		</nav>
	)
}

export default Navbar
