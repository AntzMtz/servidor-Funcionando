const express = require('express');
const routers = express.Router();
const indexControler = require('../controllers/rutas');
const cors = require('cors');
routers.use(cors());
var listaBlanca = [
        'http://127.0.0.1:8081',
        'http://localhost:5000/products'
    ]
    // const url = origin.location;
var corOptions = {



    origin: function(origin, callback) {
        if (listaBlanca.indexOf(origin) > -1) {
            // console.log("URL" + url)
            console.log("Lista" + origin);
            callback(null, true)
        } else {
            // console.log("URL" + url)
            console.log("Lista" + origin);

            callback(new Error('No se permite por CORS'), false)
        }
    }
}

routers.get('/', indexControler.prin);
routers.get('/products', indexControler.produ);
routers.post('/new-products', cors(corOptions), indexControler.addprodu);
routers.get('/new-products', indexControler.getprodu);

module.exports = routers;