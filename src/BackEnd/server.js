const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');

//link to connect to the mongo db
const mongoDB = 'mongodb+srv://user:user@cluster0-ymeve.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

//allows cross talk with CORS
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse application/json
app.use(bodyParser.json());

//creates folder to parse info into database
const Schema = mongoose.Schema;

//store the variables into a car schema
const carSchema = new Schema({
    carName: String,
    carYear: String,
    carImg: String,
    carPrice: String

})

//store the variables into a query schema
const querySchema = new Schema({
    name: String,
    email: String,
    phone: String,
    query: String

})

//creates a folder in the db and stores the schema into it
const CarModel = mongoose.model('Car', carSchema);
const QueryModel = mongoose.model('Query', querySchema);

//homepage of the server
app.get('/', (req, res) => res.send('This is the server!'))

//address where the car details is stored
app.post('/api/cars',  (req, res) =>{
    console.log(req.body);    
    console.log(req.body.carName);    
    console.log(req.body.carYear);    
    console.log(req.body.carImg);  
    console.log(req.body.carPrice);  

    //saves it to the db
    CarModel.create({
        carName: req.body.carName,
        carYear: req.body.carYear,
        carImg: req.body.carImg,
        carPrice: req.body.carPrice
    
    });

    res.json('Data Uploaded');  
});

//address where the query details is stored
app.post('/api/queries',  (req, res) =>{
    console.log(req.body);    
    console.log(req.body.name);    
    console.log(req.body.email);    
    console.log(req.body.phone);  
    console.log(req.body.query);  

    //Stores the query to mongo db also
    QueryModel.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        query: req.body.query
    
    });

    res.json('Data Uploaded');  
});

//used to edit an object 
app.put('/api/cars/:id', (req, res) =>{
    console.log("Edit: " + req.params.id);

    //if the id matches then update the car details
    CarModel.findByIdAndUpdate(req.params.id, 
        req.body,
        {new: true},
        (error, data)=>{
            res.json(data);
        })
})

//used for deleting a car object from the database
app.delete('/api/cars/:id', (req, res) =>{
    console.log(req.params.id);

    CarModel.deleteOne({_id: req.params.id}, (error,data) =>{
        if(error)
            res.json(error);
        res.json(data);
    });
});

//printing out details about a spicific car
app.get('/api/cars/:id', (req, res)=>{
    console.log(req.params.id);

    CarModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    });

});

//reading from MongoDB
app.get('/api/cars', (req, res) =>{

    CarModel.find((error,data)=>{
        res.json(data);
    });

});

//reading from MongoDB
app.get('/api/queries', (req, res) =>{

    QueryModel.find((error,data)=>{
        res.json(data);
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))