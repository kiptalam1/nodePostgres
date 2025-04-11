const { body, validationResult } = require("express-validator");

const validateUser = [
	// validation rules.
	body("username")
		.trim()
		.notEmpty()
		.withMessage("username is required")
		.isAlpha()
		.withMessage("username must be alphabets")
		.isLength({ min: 3, max: 26 })
		.withMessage("username must be between 3-26 characters!"),

	// middleware to handle validation result
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render("userForm", {
				errors: errors.array(),
			});
		}
		next();
	},
];

module.exports = validateUser;
