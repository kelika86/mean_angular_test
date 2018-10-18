const mongoose=require('mongoose');
const Pizza=mongoose.model('Pizza'); //model already registered 

module.exports={
    allPizzas: (req, res)=>{
        Pizza.find({}, (err, pizzas)=>{
            if (err){
                res.json(err);
            }else{
                res.json(pizzas);
            }
            
        })
    },

    singlePizza: (req, res)=>{
        Pizza.findOne({_id: req.params.id}, (err, pizza)=>{ //the id is pulled from url
            if (err) {
                res.json(err);
            } else {
                res.json(pizza);
            }
        })
    }, 

    deletePizza: (req, res) => {
        Pizza.remove({ _id: req.params.id }, (err, data) => { //the id is pulled from url
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    }, 

    editPizza: (req, res) => {
        Pizza.update({ _id: req.params.id }, req.body, (err, data) => { //the id is pulled from url
            if (err) {
                res.json(err);
            } else {
                res.json(data); //data instead of pizza bc it's a response whether or not it deleted something
            }
        });
    }, 

    editPizza: (req, res) => {
        Pizza.update({ _id: req.params.id }, req.body, (err, data) => { //the id is pulled from url
            if (err) {
                res.json(err);
            } else {
                res.json(data); //data instead of pizza bc it's a response whether or not it deleted something
            }
        });
    }, 

    createPizza: (req, res)=>{
        Pizza.create(req.body, (err, pizza)=>{
            if (err){
                res.json(err);
            }else{
                res.json(pizza);
            }
        })
    },

}