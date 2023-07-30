const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config({path:'./config.env'});
const connection = require('./db connection/connection');


const app = express();
const PORT = process.env.PORT || 8080;
const movieRouter = require('./Route/router')


app.use(cors());
app.use(express.json());
app.use('/api',movieRouter);


app.listen(PORT, ()=>{
    console.log("Server running at 8080");
});




