const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./Routers/router");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const DB_Url = process.env.DB_Url;
const Port = process.env.Port;


app.use("/products", productRouter);







mongoose.connect(DB_Url).then(() => {
  app.listen(Port, () => {
    console.log(`http://localhost:${Port}`);
  });
  console.log("Connected!");
});