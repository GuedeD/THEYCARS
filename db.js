const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://DemaG:test1234@cluster0.4wovj.mongodb.net/theycarsDB?retryWrites=true&w=majority";

function connectDB() {
  mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true });

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
