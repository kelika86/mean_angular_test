const mongoose=require ('mongoose');

const PizzaSchema=mongoose.Schema({
    name: {type: String, minlength: [3, 'Name must be 3 or more characters']},
    price: Number
});

mongoose.model('Pizza', PizzaSchema); //model called Pizza and using the Pizza schema--registers our schema
//all this says is take this schema, register the schema and call it 'Pizza' when it's registered