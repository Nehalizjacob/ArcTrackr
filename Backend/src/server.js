import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/AdminRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// Connect to database
connectDB();

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:4000',
      'http://localhost:3000',
      'https://arc-trackr-mu.vercel.app',
      'https://arctrackr-v71m.onrender.com'
    ];

    console.log("CORS Origin:", origin); // Log for debugging

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  methods: "GET,POST,PUT,DELETE,PATCH",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/admin", router);

// Test route
app.get("/", (req, res) => res.send("Server is ready"));

// CORS test route (optional for debugging)
app.get('/cors-check', (req, res) => {
  res.json({ origin: req.headers.origin });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
