const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    app = express(),
    cors = require('../config/cors');

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('./app/public'));

consign()
    // .include('config')
    .then('app/daos')
    .then('app/controllers')
    .then('app/routes')
    .into(app)

module.exports = app;
