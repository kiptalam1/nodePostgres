const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = 8000;

//set view engine.
app.set("view engine", "ejs");
app.use(express.static("public"));

// middleware
app.use(express.urlencoded({ extended: true }));

//mount routes
app.use("/", userRouter);

// app.get("/", (req, res) => {
// 	console.log("usernames will be logged here - wip");
// 	res.send("Hello world");
// });

// listen.
app.listen(PORT, () => {
	console.log(`listening at http://localhost:${PORT}`);
});
