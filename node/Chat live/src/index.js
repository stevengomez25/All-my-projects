const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const sesion = require('express-session');
const mySQLStore = require('express-mysql-session');
const { database } = require('./keys');
const passport = require('passport');


//Inicializations

const app = express();
require('./lib/passport');

//settings

app.set('port',process.env.port || 4001);
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
app.use(sesion({
    secret: 'Stevenmysqlnodesesion',
    resave: false,
    saveUninitialized: false,
    store: new mySQLStore(database)
}))
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Global Variables

app.use(function(req, res, next) {
    app.locals.success = req.flash("success");
    app.locals.message = req.flash("message");
    app.locals.user = req.user;
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
