const items = [
    { id: 1, name: 'producto1' },
    { id: 2, name: 'producto2' },
    { id: 3, name: 'producto3' },
    { id: 4, name: 'producto4' },
    { id: 5, name: 'producto5' },
    { id: 6, name: 'producto6' }
]

const prin = (req, res) => {
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

const addprodu = (req, res, next) => {
    console.log("Inicio");
    
    
    
    // console.log(req.body)
    const nuevo = req.body.newItem
    const Url = req.body.newUrl
    // console.log("URL" + Url);
    console.log("URLRuta: "+ Url.substring(Url.length - 9,Url.length));
    var URLSUB=Url.substring(Url.length - 9,Url.length);
    items.push({
        id: items.length + 1,
        name: nuevo
    });

    if (URLSUB == '/products') {
    res.redirect('/products');
    } else {
    res.send('La insercion fue correcta');
    }


}

const getprodu = (req, res, next) => {

    res.redirect('/products');

}
module.exports = {
    prin,
    produ,
    addprodu,
    getprodu
}