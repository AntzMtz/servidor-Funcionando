//Constantes
const items = [
    { id: 1, name: 'producto1' },
    { id: 2, name: 'producto2' },
    { id: 3, name: 'producto3' },
    { id: 4, name: 'producto4' },
    { id: 5, name: 'producto5' },
    { id: 6, name: 'producto6' }
]

var listaBlanca = [
    'http://128.0.0.1:8081/components/login/src/GeneQr/Envia.html'
]

var Url = "http://";

//Funciones

const prin = (req, res, next) => {
    res.render('index', {
        title: "My Servidor"
    })
}

const produ = (req, res, next) => {
    res.render('productos.html', {
        title: 'lista de productos',
        items: items
    })
}

const rut = (req, res, next) => {
    const nuevo = req.body.newItem
    Url = req.body.newUrl
    next();
}
var corsOptions = {
    origin: function(origin, callback) {
        // if ((listaBlanca.indexOf(Url) > -1) || origin) {
        if (listaBlanca.indexOf(Url) !== -1 || origin) {
            // console.log("ER:"+listaBlanca.indexOf(Url))
            callback(null, true)
        } else {
            console.log("ER1" + origin);
            //  Error="NO SE PUEDE POR CORS";  
            // callback(Error)
            // var nombre = ('Por favor ingresa tu nombre.')
            callback(new Error("mojj"))
        }

    }
}

const addprodu = (req, res, next) => {

    const nuevo = req.body.newItem
    const Url = req.body.newUrl
    var URLSUB = Url.substring(Url.length - 9, Url.length);
    items.push({
        id: items.length + 1,
        name: nuevo
    });
    console.log("Utre:" + URLSUB);
    res.json([{
        items: items
    }])
}

const getprodu = (req, res, next) => {
    res.redirect('/products');
}

const getLinkAdd = (req, res, next) => {
    res.render('../views/Links/add.ejs')

}
module.exports = {
    prin,
    produ,
    addprodu,
    getprodu,
    rut,
    corsOptions,
    getLinkAdd

}