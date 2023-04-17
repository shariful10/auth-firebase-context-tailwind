import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
	const { user, createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, email, password);

		createUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				form.reset();
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Please Register!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								required
								type="name"
								name="name"
								placeholder="Name"
								className="input input-bordered focus:outline-none"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								required
								type="email"
								name="email"
								placeholder="Email"
								className="input input-bordered focus:outline-none"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								required
								type="password"
								name="password"
								placeholder="Password"
								className="input input-bordered focus:outline-none"
							/>
							<label className="label">
								<Link to="/login" className="label-text-alt link link-hover">
									Already have an account?
								</Link>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
