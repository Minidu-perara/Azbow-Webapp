import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
