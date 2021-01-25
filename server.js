const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
// Setup Express
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || process.env.DB_HOST, {
    useNewUrlParser: true,
    useFindAndModify: false,
});
//Routes
console.log(app);
//require("./routes/api.js")(app);
//app.use(require(path.join(__dirname, "./routes/api.js")));
app.use(require("./routes/api.js"));

//Start Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});