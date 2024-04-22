import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/dbConnection.js";
import { router } from "./routes/companyRoutes.js";
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();
connectDb();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDirectory = path.join(__dirname, '../client');

//serve static files from react
app.use(express.static(path.join(clientDirectory, 'dist')));

//get projects, employees and project assignments
app.use("/api", router);

//handle every other route with index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(clientDirectory, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});