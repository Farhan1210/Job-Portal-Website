// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectionDB } = require("./config/db.config.js");
const userRouter = require("./routes/user.route.js");
const path = require("path");

const uploadDir = path.join(__dirname, "/uploads");

const app = express();
app.use(cors()); // in production restrict origin
app.use(express.json());

app.use("/uploads", express.static(uploadDir));

app.use("/api", userRouter);

app.get("/api/health", (req, res) => res.json({ ok: true, message: "Geh!" }));

app.listen(process.env.PORT, () => {
  console.log(`Backend running at http://localhost:${process.env.PORT};`);
  connectionDB();
});
