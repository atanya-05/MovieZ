const jwt = require('jsonwebtoken');
const db = require('../db');

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: result[0].id }, "secretkey");
        res.json({ token });
    });
};

exports.signupUser = (req, res) => {
    const { name, email, password } = req.body;
    db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "User created successfully" });
    });
};