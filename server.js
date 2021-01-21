const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./seeders/seed.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

// app.post("/submit", ({ body }, res) => {
//     User.create(body)
//         .then((dbUser) => {
//             res.json(dbUser);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

//Routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});