const express = require('express');
const routes = express.Router();

//importando controllers
const ProductController = require('./controllers/ProductController')

//Rota FRONT



//Rota API
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;