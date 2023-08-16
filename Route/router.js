//importing express
const express = require('express');

//importing controllers 
const movieController = require('../controllers/movieController');

//creating a router instance from express.Router() class.
const router = express.Router();


router.route('/booking')
            .get(movieController.getLastBooking)
            .post(movieController.BookedMovie);


            //exporting router
module.exports = router;