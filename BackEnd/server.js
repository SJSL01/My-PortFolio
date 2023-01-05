//Imports

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()



// App configs

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", require("./Routes/Routes.js"));
app.listen(process.env.PORT, () => console.log("Server Running"));