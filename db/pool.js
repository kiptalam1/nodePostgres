const { Pool } = require("pg");

module.exports = new Pool({
	host: "localhost",
	user: "adams",
	database: "top_users",
	password: "adams",
	port: 5432,
});


// connection URL.
// const { Pool } = require("pg");

// // Again, this should be read from an environment variable
// module.exports = new Pool({
// 	connectionString:
// 		"postgresql://<role_name>:<role_password>@localhost:5432/top_users",
// });