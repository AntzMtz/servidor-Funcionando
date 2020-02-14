const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index')
const app = express();
const cors = require('cors');

//settings

app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'src/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewers
app.use(cors());
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();

});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//routers
app.use(routes);
//static
app.use(express.static(path.join(__dirname, 'public')));



//start
app.listen(app.get('port'), () => {
    console.log('server on port: ' + app.get('port'))
});