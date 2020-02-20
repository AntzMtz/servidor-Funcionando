const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// var helmet = require('helmet');

const routes = require('./src/routes/index');
const routesAut = require('./src/routes/autentication');
const routesLin = require('./src/routes/links');

const morgan = require('morgan');
const exphbs = require('express-handlebars');
//inicializar
const app = express();
// const cors = require('cors');

//settings

app.set('port', process.env.PORT || 5000);

app.set('views', path.join(__dirname, 'src/views'));
// app.engine('html', require('hbs').renderFile);

app.engine('.hbs', exphbs({
    defaultLayout: 'index.hbs',
    layoutsDir: path.join(app.get('views')),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewers
// app.use(cors());
// app.use(helmet());
app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();

});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.disable('x-powered-by');

//Gloval Variables
app.use((req, res, next) => {
    next();
});
//routers
app.use(routes);
app.use(routesAut);
app.use('/links', routesLin);



//static
app.use(express.static(path.join(__dirname, 'public')));



//start
app.listen(app.get('port'), () => {
    console.log('server on port: ' + app.get('port'))
});