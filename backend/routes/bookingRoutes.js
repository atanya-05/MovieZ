const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book', bookingController.bookMovie);
router.get('/user/:userId', bookingController.getBookingsByUser);

module.exports = router;