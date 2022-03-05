const express = require("express");
const mongoose = require("mongoose");

const user = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/api/user", user);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log("Escuchando Puerto: " + port));

mongoose.connect("mongodb://localhost/book", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a Mongo DB"))
  .catch(error => console.log("No se ha conectado a Mongo DB"));