const db = require('../db');

// Insert a new booking
exports.bookMovie = (req, res) => {
  const { userId, movieId, seats, time } = req.body;

  if (!userId || !movieId || !seats || !time) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const query = `
    INSERT INTO bookings (userId, movieId, seats, time)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [userId, movieId, seats, time], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Booking successful" });
  });
};

// Fetch booking history for a user
exports.getBookingsByUser = (req, res) => {
  const userId = req.params.userId;

  const query = `
    SELECT b.*, m.title 
    FROM bookings b 
    JOIN movies m ON b.movieId = m.id 
    WHERE b.userId = ?
    ORDER BY b.id DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
