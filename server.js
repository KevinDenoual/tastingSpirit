const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const helpers = require('handlebars-helpers')();
const sweetalert = require('sweetalert');
const passport = require('passport');
const keys = require('./api/config/keys');

const app = express()
const port = 3000
const urlDB = 'mongodb://localhost:27017/tastingSpirit'
const mongoStore = MongoStore(expressSession);
const googleStrat = require('./api/config/googleStrat')
const facebookStrat = require('./api/config/facebookStrat')


// Method-Override 
app.use(methodOverride('_method'));

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

//Helpers
// **************limitEach***********
handlebars.registerHelper('limitEach', function (arr, limitEach) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(-limitEach).reverse();
});

// Express Static
app.use('/assets', express.static('public'));

// Express Session
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

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(express.json());

// Mongoose
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Handlebars
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');


// Router
const router = require('./api/router')
app.use("/", router)

// Error404
app.use((req, res) => {
    res.render('error404')
})

// Port
app.listen(port, function () {
    console.log("le serveur tourne sur le port " + port);
})
