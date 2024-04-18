// 1 require express
const express = require("express");

// 2 create instance of express
const app = express();

// 3 middleware body-parser
app.use(express.json());

// simple route
app.get("/test", (req, res) => {
	res.send("hello nada");
});

// CRUD
let users = [
	{
		name: "Oussema",
		email: "oussema@gmail.com",
		id: 1,
	},
	{
		name: "Zaiden",
		email: "zaiden@gmail.com",
		id: 2,
	},
	{
		name: "Moudhafer",
		email: "moudhafer@gmail.com",
		id: 3,
	},
];

// get all users
app.get("/users", (req, res) => {
	res.status(200).send({ msg: "List of all users ..", users });
});

// add user
app.post("/adduser", (req, res) => {
	const newUser = req.body;
	users = [...users, newUser];
	res.status(200).send({ msg: "User added succ ", newUser });
});

// 4 create server
const port = 4444;

app.listen(port, (err) => {
	err ? console.log(err) : console.log(`Server is running on port ${port} ...`);
});
