const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

//import routes
const allroutes = require("./routes/allroutes");

//import configuration function
const { dbConnect } = require("./config/Database");

const PORT = process.env.PORT || 8800;

//server 
const app = express();

//functionalities
app.use(bodyParser.json());
app.use(cors());

//mounting routes
app.use("/api/v1", allroutes);

//server listen
app.listen(PORT, () => {
  console.log("Server live at : ", PORT);
});

//db connect
dbConnect();

