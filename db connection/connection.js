const mongoose = require('mongoose');

const CONN_STRING = process.env.CONN_STR;

module.exports = mongoose.connect(CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err);
    });




