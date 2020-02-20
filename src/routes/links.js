const express = require('express');
const routers = express.Router();


const pool = require('../database');

routers.get('/add', (req, res) => {
    res.render('links/add');
});
module.exports = routers;