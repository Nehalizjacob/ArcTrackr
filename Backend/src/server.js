import express from "express";
import dotenv from "dotenv";
import router from "./Routes/AdminRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
connectDB();

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:4000',
  'https://arc-trackr-mu.vercel.app',
  'https://arctrackr-v71m.onrender.com'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", router);

app.get("/", (req, res) => res.send("Server is ready"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
