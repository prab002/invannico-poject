import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.DB_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("database connected success 🌐");
    app.listen(PORT, () => {
      console.log("backend is running at port ", PORT);
    });
  })
  .catch((e) => {
    console.log(e + "backend error");
  });

app.use("/api", route);
