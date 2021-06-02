const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;
const userRouter = require("./routes/user.js");
const cors = require("cors");
const query = require("./services/db.js");
const config = require("./config");
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.post("/user", (req, res) => {
	const id = req.body.id;
	const username = req.body.username;
	const pass = req.body.pass;
	const name = req.body.name;
	const email = req.body.email;
	const role = req.body.role;

	const sqlInsert = `INSERT INTO users (id,username,pass,name,email,role) 
	VALUES(?, ?, ?, ?, ?, ?)`;
	//[user.id, user.username, user.pass, user.name, user.email, user.role]

	config.query(
		sqlInsert,
		[id, username, pass, name, email, role],
		(err, result) => {
			console.log(err);
			res.send("Form Submitted");
		}
	);
});

app.get("/", (req, res) => {
	res.json({ message: "ok" });
});

app.use("/user", userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({ message: err.message });

	return;
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
