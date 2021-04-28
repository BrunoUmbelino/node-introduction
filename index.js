const express = require("express");
const bodyParse = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(bodyParse.urlencoded({ extended: false }));

userRoutes(app);

app.get("/", (req, res) => res.send("express responde"));

app.listen(port, () => console.log("api rodando na porta ", port));
