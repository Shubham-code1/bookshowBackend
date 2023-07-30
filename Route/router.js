const express = require('express');

const movieController = require('../controllers/movieController');

const router = express.Router();

router.route('/booking')
            .get(movieController.getLastBooking)
            .post(movieController.BookedMovie);

module.exports = router;