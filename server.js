const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();

//const User = require("./seeders/seed.js");

// Middleware
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
console.log(app);
require("./routes/api.js")(app);
// app.use(require(path.join(__dirname, "./routes/api.js")));
// app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI || process.env.DB_HOST, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

//Start Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});