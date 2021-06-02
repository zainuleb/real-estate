/* config.js will have configurations like the database credentials and rows per page we want to show when we paginate results. */

const env = process.env;

const config = {
	db: {
		/* don't expose password or any sensitive info, done only for demo */
		host: env.DB_HOST || "localhost",
		user: env.DB_USER || "root",
		password: env.DB_PASSWORD || "",
		database: env.DB_NAME || "real_estate_db",
	},
	listPerPage: env.LIST_PER_PAGE || 4,
};

module.exports = config;
