const db = require("../db/queries");

async function getUsernames(req, res) {
	const search = req.query.search || "";
	const usernames = await db.getUsernamesBySearch(search);
	console.log("Usernames: ", usernames);
	// res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
	res.render("index", { usernames, search })
}

function createUsernameGet(req, res) {
	res.render("userForm", {
		errors: [],
		userName: "",
	});
}

async function createUsernamePost(req, res) {
	const { username } = req.body;
	await db.insertUsername(username);
	res.redirect("./");
}

async function deleteAllUsernames(req, res) {
	try{
		await db.deleteAllUsernames();
		res.redirect("/")
	} catch(error) {
		console.error("Error deleting usernames: ", error);
		res.status(500).send("Something went wrong");
	}
}

module.exports = {
	getUsernames,
	createUsernameGet,
	createUsernamePost,
	deleteAllUsernames,
};
