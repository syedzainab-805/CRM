const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/crmDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const customerRoutes = require("./routes/customerRoutes");
app.use("/customers", customerRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
