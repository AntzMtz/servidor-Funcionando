const express = require('express');
const routers = express.Router();
const indexControler = require('../controllers/rutas');

routers.get('/', indexControler.prin);
routers.get('/products', indexControler.produ);
routers.post('/new-products', indexControler.addprodu);
routers.get('/new-products', indexControler.getprodu);

module.exports = routers;