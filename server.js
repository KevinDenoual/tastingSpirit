/** NOTES
 * 
 * 
 * 
 * 
 * ************/  

// ************** Import Module***********
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const helpers = require('handlebars-helpers')();
const passport = require('passport');
// const keys = require('./api/config/keys');
const morgan = require('morgan') // Documente le journal  
const helmet = require('helmet') // Helmet helps you secure your Express apps by setting various HTTP headers
const app = express()
const mongoStore = MongoStore(expressSession);
const port = 3000


// ************** API ***********
const googleStrat = require('./api/config/googleStrat')
const keys = require('./api/config/keys')

const urlDB = 'mongodb://localhost:27017/tastingSpirit'



// ************** Method-Override ***********
app.use(methodOverride('_method'));


// ************** Body Parser ***********
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


// ************** Helper ***********
// limitEach
handlebars.registerHelper('limitEach', function (arr, limitEach) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(-limitEach).reverse();
});


// ************** Express Static ***********
app.use('/assets', express.static('public'));


// ************** Express Session ***********
app.use(expressSession({
    maxAge: 24*60*60*1000, // 24h
    keys: keys.session.cookieKey,
    secret: 'securite',
    name: 'cookie',
    saveUninitialized: true,
    resave: false,
    store: new mongoStore(
        { mongooseConnection: mongoose.connection }
    )
}));

app.use('*', (req, res, next) => {
    res.locals.id = req.session.userId
    res.locals.user = req.session.status
    res.locals.firstname = req.session.firstname
    res.locals.lastname = req.session.lastname
    res.locals.isAdmin = req.session.isAdmin
    res.locals.isVerified = req.session.isVerified
    res.locals.isBan = req.session.isBan
    next()
})


// ************** Initialize Passport ***********
app.use(passport.initialize());
app.use(passport.session());


// ************** Express Validator ***********
app.use(express.json());


// ************** Helmet ***********
app.use(helmet())


// ************** Morgan ***********
app.use(morgan('dev'));


// ************** Mongoose ***********
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});


// ************** Handlebar ***********
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');


// ************** Router ***********
const router = require('./api/router')
app.use("/", router)


// ************** Error404 ***********
app.use((req, res) => {
    res.render('error404')
})


// ************** Port ***********
app.listen(port, function () {
    console.log("le serveur tourne sur le port " + port);
})
