const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
mongoose.set('debug', true);



// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando BD
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true }
);

requireDir('./src/models');

//Rotas
app.set('/views', '/views');
app.set('view engine', 'pug');

app.use('/', require('./src/routes'));
// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!'});
// })

app.use('/api', require('./src/routes'));


app.listen(3001);
