const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://user:user@cluster0-ymeve.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

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

const Schema = mongoose.Schema;

const carSchema = new Schema({
    carName: String,
    carYear: String,
    carImg: String,
    carPrice: String

})

const querySchema = new Schema({
    name: String,
    email: String,
    phone: String,
    query: String

})

const CarModel = mongoose.model('Car', carSchema);
const QueryModel = mongoose.model('Query', querySchema);

app.get('/', (req, res) => res.send('This is the server!'))

app.get('/whatever', (req, res) => {
    res.send('Hello to Whatever!')
});

app.get('/hello/:name', (req, res) =>{
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
});

app.post('/api/cars',  (req, res) =>{
    console.log(req.body);    
    console.log(req.body.carName);    
    console.log(req.body.carYear);    
    console.log(req.body.carImg);  
    console.log(req.body.carPrice);  

    CarModel.create({
        carName: req.body.carName,
        carYear: req.body.carYear,
        carImg: req.body.carImg,
        carPrice: req.body.carPrice
    
    });

    res.json('Data Uploaded');  
});

app.post('/api/queries',  (req, res) =>{
    console.log(req.body);    
    console.log(req.body.name);    
    console.log(req.body.email);    
    console.log(req.body.phone);  
    console.log(req.body.query);  

    QueryModel.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        query: req.body.query
    
    });

    res.json('Data Uploaded');  
});

app.put('/api/cars/:id', (req, res) =>{
    console.log("Edit: " + req.params.id);

    CarModel.findByIdAndUpdate(req.params.id, 
        req.body,
        {new: true},
        (error, data)=>{
            res.json(data);
        })
})

app.delete('/api/cars/:id', (req, res) =>{
    console.log(req.params.id);

    CarModel.deleteOne({_id: req.params.id}, (error,data) =>{
        if(error)
            res.json(error);
        res.json(data);
    });
});

app.get('/api/cars/:id', (req, res)=>{
    console.log(req.params.id);

    CarModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    });

});

app.get('/api/cars', (req, res) =>{

    CarModel.find((error,data)=>{
        res.json(data);
    });

});

app.get('/api/queries', (req, res) =>{

    QueryModel.find((error,data)=>{
        res.json(data);
    });

});

app.get('/test', (req, res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/name', (req, res) =>{
    console.log(req.query.firstname)
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname)
});

app.post('/name', (req, res) =>{
    console.log(req.body.firstname)
    res.send('Post was Successful! Welcome ' + req.body.firstname + ' ' + req.body.lastname)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))