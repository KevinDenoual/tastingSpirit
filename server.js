const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override')

const app = express()
const port = 3000
const urlDB = 'mongodb://localhost:27017/tastingSpirit'
const mongoStore = MongoStore(expressSession);

// Method-Override
app.use(methodOverride('_method'));

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// Express Static
app.use('/assets', express.static('public'));

// Express Session
app.use(expressSession({
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
