// importing dotenv,express and cors
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// adding config.env file variables to node process.
dotenv.config({path:'./config.env'});
const connection = require('./db connection/connection');


const app = express();
//PORT is either 8080 or will take from process if available.
const PORT = process.env.PORT || 8080;
const movieRouter = require('./Route/router')

// middlewares ---->
app.use(cors());
// this middleware is for parsing the body data
app.use(express.json());
//mounting the movierouter on /api
app.use('/api',movieRouter);

// Server creation 

app.listen(PORT, ()=>{
    console.log("Server running at 8080");
});




