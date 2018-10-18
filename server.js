const express= require('express');
const app=express();
const bodyParser=require ('body-parser');

app.use(express.static(__dirname + '/public/dist/public')); //inputted after downloading angular

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



require ('./server/config/mongoose'); //('./') means current directory so if you're on server.js--you can see the server folder on the same level 
require ('./server/config/routes')(app);

app.listen(8000, ()=>console.log('No curiosity'));