const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const indexRoutes = require('./routes/index');
const mongoose = require('mongoose');

//conectar a la bd
mongoose.connect('mongodb+srv://ivan:ivan@clusterivan-hftiu.mongodb.net/test?retryWrites=true&w=majority')
.then(db => console.log('DB conectada'))
.catch(err => console.log(err));

//Import rutas


//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', indexRoutes)

//Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})