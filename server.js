const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('handlebars');

const app = express()
const port = 3000
const urlDB = 'mongodb://localhost:27017/tastingSpirit'

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// Express Static
app.use('/assets', express.static('public'));

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
    console.log("le serveur tourne sur le port" + port);
})
