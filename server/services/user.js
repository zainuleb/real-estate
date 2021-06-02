/* Another service is user.js, which will have methods like getMultiple, create, etc. 
to get and create the users resource. Basic mapping of the URI and the related service function will look like below:

GET /users → getMultiple()
POST /users → create()
PUT /users/:id → update()
DELETE /users/:id → remove() */

const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT id,username,pass,name,email,role 
    FROM users LIMIT ?,?`,
		[offset, config.listPerPage]
	);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

async function create(user) {
	const result = await db.query(
		`INSERT INTO users
    (id,username,pass,name,email,role) 
    VALUES 
    (?, ?, ?, ?, ?, ?)`,
		[user.id, user.username, user.pass, user.name, user.email, user.role]
	);

	let message = "Error in creating User";

	if (result.affectedRows) {
		message = "User created successfully";
	}

	return { message };
}

async function update(id, user) {
	const result = await db.query(
		`UPDATE users
	  SET username=?,name=?, pass=?, 
	  email=?, role=? 
	  WHERE id=?`,
		[user.username, user.pass, user.name, user.email, user.role, id]
	);

	let message = "Error in updating users";

	if (result.affectedRows) {
		message = "Users updated successfully";
	}

	return { message };
}

async function remove(id) {
	const result = await db.query(`DELETE FROM users WHERE id=?`, [id]);

	let message = "Error in deleting Users";

	if (result.affectedRows) {
		message = "Users deleted successfully";
	}

	return { message };
}

module.exports = {
	getMultiple,
	create,
	update,
	remove,
};
