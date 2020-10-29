const mongoose = require("mongoose");

const mongoUri = "mongodb://127.0.0.1:27017/greenfield";

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongodb connected successfully");
});

