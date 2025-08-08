const db = require('../db');

exports.bookMovie = (req, res) => {
    const { userId, movieId, seats, time } = req.body;
    db.query("INSERT INTO bookings (userId, movieId, seats, time) VALUES (?, ?, ?, ?)",
        [userId, movieId, seats, time], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "Booking successful" });
    });
};
