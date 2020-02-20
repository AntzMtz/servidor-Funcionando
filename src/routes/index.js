const express = require('express');
const routers = express.Router();
const indexControler = require('../controllers/rutas');
// const cors = require('cors');
// routers.use(cors());


routers.get('/links/add', indexControler.getLinkAdd);
routers.get('/', indexControler.prin);
routers.get('/products', indexControler.produ);
// routers.post('/new-products', indexControler.rut, cors(indexControler.corsOptions), indexControler.addprodu);
// routers.get('/new-products', indexControler.getprodu);

module.exports = routers;