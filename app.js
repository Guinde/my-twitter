require('./database/index.js');
const env = require(`./environment/${ process.env.NODE_ENV }.js`);
const indexRouter = require('./routes/index.js');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const errorHandler = require('errorhandler');

const app = express(); 

exports.app = app;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require("./config/session.config");
require("./config/passport.config");

app.use('/', morgan('short'))
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.json());
app.use('/', express.urlencoded({extended: true}));

app.use('/', indexRouter);

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message
        })
    })
}

app.listen(env.port);


