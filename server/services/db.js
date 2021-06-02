/* The services folder will house all our services. 
One of them is db.js, used to talk with the MySQL database. */

const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql, params) {
	const connection = await mysql.createConnection(config.db);
	const [results] = await connection.execute(sql, params);
	return results;
}

module.exports = {
	query,
};
