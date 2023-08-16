//importing mongoose
const mongoose = require('mongoose');
//remote connection string
const CONN_STRING = process.env.CONN_STR;
//local connection string
const local_CONN_STR = process.env.loc_CONN_STR;


//creating remote connection with MongoDB atlas .
module.exports = mongoose.connect(local_CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err);
    });




