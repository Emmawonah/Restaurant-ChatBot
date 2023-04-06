const { Console } = require("console");
const session = require("express-session")
require('dotenv').config()

const sessionMiddleware = session({
    name: "Restaurant-ChatBot",
    secret: process.env.SESSION_SECRET || 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
});

module.exports = sessionMiddleware;