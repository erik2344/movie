const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo")
app.use(cors());

app.use(express.json());

require("dotenv").config();

app.set("view engine", "ejs"),

 app.use("/", require("./routes"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
});

dbConnect();
