import React, { useState, useEffect } from "react";
import Axios from "axios";

/* Stylesheet */
import "./StyleSheet/App.css";

function App() {
	const [username, setUsername] = useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");

	const submitUser = () => {
		Axios.post("http://localhost:3001/user", {
			username: username,
			pass: pass,
			name: name,
			email: email,
			role: role,
		}).then(() => {
			alert("Successful insert");
		});
	};

	return (
		<div className="App">
			<h1>Super Admin Dashboard</h1>
			<div className="superAdminForm">
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					name="pass"
					placeholder="Password"
					onChange={(e) => setPass(e.target.value)}
				/>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					name="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="text"
					name="role"
					placeholder="Role"
					onChange={(e) => setRole(e.target.value)}
				/>

				<button onClick={submitUser}>Submit</button>
			</div>
		</div>
	);
}

export default App;
