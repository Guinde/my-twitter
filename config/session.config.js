const { app } = require("../app");
const { secretSession } = require("../secret/secret");
const session = require('express-session');
const mongoStore = require ('connect-mongo')(session);
const mongoose = require("mongoose");

app.use(session({
    secret: secretSession,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 14 // durée de 2 semaines en milliseconde
    },
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 60 * 60 * 24 * 14 // 2 semaines en seconde (match avec la durée du cookie)
    })
}));