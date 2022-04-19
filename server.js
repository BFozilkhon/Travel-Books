const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
var cors = require('cors')

//dataBase
connectDB();

app.use(cors()) // Use this after the variable declaration

//body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/travel', require('./routes/travelControllers'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on port : ${PORT}`));
