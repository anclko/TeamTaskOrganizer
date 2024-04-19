import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/dbConnection.js";

dotenv.config();
connectDb();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, localhost!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});