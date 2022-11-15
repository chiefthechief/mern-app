const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const url = "mongodb+srv://cujothechief:14343297332@cluster0.u7bbr2v.mongodb.net/MERN-APP?retryWrites=true&w=majority";
const studentRoutes = require("./routes/student.js");

const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
app.use("/students", studentRoutes);
// const PORT = process.env.PORT || 5000;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("connected to database"))
   .catch(err => console.log(err.message));

app.listen(3001, () => {
   console.log("server is up and running");
});