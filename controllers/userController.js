function getUser(req, res) {
	res.render("userForm");
}

function postUser(req, res) {
	console.log("username to be saved: ", req.body.username);
	// success: render form again but with no errors
	//res.render("userForm", { errors: []});
}

module.exports = {
	getUser,
	postUser,
};
