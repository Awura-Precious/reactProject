const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const review = require("./routes/review.js");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/movie/review", review);

const port = process.env.Port || 4000;
app.listen(port, () => console.log(`Server is running on ${port}`));
