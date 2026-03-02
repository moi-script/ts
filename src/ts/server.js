"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
// Initialize Express app
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Middleware
app.use((0, body_parser_1.json)());
// In-memory database
var users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' }
];
// Routes
app.get('/api/users', function (req, res) {
    res.json(users);
});
app.get('/api/users/:id', function (req, res) {
    var user = users.find(function (u) { return u.id === parseInt(req.params.id); });
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    res.json(user);
});
app.post('/api/users', function (req, res) {
    var _a = req.body, username = _a.username, email = _a.email;
    if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required' });
    }
    var newUser = {
        id: users.length + 1,
        username: username,
        email: email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
// Error handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
// Start server
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
