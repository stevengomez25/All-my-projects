const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');


//Inicializations

const app = express();

//settings

app.set('port',process.env.port || 4000);
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Global Variables

app.use(function(req, res, next) {
    
    next();
})

//Routes

app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));



//Public

app.use(express.static(path.join(__dirname, 'public')));

//starting server

app.listen(app.get('port'),()=>{
    console.log('listening on port: ', app.get('port'));
});
