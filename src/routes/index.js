const express = require('express');
const routers = express.Router();
const indexControler = require('../controllers/rutas');

routers.get('/', indexControler.prin);
routers.get('/products', indexControler.produ);
routers.post('/products', indexControler.addprodu);

module.exports = routers;