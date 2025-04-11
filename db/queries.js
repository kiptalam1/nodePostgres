const pool = require("./pool");

async function getAllUsernames() {
	const { rows } = await pool.query("SELECT * FROM usernames");
	return rows;
}

async function getUsernamesBySearch(search) {
	const result = await pool.query(
		"SELECT * FROM usernames WHERE username ILIKE $1",[`%${search}%`]
	);
	return result.rows;
}

async function insertUsername(username) {
	await pool.query("INSERT INTO usernames (username) VALUES($1)", [username]);
}
async function deleteAllUsernames() {
	const result = await pool.query("DELETE FROM usernames");
	return result;
}

module.exports = {
	getAllUsernames,
	getUsernamesBySearch,
	insertUsername,
	deleteAllUsernames,
};
