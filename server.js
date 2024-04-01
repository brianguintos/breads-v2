const express = require('express');
const morgan = require('morgan');


const app = express();

// CONFIGURATION
require('dotenv').config();

const PORT = process.env.PORT;

app.use(morgan('tiny'));

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
app.get('/', function(req, res) {
    res.send('Welcome to an Awesome App about Breads!')
})

// BREADS
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, function() {
    console.log('http://localhost:${PORT}')
})