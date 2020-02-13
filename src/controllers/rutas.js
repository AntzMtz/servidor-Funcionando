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
    console.log(req.body.newItem)
    const nuevo = req.body.newItem
    items.push({
        id: items.length + 1,
        name: nuevo
    });
    res.redirect('/products');
}
module.exports = {
    prin,
    produ,
    addprodu
}