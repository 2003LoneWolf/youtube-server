const express = require("express");
const videoRouter = require("./routes/videoRoutes");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://iron57441:Iron57441@cluster0.ol19xht.mongodb.net/youtube_db"
  )
  .then(() => {
    console.log("DB connected");
  });

const app = express();
app.use(express.json());
app.use(cors());

app.use(videoRouter);
app.use(authRouter);

app.listen(3000, myCallbackFunction);

function myCallbackFunction() {
  console.log("Server Started");
}
