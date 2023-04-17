import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signIn(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Please Login!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Email <span className="text-red-600">*</span>
								</span>
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
								<span className="label-text">
									Password <span className="text-red-600">*</span>
								</span>
							</label>
							<input
								required
								type="password"
								name="password"
								placeholder="Password"
								className="input input-bordered focus:outline-none"
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
					<p className="mb-4 ml-8">
						<Link to="/register" className="label-text-alt link link-hover">
							New to Auth Master? Please Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
