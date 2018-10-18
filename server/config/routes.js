const pizzaController = require('./../controllers/pizzas'); //currently in config and need to go up a level

module.exports = (app) => {
    app.get('/pizzas', pizzaController.allPizzas);
    app.get('/pizzas/:id', pizzaController.singlePizza); 
    app.post('/pizzas', pizzaController.createPizza);
    app.put('/pizzas/:id', pizzaController.editPizza);
    app.delete('/pizzas/:id', pizzaController.deletePizza);
}