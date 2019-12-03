const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

var models = require('./models');
models.sequelize.sync()
    .then(function() {
    console.log('working db');
    })
    .catch(err => console.log('Something went wrong with the db'));

require('./api/routes')(app);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});