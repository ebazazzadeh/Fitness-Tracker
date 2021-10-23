const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Elham:MongoDB635241@cluster0.jlwpa.mongodb.net/workout?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}!`);
});
