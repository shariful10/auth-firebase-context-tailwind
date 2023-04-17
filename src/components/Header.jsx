import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<div className="navbar bg-primary text-primary-content">
				<a className="normal-case text-xl">Auth Master</a>
				<Link className="normal-case text-xl mx-4" to="/">Home</Link>
				<Link className="normal-case text-xl mx-4" to="/login">Login</Link>
				<Link className="normal-case text-xl mx-4" to="/register">Register</Link>
			</div>
		</div>
	);
};

export default Header;
